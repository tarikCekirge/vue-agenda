<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="textarea" placeholder="Add a new note" ref="textAreaRef" />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
/**
 * Props
 */
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

/**
 * Emits
 */

const emit = defineEmits(["update:modelValue"]);

/**
 * Focus Text Area
 */

const textAreaRef = ref(null);

const focusTextArea = () => {
  textAreaRef.value.focus();
};

defineExpose({
  focusTextArea,
});
</script>
