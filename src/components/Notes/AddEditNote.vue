<template>
  <div class="card p-4 mb-5" :class="`has-background-${props.bgColor}-dark`">
    <label v-if="props.label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="textarea" :placeholder="placeHolder" ref="textAreaRef" v-Autofocus maxlength="100" />
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
import { vAutofocus } from "@/directives/vAutofocus";
/**
 * Props
 */
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeHolder: {
    type: String,
    default: "Something...",
  },
  label: {
    type: String,
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
