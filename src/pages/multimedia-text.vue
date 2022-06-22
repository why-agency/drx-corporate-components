<template>
  <section>
    <div
      class="frame-space-before-large frame-space-after-large"
      :class="textBelowBgColor"
    >
      <div :class="`frame-${textBelow.appearance.frameClass}`">
        <o-03-12-multi-media-text :data="textBelow" />
      </div>
    </div>
    <div
      class="frame-space-before-large frame-space-after-large"
      :class="textAboveBgColor"
    >
      <div :class="`frame-${textAbove.appearance.frameClass}`">
        <o-03-12-multi-media-text :data="textAbove" />
      </div>
    </div>
  </section>
</template>

<script>
import O0312MultiMediaText from '../components/organisms/o-03-12-multi-media-text.ce.vue'
import { useBackgroundColor } from '../composables/useBackgroundColor'
export default {
  components: { O0312MultiMediaText },
  setup() {
    const textBelowBgColor = useBackgroundColor('gradient')
    const textAboveBgColor = useBackgroundColor('light')
    return { textAboveBgColor, textBelowBgColor }
  },
  data() {
    return {
      textBelow: {
        id: 74201,
        pid: 8676,
        type: 'o_03_12__multi_media_text',
        tagname: 'o-03-12-multi-media-text',
        appearance: {
          size: 'default',
          frameClass: 'default',
          spaceBefore: '',
          spaceAfter: ''
        },
        content: {
          variant: 'textbelow',
          background: 'gradient',
          gradient: 'dark',
          header: {
            text: 'Multimedia Text Header',
            size: 2,
            color: 'turqoise',
            tag: 'h1',
            fontWeight: 'font-bold'
          },
          subline:
            'My job is super flexible and allows me to branch into many different innovation fields.',
          // text: {
          //   text: 'Erfolg ist eine Frage des Charakters. Wir haben 850 Chancen f\u00fcr dich.',
          //   size: 1
          // },
          media: {
            type: 'video-stream',
            video_stream: [
              {
                id: 63205,
                pid: 0,
                type: 'videos_stream',
                properties: {
                  videoservice: 'vimeo',
                  video_id: '254069548',
                  video_title:
                    'Pause 2018 Motion Response - Lift in the moment by Carbon',
                  video_poster_image: null,
                  video_start: null,
                  video_end: null,
                  video_duration: ''
                }
              }
            ]
          },
          actions: [
            {
              id: 1,
              pid: 8676,
              type: 'a_01_01__action',
              content: {
                text: 'Jetzt Job finden',
                link: {
                  type: 'page',
                  url: '/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: { name: 'ArrowRight', position: 'trailing' }
              }
            }
          ]
        }
      },
      textAbove: {
        id: 74203,
        pid: 8676,
        type: 'o_03_12__multi_media_text',
        tagname: 'o-03-12-multi-media-text',
        appearance: {
          size: 'default',
          frameClass: 'full',
          spaceBefore: 'small',
          spaceAfter: 'large'
        },
        content: {
          variant: 'textabove',
          background: 'light',
          gradient: 'light',
          header: {
            text: 'Multimedia Text Header: Text Above',
            size: 2,
            color: 'dark',
            tag: 'h2',
            fontWeight: 'font-regular'
          },
          subline:
            'My job is super flexible and allows me to branch into many different innovation fields.',
          text: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim sed. Dictum sit amet justo donec. Diam volutpat commodo sed egestas egestas fringilla phasellus. Tristique sollicitudin nibh sit amet commodo nulla. Sed pulvinar proin gravida hendrerit lectus a. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Non diam phasellus vestibulum lorem sed. Sed augue lacus viverra vitae congue eu consequat ac felis.',
            size: 'text-body3'
          },
          media: [
            [
              {
                publicUrl:
                  'https:\/\/draexlmaier.loc\/fileadmin\/Videos\/DRX_productvideo_v2.mp4',
                properties: {
                  uidLocal: 61480,
                  type: 'video',
                  ext: 'mp4',
                  identifier: '\/Videos\/DRX_productvideo_v2.mp4',
                  url: 'fileadmin\/Videos\/DRX_productvideo_v2.mp4'
                },
                cdn: {
                  publicUrl:
                    'https:\/\/ik.imagekit.io\/xarxh50tnqyb\/Videos\/DRX_productvideo_v2.mp4',
                  publicPath: '\/Videos\/DRX_productvideo_v2.mp4'
                }
              }
            ]
          ],
          actions: [
            {
              id: 2,
              pid: 8676,
              type: 'a_01_01__action',
              content: {
                text: 'Jetzt Job finden',
                link: {
                  type: 'page',
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: { name: 'ArrowRight', position: 'trailing' }
              }
            }
          ]
        }
      }
    }
  }
}
</script>
