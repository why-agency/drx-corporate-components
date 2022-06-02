<template>
  <div class="text-primary flex flex-col space-y-10 ml-10 mt-20">
    <router-link to="/multimedia-text">Multi Media Text</router-link>
    <router-link to="/fullscreen-media-text">Fullscreen Media Text</router-link>
    <base-headline v-bind="header"></base-headline>
  </div>
</template>

<script>
import baseHeadline from '../components/base/Headline.vue'

export default {
  components: { baseHeadline },
  data() {
    return {
      header: {
        text: 'Multimedia Text Header',
        size: 2,
        color: 'turqoise',
        tag: 'h1',
        fontWeight: 'font-bold'
      }
    }
  }
}
</script>
