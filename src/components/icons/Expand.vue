<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="currentColor">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 20L12 20L12 17.913L17.913 17.913L17.913 12L20 12L20 20Z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.08696 6.08696L6.08696 12L4 12L4 4L12 4L12 6.08696L6.08696 6.08696Z"
      />
    </g>
  </svg>
</template>

<script>
export default {
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
