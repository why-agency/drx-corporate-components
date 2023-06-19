<template>
  <component
    :is="type"
    :href="to ? to : false"
    :rel="isAnchor ? 'noopener noreferrer' : false"
    :target="isAnchor ? linkTarget : false"
    class="hover:!no-underline"
    @click="handleClick"
  >
    <slot :isAnchor="isAnchor" />
  </component>
</template>

<script>
import { useActionType } from '../../composables/useActionType.js'

export default {
  props: {
    to: {
      type: [String, Object],
      default: ''
    },
    tag: {
      type: String,
      default: 'button'
    },
    target: {
      type: String,
      default: 'target="_self"'
    }
  },
  setup(props, { emit }) {
    const { isAnchor, type, linkTarget } = useActionType(
      props.to,
      props.tag,
      props.target
    )

    const handleClick = () => {
      if (!props.to) {
        emit('click')
      }
    }
    return { isAnchor, type, linkTarget, handleClick }
  }
}
</script>
