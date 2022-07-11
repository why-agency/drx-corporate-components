<template>
  <section>
    <!-- <div
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
    </div> -->
    <o-03-12-multi-media-text :data="image" />
    <o-03-12-multi-media-text :data="vimeo" />
    <o-03-12-multi-media-text :data="youTube" />
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
      // textBelow: {
      //   id: 74201,
      //   pid: 8676,
      //   type: 'o_03_12__multi_media_text',
      //   tagname: 'o-03-12-multi-media-text',
      //   appearance: {
      //     size: 'default',
      //     frameClass: 'default',
      //     spaceBefore: '',
      //     spaceAfter: ''
      //   },
      //   content: {
      //     variant: 'textbelow',
      //     background: 'gradient',
      //     gradient: 'dark',
      //     header: {
      //       text: 'Multimedia Text Header',
      //       size: 2,
      //       color: 'turqoise',
      //       tag: 'h1',
      //       fontWeight: 'font-bold'
      //     },
      //     subline:
      //       'My job is super flexible and allows me to branch into many different innovation fields.',
      //     // text: {
      //     //   text: 'Erfolg ist eine Frage des Charakters. Wir haben 850 Chancen f\u00fcr dich.',
      //     //   size: 1
      //     // },
      //     media: {
      //       type: 'video-stream',
      //       video_stream: [
      //         {
      //           id: 63205,
      //           pid: 0,
      //           type: 'videos_stream',
      //           properties: {
      //             videoservice: 'vimeo',
      //             video_id: '254069548',
      //             video_title:
      //               'Pause 2018 Motion Response - Lift in the moment by Carbon',
      //             video_poster_image: null,
      //             video_start: null,
      //             video_end: null,
      //             video_duration: ''
      //           }
      //         }
      //       ]
      //     },
      //     actions: [
      //       {
      //         id: 1,
      //         pid: 8676,
      //         type: 'a_01_01__action',
      //         content: {
      //           text: 'Jetzt Job finden',
      //           link: {
      //             type: 'page',
      //             url: '/karriere',
      //             target: ' target="_top"',
      //             title: '',
      //             class: ''
      //           },
      //           icon: { name: 'ArrowRight', position: 'trailing' }
      //         }
      //       }
      //     ]
      //   }
      // },
      // textAbove: {
      //   id: 74203,
      //   pid: 8676,
      //   type: 'o_03_12__multi_media_text',
      //   tagname: 'o-03-12-multi-media-text',
      //   appearance: {
      //     size: 'default',
      //     frameClass: 'full',
      //     spaceBefore: 'small',
      //     spaceAfter: 'large'
      //   },
      //   content: {
      //     variant: 'textabove',
      //     background: 'light',
      //     gradient: 'light',
      //     header: {
      //       text: 'Multimedia Text Header: Text Above',
      //       size: 2,
      //       color: 'dark',
      //       tag: 'h2',
      //       fontWeight: 'font-regular'
      //     },
      //     subline:
      //       'My job is super flexible and allows me to branch into many different innovation fields.',
      //     text: {
      //       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi proin sed libero enim sed. Dictum sit amet justo donec. Diam volutpat commodo sed egestas egestas fringilla phasellus. Tristique sollicitudin nibh sit amet commodo nulla. Sed pulvinar proin gravida hendrerit lectus a. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Non diam phasellus vestibulum lorem sed. Sed augue lacus viverra vitae congue eu consequat ac felis.',
      //       size: 'text-body3'
      //     },
      //     media: [
      //       [
      //         {
      //           publicUrl:
      //             'https:\/\/draexlmaier.loc\/fileadmin\/Videos\/DRX_productvideo_v2.mp4',
      //           properties: {
      //             uidLocal: 61480,
      //             type: 'video',
      //             ext: 'mp4',
      //             identifier: '\/Videos\/DRX_productvideo_v2.mp4',
      //             url: 'fileadmin\/Videos\/DRX_productvideo_v2.mp4'
      //           },
      //           cdn: {
      //             publicUrl:
      //               'https:\/\/ik.imagekit.io\/xarxh50tnqyb\/Videos\/DRX_productvideo_v2.mp4',
      //             publicPath: '\/Videos\/DRX_productvideo_v2.mp4'
      //           }
      //         }
      //       ]
      //     ],
      //     actions: [
      //       {
      //         id: 2,
      //         pid: 8676,
      //         type: 'a_01_01__action',
      //         content: {
      //           text: 'Jetzt Job finden',
      //           link: {
      //             type: 'page',
      //             url: '\/karriere',
      //             target: ' target="_top"',
      //             title: '',
      //             class: ''
      //           },
      //           icon: { name: 'ArrowRight', position: 'trailing' }
      //         }
      //       }
      //     ]
      //   }
      // },
      image: {
        id: 74201,
        pid: 8676,
        type: 'o_03_12__multi_media_text',
        tagname: 'o-03-12-multi-media-text',
        appearance: {
          layout: 'default',
          frameClass: 'default',
          spaceBefore: 'small',
          spaceAfter: 'small'
        },
        content: {
          overlays: [
            {
              id: 4,
              pid: 8676,
              type: 'overlay_multipurpose',
              content: {
                buttonText: 'Learn more',
                variant: 'image',
                media: {
                  image: [
                    [
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
                        properties: {
                          title: null,
                          alternative: null,
                          description: null,
                          mimeType: 'image\/jpeg',
                          type: 'image',
                          filename:
                            '2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
                          originalUrl:
                            'fileadmin\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
                          uidLocal: 1006,
                          fileReferenceUid: 61504,
                          size: '4 MB',
                          link: null,
                          dimensions: { width: 3543, height: 1417 },
                          cropDimensions: { width: 3543, height: 1417 },
                          crop: {
                            default: {
                              cropArea: { x: 0, y: 0, width: 1, height: 1 },
                              selectedRatio: 'NaN',
                              focusArea: null
                            }
                          },
                          autoplay: null,
                          extension: 'jpg'
                        },
                        cdn: {
                          publicUrl: '',
                          publicPath:
                            '\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg'
                        },
                        useCase: 'default',
                        ratio: null
                      },
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
                        properties: {
                          title: null,
                          alternative: null,
                          description: null,
                          mimeType: 'image\/jpeg',
                          type: 'image',
                          filename:
                            '2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
                          originalUrl:
                            'fileadmin\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
                          uidLocal: 1006,
                          fileReferenceUid: 61504,
                          size: '4 MB',
                          link: null,
                          dimensions: { width: 3543, height: 1417 },
                          cropDimensions: { width: 3543, height: 1417 },
                          crop: {
                            default: {
                              cropArea: { x: 0, y: 0, width: 1, height: 1 },
                              selectedRatio: 'NaN',
                              focusArea: null
                            }
                          },
                          autoplay: null,
                          extension: 'jpg'
                        },
                        cdn: {
                          publicUrl: '',
                          publicPath:
                            '\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg'
                        },
                        useCase: 'full',
                        ratio: null
                      },
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
                        properties: {
                          title: null,
                          alternative: null,
                          description: null,
                          mimeType: 'image\/jpeg',
                          type: 'image',
                          filename:
                            '2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
                          originalUrl:
                            'fileadmin\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
                          uidLocal: 1006,
                          fileReferenceUid: 61504,
                          size: '4 MB',
                          link: null,
                          dimensions: { width: 3543, height: 1417 },
                          cropDimensions: { width: 3543, height: 1417 },
                          crop: {
                            default: {
                              cropArea: { x: 0, y: 0, width: 1, height: 1 },
                              selectedRatio: 'NaN',
                              focusArea: null
                            }
                          },
                          autoplay: null,
                          extension: 'jpg'
                        },
                        cdn: {
                          publicUrl: '',
                          publicPath:
                            '\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg'
                        },
                        useCase: 'mobile',
                        ratio: null
                      }
                    ]
                  ],
                  video: null,
                  video_stream: []
                },
                header: { text: 'header', tag: 'h1' },
                subheadline: { text: 'subline' },
                actions: [],
                additionaltext: { before: '', after: '', image: null }
              }
            }
          ],

          variant: 'textbelow',
          background: 'none',
          gradient: 'none',
          media: {
            type: 'image',
            image: [
              [
                {
                  publicUrl:
                    'https:\/\/draexlmaier.loc\/fileadmin\/_processed_\/3\/5\/csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__3fa5fe4aac.jpg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image\/jpeg',
                    type: 'image',
                    filename:
                      'csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__3fa5fe4aac.jpg',
                    originalUrl:
                      'fileadmin\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
                    uidLocal: 1006,
                    fileReferenceUid: 61497,
                    size: '2 MB',
                    link: null,
                    dimensions: { width: 3542, height: 1417 },
                    cropDimensions: { width: 3542, height: 1417 },
                    crop: {
                      crop_5_2: {
                        cropArea: {
                          x: 7.056167090036692e-5,
                          y: 0,
                          width: 0.9998588766581993,
                          height: 1
                        },
                        selectedRatio: '5:2',
                        focusArea: null
                      },
                      crop_9_4: {
                        cropArea: {
                          x: 0.05006350550381033,
                          y: 0,
                          width: 0.8998729889923793,
                          height: 1
                        },
                        selectedRatio: '9:4',
                        focusArea: null
                      },
                      crop_4_3: {
                        cropArea: {
                          x: 0.2333709662244802,
                          y: 0,
                          width: 0.5332580675510395,
                          height: 1
                        },
                        selectedRatio: '4:3',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpg'
                  },
                  cdn: {
                    publicUrl:
                      '',
                    publicPath:
                      '\/_processed_\/3\/5\/csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__3fa5fe4aac.jpg'
                  },
                  useCase: 'default',
                  ratio: '5:2'
                },
                {
                  publicUrl:
                    'https:\/\/draexlmaier.loc\/fileadmin\/_processed_\/3\/5\/csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__d14b003603.jpg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image\/jpeg',
                    type: 'image',
                    filename:
                      'csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__d14b003603.jpg',
                    originalUrl:
                      'fileadmin\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
                    uidLocal: 1006,
                    fileReferenceUid: 61497,
                    size: '2 MB',
                    link: null,
                    dimensions: { width: 3188, height: 1417 },
                    cropDimensions: { width: 3188, height: 1417 },
                    crop: {
                      crop_5_2: {
                        cropArea: {
                          x: 7.056167090036692e-5,
                          y: 0,
                          width: 0.9998588766581993,
                          height: 1
                        },
                        selectedRatio: '5:2',
                        focusArea: null
                      },
                      crop_9_4: {
                        cropArea: {
                          x: 0.05006350550381033,
                          y: 0,
                          width: 0.8998729889923793,
                          height: 1
                        },
                        selectedRatio: '9:4',
                        focusArea: null
                      },
                      crop_4_3: {
                        cropArea: {
                          x: 0.2333709662244802,
                          y: 0,
                          width: 0.5332580675510395,
                          height: 1
                        },
                        selectedRatio: '4:3',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpg'
                  },
                  cdn: {
                    publicUrl:
                      '',
                    publicPath:
                      '\/_processed_\/3\/5\/csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__d14b003603.jpg'
                  },
                  useCase: 'full',
                  ratio: '9:4'
                },
                {
                  publicUrl:
                    'https:\/\/draexlmaier.loc\/fileadmin\/_processed_\/3\/5\/csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__c7380431cb.jpg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image\/jpeg',
                    type: 'image',
                    filename:
                      'csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__c7380431cb.jpg',
                    originalUrl:
                      'fileadmin\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
                    uidLocal: 1006,
                    fileReferenceUid: 61497,
                    size: '1 MB',
                    link: null,
                    dimensions: { width: 1889, height: 1417 },
                    cropDimensions: { width: 1889, height: 1417 },
                    crop: {
                      crop_5_2: {
                        cropArea: {
                          x: 7.056167090036692e-5,
                          y: 0,
                          width: 0.9998588766581993,
                          height: 1
                        },
                        selectedRatio: '5:2',
                        focusArea: null
                      },
                      crop_9_4: {
                        cropArea: {
                          x: 0.05006350550381033,
                          y: 0,
                          width: 0.8998729889923793,
                          height: 1
                        },
                        selectedRatio: '9:4',
                        focusArea: null
                      },
                      crop_4_3: {
                        cropArea: {
                          x: 0.2333709662244802,
                          y: 0,
                          width: 0.5332580675510395,
                          height: 1
                        },
                        selectedRatio: '4:3',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpg'
                  },
                  cdn: {
                    publicUrl:
                      '',
                    publicPath:
                      '\/_processed_\/3\/5\/csm_2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1__c7380431cb.jpg'
                  },
                  useCase: 'mobile',
                  ratio: '4:3'
                }
              ]
            ]
          },
          header: {
            text: 'Erfolg ist eine Frage des Charakters. Na ja...',
            size: 5,
            color: 'turqoise',
            tag: 'h2',
            fontWeight: 'font-bold'
          },
          subline:
            'My job is super flexible and allows me to branch into many different innovation fields.',
          text: {
            text: 'Erfolg ist eine Frage des Charakters. Wir haben 850 Chancen f\u00fcr dich.',
            size: 'text-body3'
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
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: { name: 'ArrowRight', position: 'trailing' },
                color: 'secondary'
              }
            },
            {
              id: 2,
              pid: 8676,
              type: 'a_01_01__action',
              content: {
                text: 'Test',
                link: {
                  type: 'page',
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: { name: 'ArrowRight', position: 'trailing' },
                color: 'secondary'
              }
            }
          ]
        }
      },
      vimeo: {
        id: 74203,
        pid: 8676,
        type: 'o_03_12__multi_media_text',
        tagname: 'o-03-12-multi-media-text',
        appearance: {
          layout: 'default',
          frameClass: 'full',
          spaceBefore: 'small',
          spaceAfter: 'large'
        },
        content: {
          variant: 'textabove',
          background: 'light',
          // media: {
          //   type: 'video-stream',
          //   video_stream: [
          //     {
          //       id: 3,
          //       pid: 8676,
          //       type: 'videos_stream',
          //       properties: {
          //         videoservice: 'youtube',
          //         video_id: 'DQ8zNGFfiSE',
          //         video_title: 'test',
          //         video_poster_image: null,
          //         video_start: null,
          //         video_end: null,
          //         video_duration: ''
          //       }
          //     }
          //   ]
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
          header: {
            text: 'Multimedia Text Header: Text Above',
            size: 2,
            color: 'dark',
            tag: 'h1',
            fontWeight: 'font-normal'
          },
          subline:
            'My job is super flexible and allows me to branch into many different innovation fields.',
          text: {
            text: 'Erfolg ist eine Frage des Charakters. Wir haben 850 Chancen f\u00fcr dich.',
            size: 'text-body1'
          },
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
                icon: { name: 'ArrowRight', position: 'trailing' },
                color: 'white'
              }
            }
          ],
          overlays: []
        }
      },
      youTube: {
        id: 74203,
        pid: 8676,
        type: 'o_03_12__multi_media_text',
        tagname: 'o-03-12-multi-media-text',
        appearance: {
          layout: 'default',
          frameClass: 'full',
          spaceBefore: 'small',
          spaceAfter: 'large'
        },
        content: {
          variant: 'textabove',
          background: 'light',
          media: {
            type: 'video-stream',
            video_stream: [
              {
                id: 3,
                pid: 8676,
                type: 'videos_stream',
                properties: {
                  videoservice: 'youtube',
                  video_id: 'DQ8zNGFfiSE',
                  video_title: 'test',
                  video_poster_image: null,
                  video_start: null,
                  video_end: null,
                  video_duration: ''
                }
              }
            ]
          },
          header: {
            text: 'Multimedia Text Header: Text Above',
            size: 2,
            color: 'dark',
            tag: 'h1',
            fontWeight: 'font-normal'
          },
          subline:
            'My job is super flexible and allows me to branch into many different innovation fields.',
          text: {
            text: 'Erfolg ist eine Frage des Charakters. Wir haben 850 Chancen f\u00fcr dich.',
            size: 'text-body1'
          },
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
                icon: { name: 'ArrowRight', position: 'trailing' },
                color: 'white'
              }
            }
          ],
          overlays: []
        }
      }
    }
  }
}
</script>
