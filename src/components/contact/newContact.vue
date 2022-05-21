<template>
  <div
    class="container w-7/8 text-sm bg-blue-300 rounded-md text-center flex flex-col p-2 justify-center items-center -mt-[186px]"
  >
    <div
      class="border-2 border-yellow-500 w-full flex items-center justify-center"
      id="array"
    >
      <img
        @click="back"
        src="../../assets/icons/arrowBack.svg"
        class="w-7 left-3 cursor-pointer absolute"
        alt="Back"
      />
      <h3>New contact</h3>
    </div>
    <div class="mt-6 w-full">
      <form class="pb-2">
        <div class="flex flex-col">
          <label for="name">First name</label>
          <input
            v-model="form.name"
            class="p-2 bg-white m-2 rounded-xl cursor-pointer border-none"
            id="name"
            placeholder="First Name"
            type="text"
          />
        </div>
        <div class="flex flex-col">
          <label for="lastName">Last name</label>
          <input
            v-model="form.lastname"
            class="p-2 bg-white m-2 rounded-xl cursor-pointer border-none"
            id="lastName"
            placeholder="Last Name"
            type="text"
          />
        </div>
        <div class="flex flex-col">
          <label for="email">Email</label>
          <input
            v-model="form.email"
            class="p-2 bg-white m-2 rounded-xl cursor-pointer border-none"
            id="email"
            placeholder="Email"
            type="email"
          />
        </div>
        <input
          @click.prevent="addContact"
          class="p-1 bg-white w-3/5 mt-5 rounded-xl cursor-pointer border-none"
          type="submit"
          value="save"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["back"]);

const back = () => {
  emit("back");
};
const addContact = () => {
  // !По идее тут запрос на бекенд :)
  if (form.value.name && form.value.lastname) {
    if (localStorage.getItem("newContact")) {
      const array = JSON.parse(localStorage.getItem("newContact"));
      array.push({
        firstName: form.value.name,
        lastName: form.value.lastname,
      });
      localStorage.setItem("newContact", JSON.stringify(array));
    } else {
      localStorage.setItem(
        "newContact",
        JSON.stringify([
          {
            firstName: form.value.name,
            lastName: form.value.lastname,
          },
        ])
      );
    }
  }
  emit("back");
};

const form = ref({
  name: ref(""),
  lastname: ref(""),
  email: ref(""),
});
</script>

<style scoped></style>
