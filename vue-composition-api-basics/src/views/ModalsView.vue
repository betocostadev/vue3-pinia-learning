<template>
  <div class="modals">
    <h2>Modals</h2>
    <button @click="showModal = true">Show modal</button>

    <Teleport to=".modals-container">
      <div class="modal" v-if="showModal">
        <h2>This is a modal</h2>
        <p>
          Bacon ipsum dolor amet porchetta flank fatback, pork ball tip chislic pig chicken swine
          alcatra venison meatloaf buffalo beef ribs tenderloin. Kielbasa porchetta burgdoggen
          corned beef. Porchetta pastrami pork loin short ribs kevin strip steak bresaola venison
          pork belly sausage. Shank kevin ball tip, ribeye short loin sirloin buffalo. Cupim swine
          frankfurter, pancetta alcatra jerky shank tenderloin. Pork pig ham, andouille strip steak
          leberkas ball tip picanha chislic swine shankle.
        </p>
        <button @click="showModal = false">Hide Modal</button>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<style>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80vw;
  height: 60vh;
  z-index: 1;
}
</style>
