<script setup>
import { useRouter } from 'vue-router'
import { defineProps } from "vue";

const props = defineProps({
  valueLabel: String,
});

const router = useRouter()

const redirectToLogin = () => {
  if (props.valueLabel === "Se connecter") {
      router.push('/login');
  } else {
      router.push('/register');
  }
};
</script>
<template>
  <a
    class="rounded-md bg-indigo-600 px-5 py-2.5 cursor-pointer text-sm text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
    @click="redirectToLogin()"
  >
    {{ props.valueLabel }}
  </a>
</template>


