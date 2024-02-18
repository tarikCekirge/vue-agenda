<template>
  <div class="card mb-4">
    <div class="card-content">
      {{ note.content }}
      <div class="has-text-right has-text-grey-light">
        <small>{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="`/edit/${note.id}`" class="card-footer-item">Edit</router-link>
      <a @click.prevent="storeNotes.deleteNote(note.id)" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

/**
 * Store
 */

const storeNotes = useStoreNotes();

/**
 * Props
 */

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

/**
 * Character Length
 */

const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${props.note.content.length} ${description}`;
});
</script>
