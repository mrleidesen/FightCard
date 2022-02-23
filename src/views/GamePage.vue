<template>
  <div class="w-full h-full">
    <game-card :value="3" type="atk" />
  </div>
</template>

<script>
import GameCard from "@/components/GameCard.vue";

export default {
  components: {
    GameCard,
  },
};
</script>
