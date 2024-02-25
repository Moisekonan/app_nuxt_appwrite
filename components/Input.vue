<!-- InputConponent.vue -->
<template>
    <input :type="props.inputType" :value="props.modelValue" @input="updateValue($event.target.value)" :placeholder="props.placeholder" class="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12">
</template>

<script setup>
// import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    inputType: {
        type: String,
        default: 'text'
    },
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (value) => {
    emit('update:modelValue', value);
};
</script>
