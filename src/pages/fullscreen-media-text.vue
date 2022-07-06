<template>
  <section class="mb-24">
    <o-03-04-fullscreen-media-text :data="mediaImage" />
  </section>
  <section class="mb-24">
    <o-03-04-fullscreen-media-text :data="mediaVideo" />
  </section>
  <section class="mb-24">
    <o-03-04-fullscreen-media-text :data="youTube.content" />
  </section>
  <section class="mb-24">
    <o-03-04-fullscreen-media-text :data="vimeo.content" />
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
                  publicUrl: '',
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
                  publicUrl: '',
                  publicPath:
                    '\/_processed_\/3\/5\/csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__429bf7b2cb.jpg'
                },
                useCase: 'mobile',
                ratio: '375x450'
              }
            ]
          ],
          actions: {
            id: 124,
            content: {
              text: 'Click me',
              link: {
                type: 'page',
                url: 'http:\/\/draexlmaier.loc\/produkte',
                target: ' target="_top"',
                title: '',
                class: '',
                link: 'Produkte'
              }
            }
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
                  'https:\/\/development.draexlmaier.com\/fileadmin\/Videos\/mp4\/2019-08-06_Produkte_Interieur_Startteaser_web.mp4',
                properties: {
                  uidLocal: 61475,
                  type: 'video',
                  ext: 'mp4',
                  identifier: '\/Videos\/DRX_productvideo_v2.mp4',
                  url: 'fileadmin\/Videos\/DRX_productvideo_v2.mp4'
                },
                cdn: {
                  publicUrl:
                    'https:\/\/development.draexlmaier.com\/fileadmin\/Videos\/mp4\/2019-08-06_Produkte_Interieur_Startteaser_web.mp4',
                  publicPath: '\/Videos\/DRX_productvideo_v2.mp4'
                }
              }
            ]
          ],
          actions: {
            id: 124,
            content: {
              text: 'Click me',
              link: {
                type: 'page',
                url: 'http:\/\/draexlmaier.loc\/produkte',
                target: ' target="_top"',
                title: '',
                class: '',
                link: 'Produkte'
              }
            }
          }
        }
      },
      vimeo: {
        content: {
          id: 78357,
          pid: 9092,
          type: 'fullscreen_media_text',
          tagname: 'fullscreen-media-text',
          appearance: {
            layout: 'default',
            frameClass: 'full',
            spaceBefore: '',
            spaceAfter: ''
          },
          content: {
            header: {
              text: 'Leidenschaft f\u00fcr Premiumprodukte',
              layout: 3
            },
            bodytext:
              '\u003Cp\u003EWir beliefern weltweit \u003Cstrong\u003EPremium-Fahrzeughersteller mit komplexen Bordnetz-Systemen\u003C/strong\u003E, zentralen Elektrik- und Elektronik-Komponenten, exklusivem Interieur sowie Batteriesystemen f\u00fcr die Elektromobilit\u00e4t. Die Kombination der Kernkompetenzen Interieur, Elektrik, Elektronik und \u003Ca href="t3://page?uid=4000"\u003EBatteriesysteme\u003C/a\u003E macht DR\u00c4XLMAIER einzigartig in der Branche.\u003C/p\u003E',
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
            actions: {
              id: 78357,
              content: {
                text: 'Draexlmaier langer text und mehr',
                link: {
                  type: 'page',
                  url: 'http://draexlmaier.loc/unternehmen',
                  target: ' target="_top"',
                  title: '',
                  class: '',
                  link: 'Unternehmen'
                }
              }
            }
          }
        }
      },
      youTube: {
        content: {
          id: 78357,
          pid: 9092,
          type: 'fullscreen_media_text',
          tagname: 'fullscreen-media-text',
          appearance: {
            layout: 'default',
            frameClass: 'full',
            spaceBefore: '',
            spaceAfter: ''
          },
          content: {
            header: {
              text: 'Leidenschaft f\u00fcr Premiumprodukte',
              layout: 3
            },
            bodytext:
              '\u003Cp\u003EWir beliefern weltweit \u003Cstrong\u003EPremium-Fahrzeughersteller mit komplexen Bordnetz-Systemen\u003C/strong\u003E, zentralen Elektrik- und Elektronik-Komponenten, exklusivem Interieur sowie Batteriesystemen f\u00fcr die Elektromobilit\u00e4t. Die Kombination der Kernkompetenzen Interieur, Elektrik, Elektronik und \u003Ca href="t3://page?uid=4000"\u003EBatteriesysteme\u003C/a\u003E macht DR\u00c4XLMAIER einzigartig in der Branche.\u003C/p\u003E',
            // TEST VIMEO
            // media: {
            //   type: 'video-stream',
            //   video_stream: [
            //     {
            //       id: 63205,
            //       pid: 0,
            //       type: 'videos_stream',
            //       properties: {
            //         videoservice: 'vimeo',
            //         video_id: '254069548',
            //         video_title:
            //           'Pause 2018 Motion Response - Lift in the moment by Carbon',
            //         video_poster_image: null,
            //         video_start: null,
            //         video_end: null,
            //         video_duration: ''
            //       }
            //     }
            //   ]
            // },
            //TEST YOUTUBE
            media: {
              type: 'video-stream',
              image: null,
              video_stream: [
                {
                  id: 4,
                  pid: 8678,
                  type: 'videos_stream',
                  properties: {
                    videoservice: 'youtube',
                    video_id: 'S2Z3WcNNZBw',
                    video_title: 'DQ8zNGFfiSE',
                    video_poster_image: null,
                    video_start: null,
                    video_end: null,
                    video_duration: ''
                  }
                }
              ]
            },
            actions: {
              id: 78357,
              content: {
                text: 'Unternehmen',
                link: {
                  type: 'page',
                  url: 'http://draexlmaier.loc/unternehmen',
                  target: ' target="_top"',
                  title: '',
                  class: '',
                  link: 'Unternehmen'
                }
              }
            }
          }
        }
      }
    }
  }
}
</script>
