<template>
  <div class="text-primary flex flex-col space-y-10 ml-10 mt-20">
    <router-link to="/multimedia-text">Multi Media Text</router-link>
    <router-link to="/fullscreen-media-text">Fullscreen Media Text</router-link>
    <base-headline v-bind="h1bold"></base-headline>
    <base-headline v-bind="h1reg"></base-headline>
    <base-headline v-bind="h2bold"></base-headline>
    <base-headline v-bind="h2reg"></base-headline>
    <base-headline v-bind="h3bold"></base-headline>
    <base-headline v-bind="h3reg"></base-headline>
    <base-headline v-bind="h4bold"></base-headline>
    <base-headline v-bind="h4reg"></base-headline>
    <base-headline v-bind="h5bold"></base-headline>
    <base-headline v-bind="h5reg"></base-headline>
  </div>
</template>

<script>
import baseHeadline from '../components/base/Headline.vue'

export default {
  components: { baseHeadline },
  data() {
    return {
      h1bold: {
        text: 'Multimedia Text<br> Header',
        size: 1,
        color: 'turqoise',
        tag: 'h1',
        fontWeight: 'font-bold'
      },
      h1reg: {
        text: 'Multimedia Text<br> Header',
        size: 1,
        color: 'turqoise',
        tag: 'h1',
        fontWeight: 'font-regular'
      },
      h2bold: {
        text: 'Multimedia Text<br> Header',
        size: 2,
        color: 'turqoise',
        tag: 'h2',
        fontWeight: 'font-bold'
      },
      h2reg: {
        text: 'Multimedia Text<br> Header',
        size: 2,
        color: 'turqoise',
        tag: 'h2',
        fontWeight: 'font-regular'
      },
      h3bold: {
        text: 'Multimedia Text<br> Header',
        size: 3,
        color: 'turqoise',
        tag: 'h3',
        fontWeight: 'font-bold'
      },
      h3reg: {
        text: 'Multimedia Text<br> Header',
        size: 3,
        color: 'turqoise',
        tag: 'h3',
        fontWeight: 'font-regular'
      },
      h4bold: {
        text: 'Multimedia Text<br> Header',
        size: 4,
        color: 'turqoise',
        tag: 'h4',
        fontWeight: 'font-bold'
      },
      h4reg: {
        text: 'Multimedia Text<br> Header',
        size: 4,
        color: 'turqoise',
        tag: 'h4',
        fontWeight: 'font-regular'
      },
      h5bold: {
        text: 'Multimedia Text<br> Header',
        size: 5,
        color: 'turqoise',
        tag: 'h5',
        fontWeight: 'font-bold'
      },
      h5reg: {
        text: 'Multimedia Text<br> Header',
        size: 5,
        color: 'turqoise',
        tag: 'h5',
        fontWeight: 'font-regular'
      }
    }
  }
}
</script>
