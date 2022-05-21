<template>
  <div class="w-full">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutLeft"
    >
      <ListContact
        @back="emit('back')"
        @isNew="isNewContact = true"
        @selectContact="
          (item) => {
            emit('selectContact', item);
          }
        "
        v-if="!isNewContact"
        id="listContact"
      />
    </transition>
    <transition
      enter-active-class="animated bounceInRight"
      leave-active-class="animated bounceOutRight"
      ><new-contact
        id="newContact"
        class="absolute"
        @back="isNewContact = false"
        v-if="isNewContact"
    /></transition>
  </div>
</template>

<script setup>
import ListContact from "./contact/listContact";
import NewContact from "./contact/newContact";
import { defineEmits } from "vue";
import { ref } from "vue";

const emit = defineEmits(["selectContact", "back"]);

const isNewContact = ref(false);
</script>

