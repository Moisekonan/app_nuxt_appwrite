<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const submitForm = (e) => {
  e.preventDefault();
  console.log(email.value); // Valeur de l'e-mail
  console.log(password.value); // Valeur du mot de passe
}; 
</script>


<template>
  <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div class="max-w-lg mx-auto text-center">
        <protectAfrica />
        <p class="mt-4 text-gray-500">
          Veuillez vous connecter pour avoir accès a nos services
        </p>
      </div>

      <form action="#" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
        <div>
          <label for="email" class="sr-only">Email</label>
          <Input v-model="email" inputType="email" placeholder="entrez un mail"/>
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>
          <Input v-model="password" inputType="password" placeholder="Entrez votre de password"/>
        </div>

        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            Pas de compte?
            <NuxtLink to="/register"
              ><a class="underline" href="#">Creer un compte</a></NuxtLink
            >
          </p>

          <button
            type="submit"
            @click="submitForm"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Se connecter
          </button>
        </div>
      </form>
    </div>

    <div class="relative w-full h-64 sm:h-96 lg:h-full lg:w-1/2">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1618371690240-e0d46eead4b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VjdXJpdHklMjBndWFyZHxlbnwwfHwwfHx8MA%3D%3D"
        class="absolute inset-0 object-cover w-full h-full"
      />
    </div>
  </section>
</template>

