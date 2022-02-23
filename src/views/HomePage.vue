<template>
  <div class="w-full h-full flex flex-col justify-center items-center gap-5">
    <h1 class="font-semibold text-5xl">战斗卡牌</h1>
    <ui-button @click="onGameStart">开始游戏</ui-button>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import UiButton from "@/components/UiButton.vue";

export default {
  components: {
    UiButton,
  },

  setup() {
    const router = useRouter();

    const onGameStart = () => {
      router.push("/game");
    };

    return {
      onGameStart,
    };
  },
};
</script>
