<template>
  <div class="notes">
    <AddEditNote v-model="newNote" ref="addEditNoteRef">
      <template v-slot:buttons>
        <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New Note</button>
      </template>
    </AddEditNote>
    <progress v-if="storeNotes.notesLoaded" class="progress is-small is-success" max="100" />
    <template v-else>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </template>
    <div v-if="!storeNotes.notes.length && !storeNotes.notesLoaded">
      <div class="notification is-warning is-size-5 has-text-centered has-text-grey-light">No notes...</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { useWatchCharacters } from "@/use/useWatchCharacters";

/**
 * Store
 */

const storeNotes = useStoreNotes();

const newNote = ref("");
const newNoteRef = ref(null);
const addEditNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote);
  newNote.value = "";
  addEditNoteRef.value.focusTextArea();
};

/**
 * Delete Note
 */
const deleteNote = (id) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== id;
  });
};

/**
 * Watch Characters
 */
useWatchCharacters(newNote);
</script>
