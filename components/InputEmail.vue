<template>
  <div class="relative">
              <input
                type="email"
                class="w-full p-4 text-sm border-gray-200 rounded-lg shadow-sm pe-12"
                placeholder="Entrez email"
                v-model="email"
                required
              />
    
              <span class="absolute inset-y-0 grid px-4 end-0 place-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-gray-400 size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
</template>