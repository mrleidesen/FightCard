<template>
  <div class="w-full flex flex-col">
    <span>
      {{ status.name }} （{{ status.hp }}/{{ status.maxHP }}）（{{
        status.mp
      }}/{{ status.maxMP }}）
    </span>
    <div class="border border-white w-full h-2 bg-gray-700">
      <div
        class="h-full"
        :class="statusColor"
        :style="`width: ${healPercent}%;`"
      />
    </div>
    <div
      v-show="status.maxMP > 0"
      class="border border-white w-full h-2 bg-gray-700"
    >
      <div class="h-full bg-blue-500" :style="`width: ${mpPercent}%;`" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    status: {
      type: Object,
      default: () => ({
        name: "",
        maxHP: 100,
        hp: 100,
        maxMP: 0,
        mp: 0,
      }),
    },
  },

  setup(props) {
    const healPercent = computed(
      () => (props.status.hp / props.status.maxHP) * 100
    );
    const statusColor = computed(() => {
      if (healPercent.value <= 50 && healPercent.value > 20) {
        return "bg-orange-500";
      }

      if (healPercent.value <= 20) {
        return "bg-red-500";
      }

      return "bg-green-500";
    });
    const mpPercent = computed(
      () => (props.status.mp / props.status.maxMP) * 100
    );

    return {
      healPercent,
      statusColor,
      mpPercent,
    };
  },
};
</script>
