<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>

        <tr>
          <td>Number of Characters (of all notes)</td>
          <td>{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
    <input class="input" type="text" placeholder="Do you love agenda?" v-Autofocus v-model="loveAgendaApp" maxlength="50" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";

/**
 * Store
 */

const storeNotes = useStoreNotes();

/**
 * Lore Agenda
 */
const loveAgendaApp = ref("");
useWatchCharacters(loveAgendaApp, 50);
</script>
