<template>
  <div
    ref="el"
    class="w-full h-full border border-white overflow-y-auto overflow-x-hidden p-1"
  >
    <div v-for="log in logs" :key="log.date">
      <span class="text-gray-200 text-sm">{{ log.date }}</span>
      <p>{{ log.text }}</p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { logs } from "@/store/log";

export default {
  setup() {
    const el = ref(null);

    watch(
      () => [...logs],
      () => {
        setTimeout(() => {
          el?.value?.scrollTo(0, el?.value?.scrollHeight);
        }, 0);
      }
    );

    return {
      logs,
      el,
    };
  },
};
</script>
