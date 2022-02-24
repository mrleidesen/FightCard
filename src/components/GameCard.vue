<template>
  <div
    class="relative border border-white w-32 h-48 rounded-xl bg-gray-700 overflow-hidden py-1 select-none flex flex-col cursor-pointer transition-transform hover:-translate-y-3 hover:z-20"
  >
    <div class="border-b border-white px-2 pb-1 w-full flex justify-between">
      <span
        class="font-semibold text-xl"
        :class="{
          'text-red-500': skill.type === 'atk',
          'text-green-500': skill.type === 'heal',
          'text-orange-500': skill.type === 'skill',
          'text-blue-500': skill.type === 'healMp',
        }"
      >
        {{ skill.value.min }}-{{ skill.value.max }}
      </span>

      <span class="text-xl text-white">
        {{ skill.cost }}
      </span>
    </div>
    <div class="flex-1 flex justify-center items-center px-2 text-center">
      <span class="font-semibold text-2xl">{{ skill.name }}</span>
    </div>

    <div
      v-show="disabled"
      class="absolute inset-0 top-0 left-0 bg-black opacity-50"
    ></div>
    <div
      v-show="skill.type === 'atk' && atkDisabled"
      class="absolute inset-0 top-0 left-0 bg-black opacity-50"
    ></div>
    <div
      v-show="skill.type !== 'atk' && skillDisabled"
      class="absolute inset-0 top-0 left-0 bg-black opacity-50"
    ></div>
  </div>
</template>

<script>
import { generateSkill } from "@/store";
export default {
  props: {
    skill: {
      type: Object,
      default: () => generateSkill("普通攻击", "atk", [1, 2], 0),
    },
    atkDisabled: {
      type: Boolean,
      default: false,
    },
    skillDisabled: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
