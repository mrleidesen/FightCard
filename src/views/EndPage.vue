<template>
  <div class="h-full p-5 flex items-center justify-center">
    <h1 class="font-semibold text-3xl text-center">{{ resultText }}</h1>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { enemyname } from "@/store/enemy";

export default {
  setup() {
    const route = useRoute();
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

    return {
      resultText,
    };
  },
};
</script>
