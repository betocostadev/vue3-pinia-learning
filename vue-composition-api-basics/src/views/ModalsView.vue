<template>
  <div class="modals">
    <h2>Modals</h2>
    <article>
      <div>
        <button @click="showModal = true">Show modal</button>
        <Modal v-if="showModal" subtitle="Love bacon?" @hideModal="showModal = false">
          <template v-slot:title>The Bacon Modal</template>
          <p>
            Bacon ipsum dolor amet porchetta flank fatback, pork ball tip chislic pig chicken swine
            alcatra venison meatloaf buffalo beef ribs tenderloin. Kielbasa porchetta burgdoggen
            corned beef. Porchetta pastrami pork loin short ribs kevin strip steak bresaola venison
            pork belly sausage. Shank kevin ball tip, ribeye short loin sirloin buffalo. Cupim swine
            frankfurter, pancetta alcatra jerky shank tenderloin. Pork pig ham, andouille strip
            steak leberkas ball tip picanha chislic swine shankle.
          </p>
        </Modal>
      </div>

      <div>
        <button @click="showAltModal = true">Show alt modal</button>
        <AltModal v-model="showAltModal" subtitle="Not using emits">
          <template v-slot:title>Updating with the update:modelValue</template>
          <p>
            This way we don't have to set a function and pass it as a prop to the child component.
            We use the v-model="model" and in the child we use the update:modelValue to emit the
            update.
          </p>
          <p class="attention-text">
            <strong>Oh, and by the way... the count in the store is now: {{ count.count }}</strong>
          </p>
        </AltModal>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import AltModal from '../components/AltModal.vue'
import { useCounterStore } from '../stores/counter'

const showModal = ref(false)
const showAltModal = ref(false)
const count = useCounterStore()
</script>

<style>
.article {
  display: flex;
}
.attention-text {
  margin-top: 0.25rem;
  font-weight: bold;
  color: black;
}
</style>
