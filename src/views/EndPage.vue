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

import { enemyHealth, enemyname } from "@/store/enemy";
import { resetCards } from "@/store/cards";
import { userHealth } from "@/store/user";
import { logs } from "@/store/log";
import { maxHealth } from "@/utils";

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
        return `你被${enemyname}打败了`;
      }
      if (result === "win") {
        return `你击败了${enemyname}`;
      }

      return "结果未出";
    });

    const handleRestart = () => {
      resetCards();

      userHealth.value = maxHealth;
      enemyHealth.value = maxHealth;
      logs.splice(0, logs.length);

      router.push("/game");
    };

    return {
      resultText,
      handleRestart,
    };
  },
};
</script>
