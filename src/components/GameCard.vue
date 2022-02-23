<template>
  <div
    class="relative border border-white w-32 h-48 rounded-xl bg-gray-700 overflow-hidden py-1 select-none flex flex-col cursor-pointer transition-transform hover:-translate-y-3 hover:z-20"
    :title="desc"
  >
    <div class="border-b border-white px-2 pb-1 w-full">
      <span
        class="font-semibold text-xl"
        :class="{
          'text-red-500': type === 'atk',
          'text-green-500': type === 'heal',
          'text-orange-500': type === 'draw',
          'text-blue-500': type === 'drop',
        }"
      >
        {{ value }}
      </span>
    </div>
    <div class="flex-1 flex justify-center items-center px-2 text-center">
      <span class="font-semibold text-2xl">{{ name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1,
    },
    type: {
      type: String,
      default: "atk",
    },
    name: {
      type: String,
      default: "砍击",
    },
    desc: {
      type: String,
      default: "",
    },
  },
};
</script>
