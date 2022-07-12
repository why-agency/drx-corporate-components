<template>
  <div
    aria-hidden="true"
    style="padding: 0 1.5rem;"
    class="grid grid-cols-2 lg:grid-cols-8 grid-rows-[auto,1fr,auto] lg:grid-rows-[auto] lg:items-center lg:justify-center gap-4 lg:gap-8 xl:gap-12 2xl:gap-16 3xl:gap-20 py-5 lg:py-4 h-56 lg:h-[88px] bg-sand"
  >
    <div class="h-6 w-3/4 lg:w-full bg-gray-300 animate-pulse" />

    <div class="h-6 w-3/4 lg:w-full justify-self-end bg-gray-300 animate-pulse" />

    <div class="hidden lg:block lg:order-last h-6 bg-gray-300 animate-pulse" />

    <div
      class="col-span-2 lg:col-span-4 lg:order-first mt-4 lg:mt-0"
    >
      <div class="h-6 bg-gray-300 animate-pulse" />
      <div class="lg:hidden w-3/4 h-6 mt-4 bg-gray-300 animate-pulse" />
    </div>

    <div class="w-3/4 lg:w-full h-6 bg-gray-300 animate-pulse" />
    <div class="lg:hidden w-10 h-6 bg-gray-300 animate-pulse justify-self-end" />
  </div>
</template>

<script setup lang="ts"></script>
