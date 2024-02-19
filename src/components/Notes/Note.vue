<template>
  <div class="card mb-4">
    <div class="card-content">
      {{ note.content }}
      <div class="columns is-mobile has-text-grey-light">
        <small class="column">{{ dateFormatted }}</small>
        <small class="column has-text-right">{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="`/edit/${note.id}`" class="card-footer-item">Edit</router-link>
      <a @click.prevent="modals.deleteNote = true" class="card-footer-item">Delete</a>
    </footer>
    <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id" />
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useDateFormat } from "@vueuse/core";
import ModalDeleteNote from "@/components/Notes/ModalDeleteNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

/**
 * Store
 */

const storeNotes = useStoreNotes();

/**
 * Date Format
 */

const dateFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date));
  let formattedDate = useDateFormat(date, "DD/MM/YYYY");
  return formattedDate.value;
});

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

/**
 * Modals
 */
const modals = reactive({
  deleteNote: false,
});
</script>
