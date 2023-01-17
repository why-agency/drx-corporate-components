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
        d="M12.3 23.4L24 11.7L12.3 -6.99759e-06L11.0274 1.27259L20.5548 10.8L-3.14712e-06 10.8V12.6L20.5548 12.6L11.0274 22.1274L12.3 23.4Z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconArrowRightSmall',
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
