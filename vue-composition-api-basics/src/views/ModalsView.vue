<template>
  <div class="modals">
    <h2>Modals</h2>
    <button @click="showModal = true">Show modal</button>
    <Modal v-if="showModal" subtitle="Love bacon?" @hideModal="showModal = false">
      <template v-slot:title>The Bacon Modal</template>
      <p>
        Bacon ipsum dolor amet porchetta flank fatback, pork ball tip chislic pig chicken swine
        alcatra venison meatloaf buffalo beef ribs tenderloin. Kielbasa porchetta burgdoggen corned
        beef. Porchetta pastrami pork loin short ribs kevin strip steak bresaola venison pork belly
        sausage. Shank kevin ball tip, ribeye short loin sirloin buffalo. Cupim swine frankfurter,
        pancetta alcatra jerky shank tenderloin. Pork pig ham, andouille strip steak leberkas ball
        tip picanha chislic swine shankle.
      </p>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const showModal = ref(false)
</script>

<style></style>
