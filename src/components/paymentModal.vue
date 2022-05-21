<template>
  <div
    class="container w-7/8 text-sm bg-blue-300 rounded-md text-center flex flex-col p-2 justify-center"
  >
    <h3 class="p-0.5">Make a payment</h3>
    <form class="flex flex-col items-center" action="#">
      <div @click="emit('selectContact')" class="my-1 flex flex-col w-2/5">
        <label class="cursor-pointer" for="contactLabel">Select contact</label>
        <div
          id="contactLabel"
          class="rounded-md mt-1 h-7 p-1 border-0 focus-visible:outline-0 bg-white cursor-pointer"
        >
          {{ fullName }}
        </div>
      </div>
      <div class="my-1 flex flex-col w-2/5">
        <label class="cursor-pointer" for="pay">Enter amount</label>
        <input
          id="pay"
          class="rounded-md mt-1 h-7 p-1 border-0 focus-visible:outline-0 bg-white cursor-pointer"
          v-model="amount"
          type="text"
        />
      </div>
      <input
        type="submit"
        class="p-1 bg-white w-3/5 mt-5 rounded-xl cursor-pointer border-none"
        value="Pay"
        @click.prevent="readyPay"
      />
    </form>
  </div>
</template>

<script setup>
import { computed, defineEmits, defineProps, ref, watch } from "vue";

const props = defineProps(["contact"]);
const emit = defineEmits(["selectContact", "pay"]);

let amount = ref("");

const fullName = computed(() => {
  if (props.contact.lastName)
    return `${props.contact.firstName} ${props.contact?.lastName}`;
  else if (localStorage.getItem("selectedContact")) {
    const item = JSON.parse(localStorage.getItem("selectedContact"));
    return `${item.firstName} ${item.lastName}`;
  }
  return ``;
});

const readyPay = () => {
  if (
    !!amount.value &&
    (!!props.contact.firstName || localStorage.getItem("selectedContact"))
  ) {
    emit("pay");
  }
};

watch(amount, (newValue) => {
  amount.value = newValue.replace(/[^0-9]/g, "");
});
</script>
