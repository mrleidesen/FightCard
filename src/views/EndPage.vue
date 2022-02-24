<template>
  <div class="h-full p-5 flex flex-col items-center justify-center gap-6">
    <h1 class="font-semibold text-3xl text-center">{{ resultText }}</h1>
    <ui-button @click="handleRestart">重新玩儿</ui-button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import UiButton from "@/components/UiButton.vue";

import { player } from "@/store/player";
import { monster } from "@/store/monster";
import { clearLogs } from "@/store/log";

export default {
  components: {
    UiButton,
  },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const result = route.query.result;

    const resultText = computed(() => {
      if (result === "lose") {
        return `你被${monster.name}打败了`;
      }
      if (result === "win") {
        return `你击败了${monster.name}`;
      }

      return "结果未出";
    });

    const handleRestart = () => {
      player.hp = player.maxHP;
      player.mp = player.maxMP;
      monster.hp = monster.maxHP;
      monster.mp = monster.maxMP;

      clearLogs();

      router.push("/game");
    };

    return {
      resultText,
      handleRestart,
    };
  },
};
</script>
