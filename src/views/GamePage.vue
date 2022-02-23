<template>
  <div class="w-full h-full p-4 flex flex-col gap-4">
    <div class="flex-shrink-0">
      <user-status :value="enemyHealth" :name="enemyname" />
    </div>

    <div class="flex-1 w-full border border-white rounded p-2 flex flex-col">
      <div class="h-48">
        <game-logs />
      </div>
      <div class="p-2">
        <span class="mr-5">剩余卡牌：{{ cards.length }}</span>
        <ui-button @click="handleTurnEnd">回合结束</ui-button>
      </div>
      <div class="flex-1 items-end flex">
        <div v-for="card in userCards" :key="card.id" class="first:ml-0 -ml-16">
          <game-card
            :value="card.value"
            :name="card.name"
            :type="card.type"
            @click="handleUseCard(card.id)"
          />
        </div>
      </div>
    </div>

    <div class="flex-shrink-0">
      <user-status :value="userHealth" :name="username" />
    </div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";

import GameCard from "@/components/GameCard.vue";
import GameLogs from "@/components/GameLogs.vue";
import UserStatus from "@/components/UserStatus.vue";
import UiButton from "@/components/UiButton.vue";

import { userHealth, username } from "@/store/user";
import { enemyHealth, enemyname } from "@/store/enemy";
import {
  cards,
  userCards,
  enemyCards,
  sendCard,
  onUseCard,
} from "@/store/cards";
import { addLog } from "@/store/log";
import { damageByEnemy, healSelf } from "@/utils";
import { getRandomNumber } from "@/utils/number";

export default {
  components: {
    GameCard,
    GameLogs,
    UserStatus,
    UiButton,
  },

  setup() {
    const router = useRouter();
    const turn = ref(0);
    const end = computed(
      () => userHealth.value === 0 || enemyHealth.value === 0
    );
    const isUserTurn = computed(() => turn.value % 2 === 0);

    watchEffect(() => {
      if (isUserTurn.value) {
        sendCard(userCards);
      } else {
        sendCard(enemyCards);
        const healCards = enemyCards.filter((card) => {
          return card.type === "heal";
        });
        const atkCards = enemyCards.filter((card) => card.type === "atk");

        if (enemyHealth.value < 80) {
          if (healCards.length !== 0) {
            const index = getRandomNumber(0, healCards.length - 1);

            handleUseCard(healCards[index].id);
          }
        }

        if (atkCards.length !== 0) {
          const index = getRandomNumber(0, atkCards.length - 1);

          handleUseCard(atkCards[index].id);
        }

        setTimeout(() => {
          handleTurnEnd();
        }, 0);
      }
    });

    watchEffect(() => {
      if (end.value) {
        if (userHealth.value === 0) {
          router.push("/end?result=lose");
        } else {
          router.push("/end?result=win");
        }
      }
    });

    const handleTurnEnd = () => {
      if (end.value) {
        return;
      }

      turn.value += 1;
    };

    const handleUseCard = (id) => {
      if (end.value) {
        return;
      }

      const from = isUserTurn.value ? username : enemyname;
      const to = isUserTurn.value ? enemyname : username;
      const _cards = isUserTurn.value ? userCards : enemyCards;

      const card = _cards.find((card) => card.id === id);

      if (isUserTurn.value) {
        if (card.type === "atk") {
          damageByEnemy(enemyHealth, card.value);
        }
        if (card.type === "heal") {
          healSelf(userHealth, card.value);
        }
      } else {
        if (card.type === "atk") {
          damageByEnemy(userHealth, card.value);
        }
        if (card.type === "heal") {
          healSelf(enemyHealth, card.value);
        }
      }

      onUseCard(isUserTurn.value ? userCards : enemyCards, id);
      addLog(from, to, card.type, card.name, card.value);
    };

    return {
      userHealth,
      username,
      enemyHealth,
      enemyname,
      cards,
      userCards,
      enemyCards,
      handleTurnEnd,
      handleUseCard,
      turn,
      isUserTurn,
    };
  },
};
</script>
