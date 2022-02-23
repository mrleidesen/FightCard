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
        <span class="mr-5">对方手牌：{{ enemyCards.length }}</span>
        <span class="mr-5">剩余卡牌：{{ cards.length }}</span>
        <ui-button @click="handleTurnEnd">回合结束</ui-button>
      </div>
      <div class="flex-1 items-end flex overflow-x-auto">
        <div v-for="card in userCards" :key="card.id" class="first:ml-0 -ml-16">
          <game-card
            :value="card.value"
            :name="card.name"
            :type="card.type"
            :title="card.desc"
            @click="selectCard(card.id)"
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
import { computed, ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";

import GameCard from "@/components/GameCard.vue";
import GameLogs from "@/components/GameLogs.vue";
import UserStatus from "@/components/UserStatus.vue";
import UiButton from "@/components/UiButton.vue";

import { userHealth, username } from "@/store/user";
import { enemyEffect, enemyHealth, enemyname } from "@/store/enemy";
import {
  cards,
  userCards,
  enemyCards,
  drawCards,
  onUseCard,
} from "@/store/cards";
import { addLog } from "@/store/log";
import { damageByEnemy, healSelf, maxHealth } from "@/utils";
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

    watch(
      isUserTurn,
      () => {
        if (isUserTurn.value) {
          drawCards(userCards);
        } else {
          drawCards(enemyCards);
          enemyAction();
        }
      },
      {
        immediate: true,
      }
    );

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

      autoDropCards(userCards);
      autoDropCards(enemyCards);

      turn.value += 1;
    };

    const autoDropCards = (cards, maxCards = 4) => {
      const maxLength = cards.length;

      if (maxLength <= maxCards) {
        return;
      }

      for (let i = 0; i < maxLength - maxCards; i++) {
        const index = getRandomNumber(0, maxLength - 1);
        cards.splice(index, 1);
      }
    };

    const dropCards = (cards, count = 1) => {
      if (cards.length === 0) {
        return;
      }

      cards.splice(0, count);
    };

    const selectCard = (id) => {
      if (end.value) {
        return;
      }

      const from = isUserTurn.value ? username : enemyname;
      const to = isUserTurn.value ? enemyname : username;
      const _cards = isUserTurn.value ? userCards : enemyCards;

      const card = _cards.find((card) => card.id === id);

      if (card.type === "atk") {
        damageByEnemy(isUserTurn.value ? enemyHealth : userHealth, card.value);
      }
      if (card.type === "heal") {
        healSelf(isUserTurn.value ? userHealth : enemyHealth, card.value);
      }
      if (card.type === "draw") {
        drawCards(
          isUserTurn.value ? userCards : enemyCards,
          card.value,
          Date.now()
        );
      }
      if (card.type === "drop") {
        dropCards(isUserTurn.value ? enemyCards : userCards, card.value);
      }

      onUseCard(isUserTurn.value ? userCards : enemyCards, id);
      addLog(from, to, card.type, card.name, card.value);
    };

    const useAllCards = (cards) => {
      if (cards.length !== 0) {
        for (const card of cards) {
          selectCard(card.id);
        }
      }
    };

    const enemyAction = () => {
      const drawTypeCards = enemyCards.filter((card) => {
        return card.type === "draw";
      });

      if (drawTypeCards.length > 0) {
        useAllCards(drawTypeCards);
        setTimeout(enemyAction, 50);
        return;
      }

      const dropCards = enemyCards.filter((card) => {
        return card.type === "drop";
      });
      const healCards = enemyCards.filter((card) => {
        return card.type === "heal";
      });
      const atkCards = enemyCards.filter((card) => card.type === "atk");

      if (enemyHealth.value < maxHealth * 0.8 && healCards.length !== 0) {
        for (const card of healCards) {
          if (enemyHealth.value < maxHealth * 0.9) {
            selectCard(card.id);
          }
        }
      }

      if (dropCards.length !== 0) {
        for (const card of dropCards) {
          if (userCards.length === 0) {
            break;
          } else {
            selectCard(card.id);
          }
        }
      }

      useAllCards(atkCards);
      enemyEffect();
      setTimeout(handleTurnEnd, 50);
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
      selectCard,
      turn,
      isUserTurn,
    };
  },
};
</script>
