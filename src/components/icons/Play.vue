<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="Play" lang="en">IconPlay</title>
    <g fill="currentColor">
      <path d="M8 19L19 12L8 5V19Z" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Play',
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
