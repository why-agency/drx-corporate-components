<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    aria-labelledby="name"
  >
    <g fill="currentColor">
      <path
        d="M11.7 0L0 11.7L11.7 23.4L12.9726 22.1274L3.4452 12.6L24 12.6L24 10.8L3.4452 10.8L12.9726 1.2726L11.7 0Z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowLeftSmall',
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
