<template>
  <transition
    v-if="overlay"
    appear
    enter-class="opacity-0"
    enter-active-class="transition ease-in duration-700"
    enter-to-class="opacity-100"
    leave-to-class="opacity-0"
    leave-active-class="transition ease-in duration-700"
  >
    <section
      class="fixed top-0 left-0 z-50 items-center w-screen h-screen bg-black bg-opacity-30 lg:flex lg:overflow-y-hidden lg:justify-end"
      @click="hideOverlay"
    >
      <div
        class="bg-white h-full overflow-y-scroll lg:w-[944px] grid content-start items-start px-6 py-7 xl:px-24 xl:grid-cols-[1fr,424px]"
        @click.stop
      >
        <BaseButtonIcon
          variant="transparent"
          size="sm"
          class="justify-self-end translate-x-2.5 mb-5 xl:mb-6 xl:translate-x-16 xl:col-start-2"
          @click="hideOverlay"
        >
          <IconClose />
        </BaseButtonIcon>
        <BaseMedia
          v-if="media"
          :media="stream || media"
          :video-settings="{ autoplay: false }"
          class="xl:col-span-2"
        />
        <BaseHeadline
          v-if="headline && headline.text"
          v-bind="headline"
          class="mt-6"
        />
        <UseDynamicAction
          class="flex justify-between items-center w-64 h-6 my-16 xl:justify-self-end"
        >
          Scroll for more info
          <IconArrowDownFat />
        </UseDynamicAction>
        <div class="xl:col-start-2">
          <BaseHeadline
            v-if="subheadline && subheadline.text"
            v-bind="subheadline"
            class="mt-6"
          />
          <BaseText
            v-if="textBefore && textBefore.text"
            v-bind="textBefore"
            class="mt-8"
          />
          <BaseMedia
            v-if="additionalMedia"
            :media="additionalMedia"
            class="mt-8"
          />
          <BaseText
            v-if="textAfter && textAfter.text"
            v-bind="textAfter"
            class="mt-8"
          />
        </div>
        <MActionBar
          v-if="actions"
          :actions="actions"
          position="left"
          stack
          class="mt-10 xl:row-start-4 self-end"
        />
      </div>
    </section>
  </transition>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useUiStore } from '../../../stores/ui.js'
import { useScrollLock } from '../../../composables/useScrollLock.ts'

import BaseMedia from '../../base/Media.vue'
import BaseHeadline from '../../base/Headline.vue'
import BaseText from '../../base/Text.vue'
import BaseButtonIcon from '../../base/ButtonIcon.vue'
import IconClose from '../../icons/Close.vue'
import IconArrowDownFat from '../../icons/Arrow/DownFat.vue'
import MActionBar from '../../molecules/ActionBar.vue'
import UseDynamicAction from '../UseDynamicAction.vue'

const ui = useUiStore()
const overlay = computed(() => ui.overlay)

const content = computed(() => overlay?.value?.[0]?.content)

const media = computed(
  () =>
    content.value?.media &&
    Object.values(content.value?.media)?.find(
      media => Array.isArray(media) && media.length
    )
)

const stream = computed(
  () =>
    media.value?.[0]?.type === 'videos_stream' && {
      type: 'video-stream',
      video_stream: media.value
    }
)

const headline = computed(() => ({
  ...content.value?.header,
  fontWeight: 'font-regular'
}))

const subheadline = computed(() => ({
  ...content.value?.subheadline,
  fontWeight: 'font-regular',
  size: 5
}))

const textBefore = computed(() => ({
  text: content.value?.additionaltext?.before,
  size: 2
}))

const textAfter = computed(() => ({
  text: content.value?.additionaltext?.after,
  size: 2
}))

const additionalMedia = computed(() => content.value?.additionaltext?.image)

const actions = computed(() =>
  content.value?.actions?.map(action => ({
    ...action,
    content: { ...action.content, color: 'secondary' }
  }))
)

const hideOverlay = () => ui.setOverlay()

const isLocked = useScrollLock()

watch(overlay, overlay => {
  isLocked.value = !!overlay
})
</script>
