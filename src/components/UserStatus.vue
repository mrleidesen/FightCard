<template>
  <div class="w-full flex flex-col">
    <span>{{ name }} （{{ value }}/{{ maxHealth }}）</span>
    <div class="border border-white w-full h-2 bg-gray-700">
      <div
        class="h-full"
        :class="statusColor"
        :style="`width: ${healPercent}%;`"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { maxHealth } from "@/utils";

export default {
  props: {
    value: {
      type: Number,
      default: 100,
    },
    name: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    const healPercent = computed(() => (props.value / maxHealth) * 100);
    const statusColor = computed(() => {
      if (healPercent.value <= 50 && healPercent.value > 20) {
        return "bg-orange-500";
      }

      if (healPercent.value <= 20) {
        return "bg-red-500";
      }

      return "bg-green-500";
    });

    return {
      maxHealth,
      healPercent,
      statusColor,
    };
  },
};
</script>
