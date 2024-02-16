<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note" v-model="newNote" ref="newNoteRef" />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button @click="addNote" :disabled="!newNote" class="button is-link has-background-success">Add New Note</button>
        </div>
      </div>
    </div>

    <Note v-for="note in notes" :key="note.id" :note="note" @delteClicked="deleteNote" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue";

const newNote = ref("");
const newNoteRef = ref(null);
const notes = ref([
  { id: "id1", content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor praesentium cumque ipsa nihil, deserunt illum similique! A fuga officiis esse rerum accusamus architecto nulla libero, in sunt deleniti doloremque ex?" },
  { id: "id2", content: "Kısa Not 2" },
  { id: "id3", content: "Kısa Not 3" },
]);

const addNote = () => {
  let currentDate = new Date().getTime();
  let id = currentDate.toString();
  let note = {
    id,
    content: newNote.value,
  };
  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};

/**
 * Delete Note
 */
const deleteNote = (id) => {
  notes.value = notes.value.filter((note) => {
    return note.id !== id;
  });
};
</script>
