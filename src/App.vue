<template>
 <h1>{{ title }}</h1>
 <Modal />
</template>

<script setup>
import { createApp } from 'vue';
import Modal from './components/Modal.vue';
createApp({
  components: {
    Modal
  },
  data() {
    return {
      title: 'My first vue App'
    }
  }
})




</script>



<style scoped>
.h1{
  size: 50%;
}
</style>
