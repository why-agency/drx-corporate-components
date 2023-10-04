<template>
  <button
    :disabled="disabled"
    class="inline-flex justify-center items-center cursor-pointer uppercase disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus-visible:ring focus-visible:ring-focus transition ease-hover duration-300"
    :class="[$_size, $_color]"
  >
    <slot />
  </button>
</template>

<script>
const Size = {
  sm: 'sm',
  base: 'base',
  lg: 'lg',
  xl: 'xl'
}

const Color = {
  primary: 'primary',
  secondary: 'secondary',
  white: 'white',
  black: 'black',
  sand: 'sand'
}

const Variant = {
  filled: 'filled',
  outline: 'outline',
  transparent: 'transparent'
}

export default {
  props: {
    disabled: {
      type: Boolean
    },
    size: {
      type: String,
      default: Size.base
    },
    variant: {
      type: String,
      default: Variant.filled
    },
    color: {
      type: String,
      default: Color.primary
    }
  },
  computed: {
    $_size() {
      return {
        // basic sizes
        'w-8 h-8': this.size === 'sm',
        'w-10 h-10': this.size === 'base',
        'w-12 h-12': this.size === 'lg',
        'w-14 h-14': this.size === 'xl'
      }
    },
    $_color() {
      return {
        // Filled
        'bg-white text-black hover:bg-gray-200 active:bg-primary-inverse active:ring-1 active:ring-primary active:text-primary active:ring-inset':
          this.color === 'white' && this.variant === 'filled',
        'bg-black text-white  hover:text-black hover:bg-gray-500 active:bg-secondary-inverse active:ring-1 active:ring-secondary active:text-secondary active:ring-inset':
          this.color === 'black' && this.variant === 'filled',
        'bg-primary text-primary-inverse hover:bg-primary-hover active:bg-primary-inverse active:ring-1 active:ring-primary active:text-primary active:ring-inset':
          this.color === 'primary' && this.variant === 'filled',
        'bg-secondary text-secondary-inverse hover:bg-secondary-hover hover:text-black active:bg-secondary-inverse active:ring-1 active:ring-secondary active:text-secondary active:ring-inset':
          this.color === 'secondary' && this.variant === 'filled',
        'bg-sand text-sand-inverse':
          this.color === 'sand' && this.variant === 'filled',
        'bg-gray-700 text-white border border-white hover:bg-secondary active:bg-secondary ':
          this.color === 'gray' && this.variant === 'filled',

        // Outline
        'border-primary text-primary hover:bg-primary hover:bg-opacity-20 active:bg-primary active:text-primary-inverse':
          this.color === 'primary' && this.variant === 'outline',
        'border-secondary text-secondary hover:bg-secondary hover:bg-opacity-20 active:bg-secondary active:text-secondary-inverse':
          this.color === 'secondary' && this.variant === 'outline',
        'border-black text-black hover:bg-black hover:bg-opacity-20 active:bg-black active:text-white':
          this.color === 'black' && this.variant === 'outline',
        'border-white text-white hover:bg-white hover:bg-opacity-20 active:bg-white active:text-black':
          this.color === 'white' && this.variant === 'outline',
        'border-gray-700 text-gray-700 hover:bg-gray-100 hover:bg-opacity-20':
          this.color === 'gray' && this.variant === 'outline',
        'border-tertiary text-tertiary hover:bg-tertiary hover:text-white hover:bg-opacity-20 active:bg-white active:text-white':
          this.color === 'tertiary' && this.variant === 'outline',

        // Border
        border: this.variant === 'outline',

        // Transparent
        'bg-transparent text-white hover:opacity-70':
          this.color === 'white' && this.variant === 'transparent',
        'bg-transparent text-black hover:opacity-70':
          this.color === 'black' && this.variant === 'transparent',
        'bg-transparent text-primary hover:text-primary-hover active:text-primary-pressed':
          this.color === 'primary' && this.variant === 'transparent',
        'bg-transparent text-secondary hover:text-secondary-hover active:text-secondary-pressed':
          this.color === 'secondary' && this.variant === 'transparent'
      }
    }
  }
}
</script>
