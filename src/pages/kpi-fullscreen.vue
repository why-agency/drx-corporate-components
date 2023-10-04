<template>
  <o-06-07-kpi-fullscreen :data="kpi" class="mb-64" />
  <o-06-07-kpi-fullscreen :data="kpi2" class="mb-32" />
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import O0607KpiFullscreen from '../components/organisms/o-06-07-kpi-fullscreen/index.ce.vue'
</script>

<script>
export default {
  components: { O0607KpiFullscreen },
  data() {
    return {
      kpi: {
        id: 78358,
        pid: 9093,
        type: 'o_06_07__kpi_fullscreen',
        tagname: 'o-06-07-kpi-fullscreen',
        appearance: {
          layout: 'default',
          frameClass: 'default',
          spaceBefore: '',
          spaceAfter: ''
        },
        content: {
          background: 'gradient',
          gradient: 'dark',
          media: {
            type: 'image',
            image: [
              [
                {
                  publicUrl:
                    'https:\/\/development.draexlmaier.com\/fileadmin\/user_upload\/2__1_.jpeg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image\/jpeg',
                    type: 'image',
                    filename: '2__1_.jpeg',
                    originalUrl: 'fileadmin\/user_upload\/2__1_.jpeg',
                    uidLocal: 20155,
                    fileReferenceUid: 63193,
                    size: '113 KB',
                    link: null,
                    dimensions: { width: 1280, height: 720 },
                    cropDimensions: { width: 1280, height: 720 },
                    crop: {
                      desktop: {
                        cropArea: { x: 0.3125, y: 0, width: 0.375, height: 1 },
                        selectedRatio: '2:3',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpeg'
                  },
                  cdn: {
                    publicUrl:
                      'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/user_upload\/2__1_.jpeg',
                    publicPath: '\/user_upload\/2__1_.jpeg'
                  },
                  useCase: 'default',
                  ratio: null
                },
                {
                  publicUrl:
                    'https:\/\/development.draexlmaier.com\/fileadmin\/user_upload\/2__1_.jpeg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image\/jpeg',
                    type: 'image',
                    filename: '2__1_.jpeg',
                    originalUrl: 'fileadmin\/user_upload\/2__1_.jpeg',
                    uidLocal: 20155,
                    fileReferenceUid: 63193,
                    size: '113 KB',
                    link: null,
                    dimensions: { width: 1280, height: 720 },
                    cropDimensions: { width: 1280, height: 720 },
                    crop: {
                      desktop: {
                        cropArea: { x: 0.3125, y: 0, width: 0.375, height: 1 },
                        selectedRatio: '2:3',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpeg'
                  },
                  cdn: {
                    publicUrl:
                      'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/user_upload\/2__1_.jpeg',
                    publicPath: '\/user_upload\/2__1_.jpeg'
                  },
                  useCase: 'full',
                  ratio: null
                },
                {
                  publicUrl:
                    'https:\/\/development.draexlmaier.com\/fileadmin\/user_upload\/2__1_.jpeg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image\/jpeg',
                    type: 'image',
                    filename: '2__1_.jpeg',
                    originalUrl: 'fileadmin\/user_upload\/2__1_.jpeg',
                    uidLocal: 20155,
                    fileReferenceUid: 63193,
                    size: '113 KB',
                    link: null,
                    dimensions: { width: 1280, height: 720 },
                    cropDimensions: { width: 1280, height: 720 },
                    crop: {
                      desktop: {
                        cropArea: { x: 0.3125, y: 0, width: 0.375, height: 1 },
                        selectedRatio: '2:3',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpeg'
                  },
                  cdn: {
                    publicUrl:
                      'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/user_upload\/2__1_.jpeg',
                    publicPath: '\/user_upload\/2__1_.jpeg'
                  },
                  useCase: 'mobile',
                  ratio: null
                }
              ]
            ],
            video_stream: []
          },
          quote: {
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
          },
          header: { text: 'KPI +Quote+Video+Overlay', tag: 'h2' },
          kpicards: null,
          overlays: [
            {
              id: 1,
              pid: 8678,
              type: 'overlay_multipurpose',
              content: {
                variant: 'image',
                media: {
                  image: [
                    [
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                        properties: {
                          title: null,
                          alternative: null,
                          description: null,
                          mimeType: 'image\/jpeg',
                          type: 'image',
                          filename:
                            '2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          originalUrl:
                            'fileadmin\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          uidLocal: 4636,
                          fileReferenceUid: 61493,
                          size: '12 MB',
                          link: null,
                          dimensions: { width: 5616, height: 3744 },
                          cropDimensions: { width: 5616, height: 3744 },
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
                          publicUrl:
                            'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          publicPath:
                            '\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg'
                        },
                        useCase: 'default',
                        ratio: null
                      },
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                        properties: {
                          title: null,
                          alternative: null,
                          description: null,
                          mimeType: 'image\/jpeg',
                          type: 'image',
                          filename:
                            '2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          originalUrl:
                            'fileadmin\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          uidLocal: 4636,
                          fileReferenceUid: 61493,
                          size: '12 MB',
                          link: null,
                          dimensions: { width: 5616, height: 3744 },
                          cropDimensions: { width: 5616, height: 3744 },
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
                          publicUrl:
                            'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          publicPath:
                            '\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg'
                        },
                        useCase: 'full',
                        ratio: null
                      },
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                        properties: {
                          title: null,
                          alternative: null,
                          description: null,
                          mimeType: 'image\/jpeg',
                          type: 'image',
                          filename:
                            '2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          originalUrl:
                            'fileadmin\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          uidLocal: 4636,
                          fileReferenceUid: 61493,
                          size: '12 MB',
                          link: null,
                          dimensions: { width: 5616, height: 3744 },
                          cropDimensions: { width: 5616, height: 3744 },
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
                          publicUrl:
                            'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          publicPath:
                            '\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg'
                        },
                        useCase: 'mobile',
                        ratio: null
                      }
                    ]
                  ],
                  video: null,
                  video_stream: []
                },
                header: { text: 'overlay header', tag: 'h1' },
                subheadline: { text: 'This is the overlay subheadline' },
                actions: [],
                additionaltext: {
                  before:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non.',
                  after:
                    'Cursus eget nunc scelerisque viverra mauris in aliquam sem.',
                  image: [
                    [
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                        properties: {
                          title: null,
                          alternative: null,
                          description: null,
                          mimeType: 'image\/jpeg',
                          type: 'image',
                          filename:
                            '2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          originalUrl:
                            'fileadmin\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          uidLocal: 4638,
                          fileReferenceUid: 61494,
                          size: '13 MB',
                          link: null,
                          dimensions: { width: 5616, height: 3744 },
                          cropDimensions: { width: 5616, height: 3744 },
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
                          publicUrl:
                            'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          publicPath:
                            '\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg'
                        },
                        useCase: 'default',
                        ratio: null
                      },
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                        properties: {
                          title: null,
                          alternative: null,
                          description: null,
                          mimeType: 'image\/jpeg',
                          type: 'image',
                          filename:
                            '2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          originalUrl:
                            'fileadmin\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          uidLocal: 4638,
                          fileReferenceUid: 61494,
                          size: '13 MB',
                          link: null,
                          dimensions: { width: 5616, height: 3744 },
                          cropDimensions: { width: 5616, height: 3744 },
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
                          publicUrl:
                            'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          publicPath:
                            '\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg'
                        },
                        useCase: 'full',
                        ratio: null
                      },
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                        properties: {
                          title: null,
                          alternative: null,
                          description: null,
                          mimeType: 'image\/jpeg',
                          type: 'image',
                          filename:
                            '2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          originalUrl:
                            'fileadmin\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          uidLocal: 4638,
                          fileReferenceUid: 61494,
                          size: '13 MB',
                          link: null,
                          dimensions: { width: 5616, height: 3744 },
                          cropDimensions: { width: 5616, height: 3744 },
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
                          publicUrl:
                            'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          publicPath:
                            '\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg'
                        },
                        useCase: 'mobile',
                        ratio: null
                      }
                    ]
                  ]
                }
              }
            }
          ]
        }
      },
      kpi2: {
        id: 78358,
        pid: 9093,
        type: 'o_06_07__kpi_fullscreen',
        tagname: 'o-06-07-kpi-fullscreen',
        appearance: {
          layout: 'default',
          frameClass: 'default',
          spaceBefore: '',
          spaceAfter: ''
        },
        content: {
          background: 'dark',
          gradient: 'dark',
          media: {
            type: 'image',
            image: '',
            video_stream: []
          },
          quote: {
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
          },
          header: { text: 'KPI +Quote+Video+Overlay', tag: 'h2' },
          kpicards: null,
          overlays: [
            {
              id: 1,
              pid: 8678,
              type: 'overlay_multipurpose',
              content: {
                variant: 'image',
                media: {
                  image: [
                    [
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                        properties: {
                          title: null,
                          alternative: null,
                          description: null,
                          mimeType: 'image\/jpeg',
                          type: 'image',
                          filename:
                            '2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          originalUrl:
                            'fileadmin\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          uidLocal: 4636,
                          fileReferenceUid: 61493,
                          size: '12 MB',
                          link: null,
                          dimensions: { width: 5616, height: 3744 },
                          cropDimensions: { width: 5616, height: 3744 },
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
                          publicUrl:
                            'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          publicPath:
                            '\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg'
                        },
                        useCase: 'default',
                        ratio: null
                      },
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                        properties: {
                          title: null,
                          alternative: null,
                          description: null,
                          mimeType: 'image\/jpeg',
                          type: 'image',
                          filename:
                            '2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          originalUrl:
                            'fileadmin\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          uidLocal: 4636,
                          fileReferenceUid: 61493,
                          size: '12 MB',
                          link: null,
                          dimensions: { width: 5616, height: 3744 },
                          cropDimensions: { width: 5616, height: 3744 },
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
                          publicUrl:
                            'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          publicPath:
                            '\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg'
                        },
                        useCase: 'full',
                        ratio: null
                      },
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                        properties: {
                          title: null,
                          alternative: null,
                          description: null,
                          mimeType: 'image\/jpeg',
                          type: 'image',
                          filename:
                            '2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          originalUrl:
                            'fileadmin\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          uidLocal: 4636,
                          fileReferenceUid: 61493,
                          size: '12 MB',
                          link: null,
                          dimensions: { width: 5616, height: 3744 },
                          cropDimensions: { width: 5616, height: 3744 },
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
                          publicUrl:
                            'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                          publicPath:
                            '\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg'
                        },
                        useCase: 'mobile',
                        ratio: null
                      }
                    ]
                  ],
                  video: null,
                  video_stream: []
                },
                header: { text: 'overlay header', tag: 'h1' },
                subheadline: { text: 'This is the overlay subheadline' },
                actions: [],
                additionaltext: {
                  before:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non.',
                  after:
                    'Cursus eget nunc scelerisque viverra mauris in aliquam sem.',
                  image: [
                    [
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                        properties: {
                          title: null,
                          alternative: null,
                          description: null,
                          mimeType: 'image\/jpeg',
                          type: 'image',
                          filename:
                            '2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          originalUrl:
                            'fileadmin\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          uidLocal: 4638,
                          fileReferenceUid: 61494,
                          size: '13 MB',
                          link: null,
                          dimensions: { width: 5616, height: 3744 },
                          cropDimensions: { width: 5616, height: 3744 },
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
                          publicUrl:
                            'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          publicPath:
                            '\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg'
                        },
                        useCase: 'default',
                        ratio: null
                      },
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                        properties: {
                          title: null,
                          alternative: null,
                          description: null,
                          mimeType: 'image\/jpeg',
                          type: 'image',
                          filename:
                            '2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          originalUrl:
                            'fileadmin\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          uidLocal: 4638,
                          fileReferenceUid: 61494,
                          size: '13 MB',
                          link: null,
                          dimensions: { width: 5616, height: 3744 },
                          cropDimensions: { width: 5616, height: 3744 },
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
                          publicUrl:
                            'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          publicPath:
                            '\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg'
                        },
                        useCase: 'full',
                        ratio: null
                      },
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                        properties: {
                          title: null,
                          alternative: null,
                          description: null,
                          mimeType: 'image\/jpeg',
                          type: 'image',
                          filename:
                            '2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          originalUrl:
                            'fileadmin\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          uidLocal: 4638,
                          fileReferenceUid: 61494,
                          size: '13 MB',
                          link: null,
                          dimensions: { width: 5616, height: 3744 },
                          cropDimensions: { width: 5616, height: 3744 },
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
                          publicUrl:
                            'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg',
                          publicPath:
                            '\/Group\/Carreers\/Apprentice\/2012-04-24_Fotoshooting_Gasparini_Ausbildung__176_.jpg'
                        },
                        useCase: 'mobile',
                        ratio: null
                      }
                    ]
                  ]
                }
              }
            }
          ]
        }
      }
    }
  }
}
</script>
