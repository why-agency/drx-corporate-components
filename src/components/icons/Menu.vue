<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 19.3525H11.7644V16.9604H1V19.3525Z" fill="currentColor" />
    <path d="M22.5288 13.3721H1V10.98H22.5288V13.3721Z" fill="currentColor" />
    <path d="M11.7646 7.39209H22.529V5H11.7646V7.39209Z" fill="currentColor" />
  </svg>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
}
</script>
