<script setup>
import { ref } from "vue";
import { createUser } from "./../../composables/dbTest";
const dataUser = ref({
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const userValue = {
  name: "",
  lastname: "",
  email: "",
  password: "",
};
const submitForm = () => {
  console.log(dataUser.value);
};
</script>

<template>
  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section
        class="relative flex items-end h-32 bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
      >
        <img
          alt=""
          src="https://media.istockphoto.com/id/522453006/photo/confident-stylish-entrepreneur.jpg?s=612x612&w=0&k=20&c=BV0ZkPcnWJevqFn78WIE08XVQRvrmy6pKXcbTW5hYi4="
          class="absolute inset-0 object-cover w-full h-full opacity-80"
        />

        <div class="hidden lg:relative lg:block lg:p-12">
          <protectAfrica />
          <p class="mt-4 leading-relaxed text-white/90">
            Veuillez vous inscrire pour avoir un compte sur notre application
          </p>
        </div>
      </section>

      <main
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div class="max-w-xl lg:max-w-3xl">
          <form
            action="#"
            class="grid grid-cols-6 gap-6 mt-8"
            @submit.prevent="submitForm"
          >
            <div class="col-span-6 sm:col-span-3">
              <Input v-model="dataUser.name" inputType="text" placeholder="Entrez votre nom" />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <Input
                v-model="dataUser.lastname"
                placeholder="Entrez votre prenom"
                inputType="text"
              />
            </div>

            <div class="col-span-6">
              <Input
                v-model="dataUser.email"
                placeholder="Entrez un email"
                inputType="email"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <Input
                v-model="dataUser.password"
                placeholder="Entrez votre mot de passe"
                inputType="password"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <Input
                v-model="dataUser.confirmPassword"
                placeholder="confirmer mot de passe"
                inputType="password"
              />
            </div>

            <div class="col-span-6">
              <label for="MarketingAccept" class="flex gap-4">
                <InputCheck />

                <span class="text-sm text-gray-700">
                  Je souhaite recevoir des e-mails concernant les événements,
                  les mises à jour et les annonces de l'entreprise.
                </span>
              </label>
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                class="rounded-md bg-indigo-600 px-5 py-2.5 cursor-pointer text-sm text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Inscription
              </button>
              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Avez-vous un compte?
                <a href="#" class="text-gray-700 underline">Connecter-vous</a>.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>
