<template>
  <section>
    <o-03-11-sticky-scroll :data="withOverlay" />
    <div class="bg-gradient mb-[400px]">
      <o-03-11-sticky-scroll :data="sticky1" />
    </div>
    <div class="bg-gradient">
      <o-03-11-sticky-scroll :data="sticky2" />
    </div>
    <div class="flex h-64 w-full">
      <div class="m-auto">Test div zum scrollen!</div>
    </div>
  </section>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import O0311StickyScroll from '../components/organisms/o-03-11-sticky-scroll/index.ce.vue'
</script>

<script>
export default {
  components: { O0311StickyScroll },
  data() {
    return {
      withOverlay: {
        id: 1000,
        content: {
          box_background: 'yes',
          background: 'gradient',
          header: {
            text: 'test',
            size: 3,
            color: '',
            tag: 'h3',
            fontWeight: 'font-bold'
          },
          actions: [],
          scroll_items: [
            {
              id: 1,
              pid: 8676,
              type: 'scroll_item',
              content: {
                headline: 'Tab 1 headline',
                text: {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet.',
                  size: 'text-body1'
                },
                icon: [
                  [
                    {
                      publicUrl:
                        'https:\/\/draexlmaier.loc\/fileadmin\/user_upload\/Atom_Icon_close_blue.svg',
                      properties: {
                        title: null,
                        alternative: null,
                        description: null,
                        mimeType: 'image\/svg+xml',
                        type: 'image',
                        filename: 'Atom_Icon_close_blue.svg',
                        originalUrl:
                          'fileadmin\/user_upload\/Atom_Icon_close_blue.svg',
                        uidLocal: 21040,
                        fileReferenceUid: 61485,
                        size: '660 B',
                        link: null,
                        dimensions: { width: 12, height: 12 },
                        cropDimensions: { width: 12, height: 12 },
                        crop: {
                          desktop: {
                            cropArea: { x: 0, y: 0, width: 1, height: 1 },
                            selectedRatio: '1:1',
                            focusArea: null
                          }
                        },
                        autoplay: 0,
                        extension: 'svg'
                      },
                      cdn: {
                        publicUrl:
                          'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/user_upload\/Atom_Icon_close_blue.svg',
                        publicPath: '\/user_upload\/Atom_Icon_close_blue.svg'
                      },
                      useCase: 'default',
                      ratio: null
                    }
                  ]
                ],
                actions: [
                  {
                    id: 7,
                    pid: 8676,
                    type: 'a_01_01__action',
                    content: {
                      text: 'Karriere',
                      link: {
                        type: 'page',
                        url: '\/karriere',
                        target: ' target="_top"',
                        title: '',
                        class: ''
                      },
                      icon: null,
                      color: ''
                    }
                  }
                ],
                overlays: [
                  {
                    id: 8,
                    pid: 8676,
                    type: 'overlay_multipurpose',
                    content: {
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
                                fileReferenceUid: 61507,
                                size: '4 MB',
                                link: null,
                                dimensions: { width: 3543, height: 1417 },
                                cropDimensions: { width: 3543, height: 1417 },
                                crop: {
                                  default: {
                                    cropArea: {
                                      x: 0,
                                      y: 0,
                                      width: 1,
                                      height: 1
                                    },
                                    selectedRatio: 'NaN',
                                    focusArea: null
                                  }
                                },
                                autoplay: null,
                                extension: 'jpg'
                              },
                              cdn: {
                                publicUrl:
                                  'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
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
                                fileReferenceUid: 61507,
                                size: '4 MB',
                                link: null,
                                dimensions: { width: 3543, height: 1417 },
                                cropDimensions: { width: 3543, height: 1417 },
                                crop: {
                                  default: {
                                    cropArea: {
                                      x: 0,
                                      y: 0,
                                      width: 1,
                                      height: 1
                                    },
                                    selectedRatio: 'NaN',
                                    focusArea: null
                                  }
                                },
                                autoplay: null,
                                extension: 'jpg'
                              },
                              cdn: {
                                publicUrl:
                                  'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
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
                                fileReferenceUid: 61507,
                                size: '4 MB',
                                link: null,
                                dimensions: { width: 3543, height: 1417 },
                                cropDimensions: { width: 3543, height: 1417 },
                                crop: {
                                  default: {
                                    cropArea: {
                                      x: 0,
                                      y: 0,
                                      width: 1,
                                      height: 1
                                    },
                                    selectedRatio: 'NaN',
                                    focusArea: null
                                  }
                                },
                                autoplay: null,
                                extension: 'jpg'
                              },
                              cdn: {
                                publicUrl:
                                  'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/Group\/Carreers\/Apprentice\/2003-07-08_Fotoshooting_Hackl_Vilsbiburg_DTZ__1_.jpg',
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
                      header: { text: 'Overlay Tab 1', tag: 'h1' },
                      subheadline: { text: '' },
                      actions: [],
                      additionaltext: {
                        before:
                          '\u003Cp\u003ELorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet.\u003C\/p\u003E',
                        after: '',
                        image: null
                      }
                    }
                  }
                ]
              }
            },
            {
              id: 2,
              pid: 8676,
              type: 'scroll_item',
              content: {
                headline: 'Tab 2 headline',
                text: {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In cursus turpis massa tincidunt dui ut ornare lectus sit. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet.',
                  size: 'text-body1'
                },
                icon: null,
                actions: [],
                overlays: [
                  {
                    id: 9,
                    pid: 8676,
                    type: 'overlay_multipurpose',
                    content: {
                      variant: 'video-stream',
                      media: {
                        image: null,
                        video: null,
                        video_stream: [
                          {
                            id: 10,
                            pid: 8676,
                            type: 'videos_stream',
                            properties: {
                              videoservice: 'vimeo',
                              video_id: '254069548',
                              video_title: 'video',
                              video_poster_image: null,
                              video_start: null,
                              video_end: null,
                              video_duration: ''
                            }
                          }
                        ]
                      },
                      header: { text: 'Tab 2 overlay', tag: 'h1' },
                      subheadline: { text: 'Subheader' },
                      actions: [],
                      additionaltext: { before: '', after: '', image: null }
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      sticky1: {
        id: 23432,
        content: {
          box_background: 'yes', //yes or no
          background: 'gradient', //To test, also change the background color at the top of the container (dark,light,gradient,none)
          header: {
            text: 'Starke Gr\u00fcnde warum wir matchen.',
            size: 1,
            color: 'sand',
            tag: 'h1',
            fontWeight: 'font-normal'
          },
          actions: [
            {
              id: 12,
              pid: 9089,
              type: 'a_01_01__action',
              content: {
                text: 'Warum DRÄXLMAIER',
                link: {
                  type: 'file',
                  url: '\/draexlmaier.com\/[4000]',
                  target: ' target="_blank"',
                  title: '',
                  class: ''
                },
                icon: null
              }
            },
            {
              id: 13,
              pid: 9089,
              type: 'a_01_01__action',
              content: {
                text: 'Karrierechancen',
                link: {
                  type: 'file',
                  url: '\/draexlmaier.com\/[4000]',
                  target: ' target="_blank"',
                  title: '',
                  class: ''
                },
                icon: null
              }
            }
          ],
          scroll_items: [
            {
              id: 1,
              pid: 9089,
              type: 'scroll_item',
              content: {
                headline:
                  'Premiumprodukte und weiterer text für die Überschrift.',
                text: {
                  text: 'Innovativ denken und handeln: Dieses Streben ist in der Erfolgsgeschichte von DRÄXLMAIER eine feste Größe – gestern, heute und morgen. Mit unseren Produkten für E-Mobilität und autonomes Fahren sind wir weltweit führend.',
                  size: 'text-body1'
                }
                // icon: [
                //   [
                //     {
                //       publicUrl:
                //         'https:\/\/draexlmaier.loc\/fileadmin\/user_upload\/new_arrow.svg',
                //       properties: {
                //         title: null,
                //         alternative: null,
                //         description: null,
                //         mimeType: 'image\/svg+xml',
                //         type: 'image',
                //         filename: 'new_arrow.svg',
                //         originalUrl: 'fileadmin\/user_upload\/new_arrow.svg',
                //         uidLocal: 21322,
                //         fileReferenceUid: 63197,
                //         size: '287 B',
                //         link: null,
                //         dimensions: { width: 40, height: 40 },
                //         cropDimensions: { width: 40, height: 40 },
                //         crop: {
                //           desktop: {
                //             cropArea: { x: 0, y: 0, width: 1, height: 1 },
                //             selectedRatio: '1:1',
                //             focusArea: null
                //           }
                //         },
                //         autoplay: 0,
                //         extension: 'svg'
                //       },
                //       cdn: {
                //         publicUrl: '\/user_upload\/new_arrow.svg',
                //         publicPath: '\/user_upload\/new_arrow.svg'
                //       },
                //       useCase: 'default',
                //       ratio: null
                //     }
                //   ]
                // ],
                // actions: [
                //   {
                //     id: 2,
                //     pid: 9089,
                //     type: 'a_01_01__action',
                //     content: {
                //       text: 'Warum DRÄXLMAIER',
                //       link: {
                //         type: 'page',
                //         url: '\/',
                //         target: ' target="_top"',
                //         title: '',
                //         class: ''
                //       },
                //       icon: null
                //     }
                //   }
                // ]
              }
            },
            {
              id: 2,
              pid: 9089,
              type: 'scroll_item',
              content: {
                headline: 'Eine Mission \u2013 viele Talente',
                text: {
                  text: 'Zeigen Sie Ihre automobile Leidenschaft und werden Sie Teil des DR\u00c4XLMAIER Teams.',
                  size: 'text-body1'
                }
                // icon: [
                //   [
                //     {
                //       publicUrl:
                //         'https:\/\/draexlmaier.loc\/fileadmin\/user_upload\/new_arrow.svg',
                //       properties: {
                //         title: null,
                //         alternative: null,
                //         description: null,
                //         mimeType: 'image\/svg+xml',
                //         type: 'image',
                //         filename: 'new_arrow.svg',
                //         originalUrl: 'fileadmin\/user_upload\/new_arrow.svg',
                //         uidLocal: 21322,
                //         fileReferenceUid: 63197,
                //         size: '287 B',
                //         link: null,
                //         dimensions: { width: 40, height: 40 },
                //         cropDimensions: { width: 40, height: 40 },
                //         crop: {
                //           desktop: {
                //             cropArea: { x: 0, y: 0, width: 1, height: 1 },
                //             selectedRatio: '1:1',
                //             focusArea: null
                //           }
                //         },
                //         autoplay: 0,
                //         extension: 'svg'
                //       },
                //       cdn: {
                //         publicUrl: '\/user_upload\/new_arrow.svg',
                //         publicPath: '\/user_upload\/new_arrow.svg'
                //       },
                //       useCase: 'default',
                //       ratio: null
                //     }
                //   ]
                // ],
                // actions: [
                //   {
                //     id: 3,
                //     pid: 9089,
                //     type: 'a_01_01__action',
                //     content: {
                //       text: 'Warum DRÄXLMAIER',
                //       link: {
                //         type: 'page',
                //         url: '\/',
                //         target: ' target="_top"',
                //         title: '',
                //         class: ''
                //       },
                //       icon: null
                //     }
                //   }
                // ]
              }
            },
            {
              id: 3,
              pid: 9089,
              type: 'scroll_item',
              content: {
                headline: 'Premiumprodukte',
                text: {
                  text: 'Innovativ denken und handeln: Dieses Streben ist in der Erfolgsgeschichte von DRÄXLMAIER eine feste Größe – gestern, heute und morgen. Mit unseren Produkten für E-Mobilität und autonomes Fahren sind wir weltweit führend.',
                  size: 'text-body1'
                }
                // icon: [
                //   [
                //     {
                //       publicUrl:
                //         'https:\/\/draexlmaier.loc\/fileadmin\/user_upload\/new_arrow.svg',
                //       properties: {
                //         title: null,
                //         alternative: null,
                //         description: null,
                //         mimeType: 'image\/svg+xml',
                //         type: 'image',
                //         filename: 'new_arrow.svg',
                //         originalUrl: 'fileadmin\/user_upload\/new_arrow.svg',
                //         uidLocal: 21322,
                //         fileReferenceUid: 63197,
                //         size: '287 B',
                //         link: null,
                //         dimensions: { width: 40, height: 40 },
                //         cropDimensions: { width: 40, height: 40 },
                //         crop: {
                //           desktop: {
                //             cropArea: { x: 0, y: 0, width: 1, height: 1 },
                //             selectedRatio: '1:1',
                //             focusArea: null
                //           }
                //         },
                //         autoplay: 0,
                //         extension: 'svg'
                //       },
                //       cdn: {
                //         publicUrl: '\/user_upload\/new_arrow.svg',
                //         publicPath: '\/user_upload\/new_arrow.svg'
                //       },
                //       useCase: 'default',
                //       ratio: null
                //     }
                //   ]
                // ],
                // actions: [
                //   {
                //     id: 4,
                //     pid: 9089,
                //     type: 'a_01_01__action',
                //     content: {
                //       text: 'Warum DRÄXLMAIER',
                //       link: {
                //         type: 'page',
                //         url: '\/',
                //         target: ' target="_top"',
                //         title: '',
                //         class: ''
                //       },
                //       icon: null
                //     }
                //   }
                // ]
              }
            },
            {
              id: 4,
              pid: 9089,
              type: 'scroll_item',
              content: {
                headline: 'Premiumprodukte',
                text: {
                  text: 'Innovativ denken und handeln: Dieses Streben ist in der Erfolgsgeschichte von DRÄXLMAIER eine feste Größe – gestern, heute und morgen. Mit unseren Produkten für E-Mobilität und autonomes Fahren sind wir weltweit führend.',
                  size: 'text-body1'
                },
                icon: [
                  [
                    {
                      publicUrl:
                        'https:\/\/draexlmaier.loc\/fileadmin\/user_upload\/new_arrow.svg',
                      properties: {
                        title: null,
                        alternative: null,
                        description: null,
                        mimeType: 'image\/svg+xml',
                        type: 'image',
                        filename: 'new_arrow.svg',
                        originalUrl: 'fileadmin\/user_upload\/new_arrow.svg',
                        uidLocal: 21322,
                        fileReferenceUid: 63197,
                        size: '287 B',
                        link: null,
                        dimensions: { width: 40, height: 40 },
                        cropDimensions: { width: 40, height: 40 },
                        crop: {
                          desktop: {
                            cropArea: { x: 0, y: 0, width: 1, height: 1 },
                            selectedRatio: '1:1',
                            focusArea: null
                          }
                        },
                        autoplay: 0,
                        extension: 'svg'
                      },
                      cdn: {
                        publicUrl: '\/user_upload\/new_arrow.svg',
                        publicPath: '\/user_upload\/new_arrow.svg'
                      },
                      useCase: 'default',
                      ratio: null
                    }
                  ]
                ],
                actions: [
                  {
                    id: 5,
                    pid: 9089,
                    type: 'a_01_01__action',
                    content: {
                      text: 'Warum DRÄXLMAIER',
                      link: {
                        type: 'page',
                        url: '\/',
                        target: ' target="_top"',
                        title: '',
                        class: ''
                      },
                      icon: null
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      sticky2: {
        id: 23438,
        content: {
          box_background: 'yes', //yes or no
          background: 'gradient', //To test, also change the background color at the top of the container (dark,light,gradient,none)
          header: {
            text: 'Starke Gr\u00fcnde warum wir matchen.',
            size: 1,
            color: 'sand',
            tag: 'h1',
            fontWeight: 'font-normal'
          },
          actions: [
            {
              id: 12,
              pid: 9089,
              type: 'a_01_01__action',
              content: {
                text: 'Warum DRÄXLMAIER',
                link: {
                  type: 'file',
                  url: '\/draexlmaier.com\/[4000]',
                  target: ' target="_blank"',
                  title: '',
                  class: ''
                },
                icon: null
              }
            },
            {
              id: 13,
              pid: 9089,
              type: 'a_01_01__action',
              content: {
                text: 'Karrierechancen',
                link: {
                  type: 'file',
                  url: '\/draexlmaier.com\/[4000]',
                  target: ' target="_blank"',
                  title: '',
                  class: ''
                },
                icon: null
              }
            }
          ],
          scroll_items: [
            {
              id: 1,
              pid: 9089,
              type: 'scroll_item',
              content: {
                headline: 'Premiumprodukte',
                text: {
                  text: 'Innovativ denken und handeln: Dieses Streben ist in der Erfolgsgeschichte von DRÄXLMAIER eine feste Größe – gestern, heute und morgen. Mit unseren Produkten für E-Mobilität und autonomes Fahren sind wir weltweit führend.',
                  size: 'text-body1'
                },
                icon: [
                  [
                    {
                      publicUrl:
                        'https:\/\/draexlmaier.loc\/fileadmin\/user_upload\/new_arrow.svg',
                      properties: {
                        title: null,
                        alternative: null,
                        description: null,
                        mimeType: 'image\/svg+xml',
                        type: 'image',
                        filename: 'new_arrow.svg',
                        originalUrl: 'fileadmin\/user_upload\/new_arrow.svg',
                        uidLocal: 21322,
                        fileReferenceUid: 63197,
                        size: '287 B',
                        link: null,
                        dimensions: { width: 40, height: 40 },
                        cropDimensions: { width: 40, height: 40 },
                        crop: {
                          desktop: {
                            cropArea: { x: 0, y: 0, width: 1, height: 1 },
                            selectedRatio: '1:1',
                            focusArea: null
                          }
                        },
                        autoplay: 0,
                        extension: 'svg'
                      },
                      cdn: {
                        publicUrl: '\/user_upload\/new_arrow.svg',
                        publicPath: '\/user_upload\/new_arrow.svg'
                      },
                      useCase: 'default',
                      ratio: null
                    }
                  ]
                ],
                actions: [
                  {
                    id: 2,
                    pid: 9089,
                    type: 'a_01_01__action',
                    content: {
                      text: 'Warum DRÄXLMAIER',
                      link: {
                        type: 'page',
                        url: '\/',
                        target: ' target="_top"',
                        title: '',
                        class: ''
                      },
                      icon: null
                    }
                  }
                ]
              }
            },
            {
              id: 2,
              pid: 9089,
              type: 'scroll_item',
              content: {
                headline: 'Eine Mission \u2013 viele Talente',
                text: {
                  text: 'Zeigen Sie Ihre automobile Leidenschaft und werden Sie Teil des DR\u00c4XLMAIER Teams.',
                  size: 'text-body1'
                },
                icon: [
                  [
                    {
                      publicUrl:
                        'https:\/\/draexlmaier.loc\/fileadmin\/user_upload\/new_arrow.svg',
                      properties: {
                        title: null,
                        alternative: null,
                        description: null,
                        mimeType: 'image\/svg+xml',
                        type: 'image',
                        filename: 'new_arrow.svg',
                        originalUrl: 'fileadmin\/user_upload\/new_arrow.svg',
                        uidLocal: 21322,
                        fileReferenceUid: 63197,
                        size: '287 B',
                        link: null,
                        dimensions: { width: 40, height: 40 },
                        cropDimensions: { width: 40, height: 40 },
                        crop: {
                          desktop: {
                            cropArea: { x: 0, y: 0, width: 1, height: 1 },
                            selectedRatio: '1:1',
                            focusArea: null
                          }
                        },
                        autoplay: 0,
                        extension: 'svg'
                      },
                      cdn: {
                        publicUrl: '\/user_upload\/new_arrow.svg',
                        publicPath: '\/user_upload\/new_arrow.svg'
                      },
                      useCase: 'default',
                      ratio: null
                    }
                  ]
                ],
                actions: [
                  {
                    id: 3,
                    pid: 9089,
                    type: 'a_01_01__action',
                    content: {
                      text: 'Warum DRÄXLMAIER',
                      link: {
                        type: 'page',
                        url: '\/',
                        target: ' target="_top"',
                        title: '',
                        class: ''
                      },
                      icon: null
                    }
                  }
                ]
              }
            },
            {
              id: 3,
              pid: 9089,
              type: 'scroll_item',
              content: {
                headline: 'Premiumprodukte',
                text: {
                  text: 'Innovativ denken und handeln: Dieses Streben ist in der Erfolgsgeschichte von DRÄXLMAIER eine feste Größe – gestern, heute und morgen. Mit unseren Produkten für E-Mobilität und autonomes Fahren sind wir weltweit führend.',
                  size: 'text-body1'
                },
                icon: [
                  [
                    {
                      publicUrl:
                        'https:\/\/draexlmaier.loc\/fileadmin\/user_upload\/new_arrow.svg',
                      properties: {
                        title: null,
                        alternative: null,
                        description: null,
                        mimeType: 'image\/svg+xml',
                        type: 'image',
                        filename: 'new_arrow.svg',
                        originalUrl: 'fileadmin\/user_upload\/new_arrow.svg',
                        uidLocal: 21322,
                        fileReferenceUid: 63197,
                        size: '287 B',
                        link: null,
                        dimensions: { width: 40, height: 40 },
                        cropDimensions: { width: 40, height: 40 },
                        crop: {
                          desktop: {
                            cropArea: { x: 0, y: 0, width: 1, height: 1 },
                            selectedRatio: '1:1',
                            focusArea: null
                          }
                        },
                        autoplay: 0,
                        extension: 'svg'
                      },
                      cdn: {
                        publicUrl: '\/user_upload\/new_arrow.svg',
                        publicPath: '\/user_upload\/new_arrow.svg'
                      },
                      useCase: 'default',
                      ratio: null
                    }
                  ]
                ],
                actions: [
                  {
                    id: 4,
                    pid: 9089,
                    type: 'a_01_01__action',
                    content: {
                      text: 'Warum DRÄXLMAIER',
                      link: {
                        type: 'page',
                        url: '\/',
                        target: ' target="_top"',
                        title: '',
                        class: ''
                      },
                      icon: null
                    }
                  }
                ]
              }
            },
            {
              id: 4,
              pid: 9089,
              type: 'scroll_item',
              content: {
                headline: 'Premiumprodukte',
                text: {
                  text: 'Innovativ denken und handeln: Dieses Streben ist in der Erfolgsgeschichte von DRÄXLMAIER eine feste Größe – gestern, heute und morgen. Mit unseren Produkten für E-Mobilität und autonomes Fahren sind wir weltweit führend.',
                  size: 'text-body1'
                },
                icon: [
                  [
                    {
                      publicUrl:
                        'https:\/\/draexlmaier.loc\/fileadmin\/user_upload\/new_arrow.svg',
                      properties: {
                        title: null,
                        alternative: null,
                        description: null,
                        mimeType: 'image\/svg+xml',
                        type: 'image',
                        filename: 'new_arrow.svg',
                        originalUrl: 'fileadmin\/user_upload\/new_arrow.svg',
                        uidLocal: 21322,
                        fileReferenceUid: 63197,
                        size: '287 B',
                        link: null,
                        dimensions: { width: 40, height: 40 },
                        cropDimensions: { width: 40, height: 40 },
                        crop: {
                          desktop: {
                            cropArea: { x: 0, y: 0, width: 1, height: 1 },
                            selectedRatio: '1:1',
                            focusArea: null
                          }
                        },
                        autoplay: 0,
                        extension: 'svg'
                      },
                      cdn: {
                        publicUrl: '\/user_upload\/new_arrow.svg',
                        publicPath: '\/user_upload\/new_arrow.svg'
                      },
                      useCase: 'default',
                      ratio: null
                    }
                  ]
                ],
                actions: [
                  {
                    id: 5,
                    pid: 9089,
                    type: 'a_01_01__action',
                    content: {
                      text: 'Warum DRÄXLMAIER',
                      link: {
                        type: 'page',
                        url: '\/',
                        target: ' target="_top"',
                        title: '',
                        class: ''
                      },
                      icon: null
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }
  }
}
</script>
