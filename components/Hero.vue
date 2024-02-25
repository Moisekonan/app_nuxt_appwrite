import type { NuxtLink } from '#build/components';

<template>
    <section>
        <Header />
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Carousel />
          </div>
    
          <div class="lg:py-24">
            <h2 class="text-4xl font-bold sm:text-4xl">Qui sommes nous?</h2>
    
            <p class="mt-4 text-gray-600">
                Protect Africa est une application qui va permettre a tout individu de pouvoir se louer facilement un garde corps pour sa protection quelque soit l'heure, le jour etc...     
            </p>
    
                <NuxtLink to="/login">
                    <a
                    href="#"
                    class="inline-block px-12 py-3 mt-8 text-sm text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                    Commencer maintenant
                    </a>
                </NuxtLink>
            </div>
        </div>
      </div>
    </section>
  </template>