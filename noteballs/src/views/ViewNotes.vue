<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <label class="label" :style="{ color: 'white' }">Add a New Note</label>
        <div class="control">
          <textarea class="textarea" placeholder="Start adding your note here..." />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-danger">Cancel</button>
        </div>
        <div class="control">
          <button class="button is-link has-background-success">Add note</button>
        </div>
      </div>
    </div>

    <div v-for="i in 3" class="card mb-4">
      <div class="card-content">
        <div class="content">
          <p>Lorem ipsum</p>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
