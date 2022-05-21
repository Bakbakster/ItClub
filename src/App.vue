<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import PayModal from "./components/paymentModal";
import ContactModal from "./components/contactModal";
import Successes from "./components/successfullModal";
import { ref } from "vue";

let isContact = ref(false);
let isPay = ref(false);

let contact = ref({});

const pay = () => {
  isPay.value = true;
};

const clear = () => {
  localStorage.removeItem("selectedContact");
  contact.value = {};
  isPay.value = false;
};
</script>

<template>
  <div class="flex justify-center flex-col items-center h-screen">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated zoomInDown"
      leave-active-class="animated zoomOutUp"
    >
      <div
        class="container flex justify-center flex-row font-serif p-2 h-screen justify-center"
        id="form"
        v-if="!isPay"
      >
        <div
          class="relative w-full h-full flex justify-center flex-row items-center"
        >
          <transition
            name="custom-classes-transition"
            enter-active-class="animated bounceInLeft"
            leave-active-class="animated bounceOutLeft"
          >
            <PayModal
              :contact="contact"
              id="pay"
              v-if="!isContact"
              class="absolute"
              @selectContact="isContact = true"
              @pay="pay"
            />
          </transition>
          <transition
            name="custom-classes-transition"
            enter-active-class="animated bounceInRight"
            leave-active-class="animated bounceOutRight"
          >
            <ContactModal
              id="contact"
              v-if="isContact"
              @back="isContact = false"
              @select-contact="
                (item) => {
                  contact = item;
                  isContact = false;
                }
              "
            />
          </transition>
        </div>
      </div>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated zoomInDown"
      leave-active-class="animated zoomOutUp"
    >
      <Successes class="absolute" @goIndex="clear" v-show="isPay" />
    </transition>
  </div>
</template>
