<template>
    <div class="flex flex-row min-h-screen bg-gray-100">
        <div class="flex flex-col w-56 overflow-hidden bg-white rounded-r-3xl">
            <div class="flex items-center justify-center h-20 shadow-md">
            <h1 class="text-3xl text-indigo-500 uppercase">Logo</h1>
            </div>
            <ul class="flex flex-col py-4">
            <li v-for="(item, index) in menuItems" :key="index">
                <a :href="item.url" class="flex flex-row items-center h-12 text-gray-500 transition-transform duration-200 ease-in transform hover:translate-x-2 hover:text-gray-800">
                <span class="inline-flex items-center justify-center w-12 h-12 text-lg text-gray-400"><i :class="item.icon"></i></span>
                <span class="text-sm font-medium">{{ item.label }}</span>
                <span v-if="item.notification" class="px-3 py-px ml-auto mr-6 text-sm text-red-500 bg-red-100 rounded-full">{{ item.notification }}</span>
                </a>
            </li>
            </ul>
        </div>
        <div>
            dashboard
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { label: 'Dashboard', icon: 'bx bx-home', url: '#' },
          { label: 'Music', icon: 'bx bx-music', url: '#' },
          { label: 'Drink', icon: 'bx bx-drink', url: '#' },
          { label: 'Shopping', icon: 'bx bx-shopping-bag', url: '#' },
          { label: 'Chat', icon: 'bx bx-chat', url: '#' },
          { label: 'Profile', icon: 'bx bx-user', url: '#' },
          { label: 'Notifications', icon: 'bx bx-bell', url: '#', notification: 5 },
          { label: 'Logout', icon: 'bx bx-log-out', url: '#' }
        ]
      };
    }
  };
  </script>
  
  <style>
  /* Ajoutez ici les styles Tailwind CSS spécifiques si nécessaire */
  </style>
  