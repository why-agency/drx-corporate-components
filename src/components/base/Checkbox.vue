<template>
  <div>
    <div
      class="relative flex items-center group focus-within"
      :class="{ 'opacity-40 pointer-events-none': disabled }"
    >
      <input
        :id="uid"
        class="absolute z-10 w-5 h-5 outline-none opacity-0 cursor-pointer"
        type="checkbox"
        :disabled="disabled"
        :checked="isChecked"
        :aria-checked="isChecked"
        v-bind="$attrs"
        :value="value"
        @change="onChange"
        @blur="onBlur"
        @keyUp="onKeyup"
        @focus="onFocus"
      />
      <span
        class="relative flex items-center justify-center w-5 h-5 border border-gray-700 group-hover:bg-secondary-hover/50"
        :class="{
          'outline-none ring ring-focus': isFocused,
          'bg-gray-300': isChecked
        }"
      >
        <span
          v-if="isChecked"
          aria-hidden="true"
          class="w-3 h-3 bg-secondary"
        />
      </span>
      <label
        class="flex-1 ml-4 text-gray-700 cursor-pointer select-none group-hover:text-gray-600 text-notification"
        :for="uid"
      >
        <slot />
      </label>
    </div>
  </div>
</template>

<script>
import { Keys } from '../../utils/keyboard'
import { useId } from '../../composables/useId'

export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    modelValue: {
      type: [Boolean, Array],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      isFocused: false
    }
  },
  computed: {
    uid() {
      return this.id && this.id.length ? this.id : `drx-checkbox-${useId()}`
    },
    isChecked() {
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.includes(this.value)
      }
      return this.modelValue
    }
  },
  methods: {
    toggleValue(event) {
      const isChecked = event.target.checked

      if (Array.isArray(this.modelValue)) {
        const newValue = isChecked
          ? [...this.modelValue, this.value]
          : this.modelValue.filter(val => val !== this.value)

        return this.$emit('update:modelValue', newValue)
      }
      this.$emit('update:modelValue', isChecked)
    },
    onChange(event) {
      this.toggleValue(event)
    },
    onBlur() {
      this.isFocused = false
      this.$emit('blur')
    },
    onFocus() {
      this.isFocused = true
    },
    onKeyup(event) {
      if (event.key === Keys.Space) {
        this.toggleValue(event)
      }
    }
  }
}
</script>
