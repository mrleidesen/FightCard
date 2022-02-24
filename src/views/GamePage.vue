<template>
  <div class="w-full h-full p-4 flex flex-col gap-4">
    <div class="flex-shrink-0">
      <user-status :status="monster" />
    </div>

    <div class="flex-1 w-full border border-white rounded p-2 flex flex-col">
      <div class="h-48">
        <game-logs />
      </div>
      <div class="flex-1 items-end flex overflow-x-auto">
        <div
          v-for="skill in playerSkills"
          :key="skill.name"
          class="first:ml-0 -ml-16 relative"
        >
          <game-card
            :skill="skill"
            :atk-disabled="atkDisabled"
            :skill-disabled="skillDisabled"
            :disabled="player.mp < skill.cost"
            @click="handleUseSkill(skill.name)"
          />
        </div>
      </div>
    </div>

    <div class="flex-shrink-0">
      <user-status :status="player" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import shuffle from "lodash/shuffle";

import GameCard from "@/components/GameCard.vue";
import GameLogs from "@/components/GameLogs.vue";
import UserStatus from "@/components/UserStatus.vue";

import { player, defaultSkills as playerSkills } from "@/store/player";
import { monster, defaultSkills as monsterSkills } from "@/store/monster";
import { doAction } from "@/store";

export default {
  components: {
    GameCard,
    GameLogs,
    UserStatus,
  },

  setup() {
    const router = useRouter();
    const skillDisabled = ref(false);
    const atkDisabled = ref(false);
    const playerTimeout = 2000;
    const monsterTimeout = 4000;
    let timer = null;

    const gameEnd = computed(() => {
      return monster.hp === 0 || player.hp === 0;
    });

    watch(gameEnd, () => {
      if (gameEnd.value) {
        clearAutoAttackTimer();
        router.push(`/end?result=${monster.hp === 0 ? "win" : "lose"}`);
      }
    });

    onMounted(() => {
      setAutoAttackTimer();
    });

    onUnmounted(() => {
      clearAutoAttackTimer();
    });

    function autoAttack() {
      const hpPercent = (monster.hp / monster.maxHP) * 100;
      const attack = shuffle(
        monsterSkills.filter((skill) => skill.type !== "heal")
      );

      if (hpPercent < 90) {
        doAction(monster, player, shuffle(monsterSkills).pop());
      } else {
        doAction(monster, player, attack.pop());
      }
    }

    function setAutoAttackTimer() {
      if (timer) {
        clearAutoAttackTimer();
      }

      timer = setInterval(() => {
        autoAttack();
      }, monsterTimeout);
    }

    function clearAutoAttackTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function handleUseSkill(name) {
      const skill = playerSkills.find((skill) => skill.name === name);

      if (skill.type === "atk" && atkDisabled.value) {
        return;
      }
      if (skill.type !== "atk" && skillDisabled.value) {
        return;
      }

      if (player.mp < skill.cost) {
        return;
      }

      doAction(player, monster, skill);

      if (skill.type === "atk") {
        atkDisabled.value = true;
        setTimeout(() => {
          atkDisabled.value = false;
        }, 1500);
      } else {
        skillDisabled.value = true;
        setTimeout(() => {
          skillDisabled.value = false;
        }, playerTimeout);
      }
    }

    return {
      player,
      monster,
      playerSkills,
      handleUseSkill,
      skillDisabled,
      atkDisabled,
    };
  },
};
</script>
