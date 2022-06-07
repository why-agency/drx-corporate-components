<template>
  <section class="mb-24">
    <o-03-04-fullscreen-media-text :data="mediaImage" />
  </section>
  <section class="mb-24">
    <o-03-04-fullscreen-media-text :data="mediaVideo" />
  </section>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import O0304FullscreenMediaText from '../components/organisms/o-03-04-fullscreen-media-text.ce.vue'
</script>

<script>
export default {
  data() {
    return {
      mediaImage: {
        content: {
          header: { text: 'Headline', size: 3 },
          bodytext:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique. Arcu ac tortor dignissim convallis aenean et tortor. Vitae auctor eu augue ut lectus. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Pharetra sit amet aliquam id diam maecenas ultricies. Non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus. Integer eget aliquet nibh praesent tristique magna sit. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Ultrices in iaculis nunc sed augue. Est ultricies integer quis auctor.<\/p>',
          media: [
            [
              {
                publicUrl:
                  'https:\/\/draexlmaier.loc\/fileadmin\/_processed_\/3\/5\/csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__a18cb7ce22.jpg',
                properties: {
                  title: null,
                  alternative: null,
                  description: null,
                  mimeType: 'image\/jpeg',
                  type: 'image',
                  filename:
                    'csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__a18cb7ce22.jpg',
                  originalUrl:
                    'fileadmin\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
                  uidLocal: 1006,
                  fileReferenceUid: 61472,
                  size: '2 MB',
                  link: null,
                  dimensions: { width: 2862, height: 1417 },
                  cropDimensions: { width: 2862, height: 1417 },
                  crop: {
                    desktop: {
                      cropArea: { height: 1, width: 0.808, x: 0.095, y: 0 },
                      selectedRatio: '1920x950',
                      focusArea: null
                    },
                    mobile: {
                      cropArea: { height: 1, width: 0.333, x: 0.333, y: 0 },
                      selectedRatio: '375x450',
                      focusArea: null
                    }
                  },
                  autoplay: null,
                  extension: 'jpg'
                },
                cdn: {
                  publicUrl:
                    'https:\/\/ik.imagekit.io\/xarxh50tnqyb\/_processed_\/3\/5\/csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__a18cb7ce22.jpg',
                  publicPath:
                    '\/_processed_\/3\/5\/csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__a18cb7ce22.jpg'
                },
                useCase: 'default',
                ratio: '1920x950'
              },
              {
                publicUrl:
                  'https:\/\/draexlmaier.loc\/fileadmin\/_processed_\/3\/5\/csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__429bf7b2cb.jpg',
                properties: {
                  title: null,
                  alternative: null,
                  description: null,
                  mimeType: 'image\/jpeg',
                  type: 'image',
                  filename:
                    'csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__429bf7b2cb.jpg',
                  originalUrl:
                    'fileadmin\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
                  uidLocal: 1006,
                  fileReferenceUid: 61472,
                  size: '660 KB',
                  link: null,
                  dimensions: { width: 1179, height: 1417 },
                  cropDimensions: { width: 1179, height: 1417 },
                  crop: {
                    desktop: {
                      cropArea: { height: 1, width: 0.808, x: 0.095, y: 0 },
                      selectedRatio: '1920x950',
                      focusArea: null
                    },
                    mobile: {
                      cropArea: { height: 1, width: 0.333, x: 0.333, y: 0 },
                      selectedRatio: '375x450',
                      focusArea: null
                    }
                  },
                  autoplay: null,
                  extension: 'jpg'
                },
                cdn: {
                  publicUrl:
                    'https:\/\/ik.imagekit.io\/xarxh50tnqyb\/_processed_\/3\/5\/csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__429bf7b2cb.jpg',
                  publicPath:
                    '\/_processed_\/3\/5\/csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__429bf7b2cb.jpg'
                },
                useCase: 'mobile',
                ratio: '375x450'
              }
            ]
          ],
          actions: {
            navigation_color: '',
            buttontext: 'Click me',
            buttonid: '',
            buttonlink: 't3:\/\/page?uid=4133'
          }
        }
      },
      mediaVideo: {
        content: {
          header: { text: 'I am a VIDEO', size: 3 },
          bodytext: '\r\n<p>text about video!!!!<\/p>',
          media: [
            [
              {
                publicUrl:
                  'https:\/\/draexlmaier.loc\/fileadmin\/Videos\/DRX_productvideo_v2.mp4',
                properties: {
                  uidLocal: 61475,
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
          actions: {}
        }
      }
    }
  }
}
</script>
