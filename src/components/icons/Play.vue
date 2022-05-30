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
      <path d="M18.6666 33.3334L33.3333 24.0001L18.6666 14.6667V33.3334Z" />
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
