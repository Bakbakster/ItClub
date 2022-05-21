<template>
  <div
    class="container flex justify-center flex-row font-serif p-2 justify-center"
  >
    <div
      class="container w-7/8 text-sm bg-blue-300 rounded-md text-center flex flex-col p-10 justify-center items-center"
      @click="emit('goIndex')"
    >
      <h2 class="uppercase font-bold">payment completed successfully</h2>
      <button class="p-2 mt-10 bg-white w-2/5 rounded-xl">
        Make another one
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["goIndex"]);
</script>
