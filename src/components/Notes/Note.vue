<template>
  <div class="card mb-4">
    <div class="card-content">
      {{ note.content }}
      <div class="has-text-right has-text-grey-light">
        <small>{{ characterLength }}</small>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a @click.prevent="handleDelete" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
import { computed } from "vue";
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
 * Emits
 */

const emit = defineEmits(["delteClicked"]);

/**
 * Character Length
 */

const characterLength = computed(() => {
  let length = props.note.content.length;
  let description = length > 1 ? "characters" : "character";
  return `${props.note.content.length} ${description}`;
});

/**
 * Handle Delete
 */
const handleDelete = () => {
  emit("delteClicked", props.note.id);
};
</script>
