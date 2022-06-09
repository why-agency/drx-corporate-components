<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <title id="IconArrowLeft" lang="en">IconArrowLeft</title>
    <g fill="currentColor">
      <path
        d="M6.5 0.5L0 7L6.5 13.5L7.207 12.793L1.914 7.5H24V6.5H1.914L7.207 1.207L6.5 0.5Z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowLeft',
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
