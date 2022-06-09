<template>
  <div class="text-primary group" :class="{ 'opacity-40': disabled }">
    <label
      :for="uid"
      :class="{ 'sr-only': hideLabel }"
      class="block pl-4 text-sm font-medium"
    >
      {{ label }}
    </label>
    <div class="relative mt-2">
      <div
        v-if="hasIconPrefix"
        class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
      >
        <slot name="iconPrefix" />
      </div>
      <input
        :id="uid"
        v-model="modelValue"
        :class="[hasIconPrefix ? 'pl-10' : 'pl-4']"
        class="block peer w-full h-10 pr-10 border-0 border-b border-primary group-hover:border-secondary rounded-none appearance-none focus:!outline-none focus:border-0 focus:border-b focus:border-secondary"
        :disabled="disabled"
        :type="type"
        v-bind="$attrs"
        @blur="onBlur"
        @keyup="onKeyup"
      />
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer text-primary group-hover:text-secondary peer-focus:text-secondary"
        role="button"
      >
        <IconArrowRightFat />
      </div>
    </div>
  </div>
</template>

<script>
import { useId } from '../../composables/useId'

import IconArrowRightFat from '../icons/Arrow/RightFat.vue'

export default {
  components: { IconArrowRightFat },
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    hideLabel: {
      type: Boolean
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean
    },
    conditions: {
      type: Array,
      default: () => []
    }
  },
  emits: ['blur', 'keyup', 'update:modelValue'],
  data() {
    return {
      val: this.value
    }
  },
  computed: {
    uid() {
      return this.id && this.id.length ? this.id : `drx-textfield-${useId()}`
    },
    hasIconPrefix() {
      return !!this.$slots.iconPrefix
    },
    modelValue: {
      get() {
        return this.val
      },
      set(val) {
        this.val = val
        this.$emit('update:modelValue', val)
      }
    }
  },
  methods: {
    clearInput() {
      this.modelValue = ''
    },
    onBlur() {
      this.$emit('blur')
    },
    onKeyup(event) {
      this.$emit('keyup', event)
    }
  }
}
</script>
