<template>
  <video muted playsinline v-bind="$attrs">
    <source :src="src" :type="mimeType" />
  </video>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    mimeType: {
      type: String,
      default: 'video/mp4'
    },
    muted: {
      type: Boolean,
      default: true
    }
  }
}
</script>
