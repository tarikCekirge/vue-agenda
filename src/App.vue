<template>
  <NavBar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>

<style>
@import url("bulma/css/bulma.min.css");
</style>

<script setup>
import NavBar from "@/components/Layout/NavBar.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { onMounted } from "vue";

/**
 * Store
 */

const storeNotes = useStoreNotes();

/**
 * Mounted
 */
onMounted(() => {
  storeNotes.getNotes();
});
</script>
