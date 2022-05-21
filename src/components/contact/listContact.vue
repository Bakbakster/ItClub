<template>
  <div
    class="container w-7/8 text-sm bg-blue-300 rounded-md text-center flex flex-col p-2 justify-center items-center absolute -mt-[106px]"
  >
    <div
      class="border-2 border-yellow-500 w-full flex items-center justify-around"
      id="array"
    >
      <img
        @click="emit('back')"
        src="../../assets/icons/arrowBack.svg"
        class="w-7 left-3 cursor-pointer"
        alt="Back"
      />
      <h3>Select contact</h3>
      <img
        @click="emit('isNew')"
        class="w-3"
        src="../../assets/icons/plus.svg"
        alt="Add Contact"
      />
    </div>
    <div class="mt-6 w-full">
      <div
        @click="selectContact(item)"
        class="p-2 bg-white m-2 rounded-xl cursor-pointer"
        v-for="(item, index) in contact"
        :key="index"
      >
        {{ item.firstName }} {{ item.lastName }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { defineEmits } from "vue";

const emit = defineEmits(["selectContact", "back", "isNew"]);
const store = useStore();

const contact = computed(() => store.getters["contact/CLIENT"]);

const storageContact = () => {
  if (localStorage.getItem("newContact")) {
    const newContact = JSON.parse(localStorage.getItem("newContact"));
    // !Примитивная валдицая на дубликат
    newContact.forEach((e) => {
      if (!contact.value.find((item) => item.lastName === e.lastName))
        store.commit("contact/add", {
          firstName: e.firstName,
          lastName: e.lastName,
        });
    });
  }
};
storageContact();

const selectContact = (item) => {
  localStorage.setItem("selectedContact", JSON.stringify(item));
  emit("selectContact", item);
};
</script>

<style scoped></style>
