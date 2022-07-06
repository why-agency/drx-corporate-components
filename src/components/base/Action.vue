<template>
  <UseDynamicAction :to="to" :target="target">
    <div
      ref="wrapper"
      class="flex items-center min-h-[48px] relative group overflow-hidden cursor-pointer disabled:opacity-30 disabled:pointer-events-none focus:outline-none focus-visible:ring focus-visible:ring-focus bg-[length:200%_100%] bg-[position:100%]"
      :class="[$_color, $_size]"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <div
        ref="label"
        :class="[$_textColor]"
        class="text-button w-full !px-4 block leading-[21px] justify-between bg-[length:200%_100%] bg-[position:100%] relative bg-clip-text text-transparent overflow-hidden"
      >
        <slot />
        <div
          v-if="$slots.icon"
          ref="icon"
          class="float-right"
          :class="[$_iconColor, variant === 'large' ? 'mt-12 lg:mt-16' : '']"
        >
          <slot name="icon" />
        </div>
      </div>
    </div>
  </UseDynamicAction>
</template>

<script>
import { gsap, Power2 } from 'gsap'
import UseDynamicAction from '../organisms/UseDynamicAction.vue'

const Color = {
  secondary: 'secondary',
  white: 'white',
  tertiary: 'tertiary'
}

const Variant = {
  default: 'default',
  large: 'large'
}

export default {
  components: { UseDynamicAction },
  props: {
    to: {
      type: [String, Object],
      default: ''
    },
    color: {
      type: String,
      default: Color.secondary
    },
    variant: {
      type: String,
      default: Variant.default
    },
    target: {
      type: String,
      default: '_top'
    }
  },
  computed: {
    $_color() {
      return {
        'bg-button-background':
          this.color === 'secondary' &&
          (this.variant === 'default' || this.variant === 'block'),
        'bg-button-background-reverse':
          this.color === 'white' &&
          (this.variant === 'default' || this.variant === 'block'),
        'bg-button-background-large':
          this.color === 'secondary' && this.variant === 'large',
        'bg-button-background-large-reverse':
          this.color === 'white' && this.variant === 'large',
        'bg-button-background-tertiary': this.color === 'tertiary'
      }
    },
    $_textColor() {
      return {
        'bg-button-text':
          this.color === 'secondary' &&
          (this.variant === 'default' || this.variant === 'block'),
        'bg-button-text-large':
          this.color === 'secondary' && this.variant === 'large',
        'bg-button-text-reverse':
          this.color === 'white' &&
          (this.variant === 'default' || this.variant === 'block'),
        'bg-button-text-large-reverse':
          this.color === 'white' && this.variant === 'large',
        'bg-button-text-tertiary': this.color === 'tertiary'
      }
    },
    $_iconColor() {
      return {
        'text-secondary': this.color === 'white' && this.variant === 'default',
        'text-primary': this.color === 'white' && this.variant === 'large',
        'text-white':
          (this.color === 'secondary' && this.variant === 'default') ||
          (this.color === 'secondary' && this.variant === 'large') ||
          this.color === 'tertiary'
      }
    },
    $_size() {
      return {
        'min-h-[48px] w-56': this.variant === 'default',
        'min-h-[48px] w-full': this.variant === 'block',
        'w-[328px] h-[88px] lg:w-[232px] lg:h-[112px]': this.variant === 'large'
      }
    }
  },
  methods: {
    onMouseEnter() {
      // changes the color of the icon
      if (this.$refs.icon) {
        if (this.variant === 'large' && this.color === 'secondary') {
          gsap.to(this.$refs.icon, {
            delay: 0.1,
            duration: 0.5,
            color: '#1E2728'
          })
        } else if (this.variant === 'default' && this.color === 'secondary') {
          gsap.to(this.$refs.icon, {
            delay: 0.1,
            duration: 0.5,
            color: '#0096A9'
          })
        } else if (this.color === 'tertiary') {
          gsap.to(this.$refs.icon, {
            delay: 0.1,
            duration: 0.5,
            color: '#8E8071'
          })
        } else {
          gsap.to(this.$refs.icon, {
            delay: 0.1,
            duration: 0.5,
            color: 'white'
          })
        }
      }
      // changes the color of the text
      gsap.fromTo(
        [this.$refs.label, this.$refs.wrapper],
        {
          backgroundPosition: '100%'
        },
        {
          backgroundPosition: '0',
          duration: 0.4,
          ease: Power2.easeOut
        }
      )
    },
    onMouseLeave() {
      // changes the color of the icon
      if (this.$refs.icon) {
        if (this.variant === 'large' && this.color === 'white') {
          gsap.to(this.$refs.icon, {
            delay: 0.1,
            duration: 0.5,
            color: '#1E2728'
          })
        } else if (this.variant === 'default' && this.color === 'white') {
          gsap.to(this.$refs.icon, {
            delay: 0.1,
            duration: 0.5,
            color: '#0096A9'
          })
        } else {
          gsap.to(this.$refs.icon, {
            delay: 0.1,
            duration: 0.5,
            color: 'white'
          })
        }
      }
      // changes the color of the text
      gsap.fromTo(
        [this.$refs.label, this.$refs.wrapper],
        {
          backgroundPosition: '0'
        },
        {
          backgroundPosition: '-100%',
          duration: 0.4,
          ease: Power2.easeOut
        }
      )
    }
  }
}
</script>
