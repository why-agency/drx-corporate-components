<template>
  <o-06-07-kpi-fullscreen :data="kpi" class="mb-64" />
  <o-06-07-kpi-fullscreen :data="kpi2" class="mb-32" />
  <o-06-07-kpi-fullscreen :data="kpi3" />
  <o-06-07-kpi-fullscreen :data="kpi4" />
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
      kpi4: {
        id: 74211,
        pid: 8678,
        type: 'o_06_07__kpi_fullscreen',
        tagname: 'o-06-07-kpi-fullscreen',
        appearance: {
          layout: 'default',
          frameClass: 'default',
          spaceBefore: '',
          spaceAfter: ''
        },
        content: {
          background: 'none',
          gradient: 'dark',
          media: {
            type: 'image',
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
                    filename: '2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                    originalUrl:
                      'fileadmin\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                    uidLocal: 4636,
                    fileReferenceUid: 61501,
                    size: '12 MB',
                    link: null,
                    dimensions: { width: 5616, height: 3744 },
                    cropDimensions: { width: 5616, height: 3744 },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0.2777777777777778,
                          y: 0,
                          width: 0.4444444444444444,
                          height: 1
                        },
                        selectedRatio: '2:3',
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
                    filename: '2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                    originalUrl:
                      'fileadmin\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                    uidLocal: 4636,
                    fileReferenceUid: 61501,
                    size: '12 MB',
                    link: null,
                    dimensions: { width: 5616, height: 3744 },
                    cropDimensions: { width: 5616, height: 3744 },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0.2777777777777778,
                          y: 0,
                          width: 0.4444444444444444,
                          height: 1
                        },
                        selectedRatio: '2:3',
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
                    filename: '2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                    originalUrl:
                      'fileadmin\/Group\/Carreers\/Apprentice\/2011-06-27_Fotoshooting_Gasparini__116_.jpg',
                    uidLocal: 4636,
                    fileReferenceUid: 61501,
                    size: '12 MB',
                    link: null,
                    dimensions: { width: 5616, height: 3744 },
                    cropDimensions: { width: 5616, height: 3744 },
                    crop: {
                      desktop: {
                        cropArea: {
                          x: 0.2777777777777778,
                          y: 0,
                          width: 0.4444444444444444,
                          height: 1
                        },
                        selectedRatio: '2:3',
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
            video_stream: []
          },
          quote: { text: '' },
          header: { text: 'KPI WITH OVERLAY', tag: 'h1' },
          kpicards: [
            {
              id: 3,
              pid: 8678,
              type: 'kpicard',
              content: { name: 'kpi 1', value: '', unit: '', description: '' }
            }
          ],
          overlays: [
            {
              id: 5,
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
                          fileReferenceUid: 61505,
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
                          fileReferenceUid: 61505,
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
                          fileReferenceUid: 61505,
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
                header: { text: 'this is a header', tag: 'h1' },
                subheadline: { text: 'sub headline' },
                actions: [
                  {
                    id: 6,
                    pid: 8678,
                    type: 'a_01_01__action',
                    content: {
                      text: 'News',
                      link: {
                        type: 'page',
                        url: '\/news',
                        target: ' target="_top"',
                        title: '',
                        class: ''
                      },
                      icon: null,
                      color: ''
                    }
                  }
                ],
                additionaltext: {
                  before: '\u003Cp\u003Etext before\u003C\/p\u003E',
                  after: '\u003Cp\u003Etex tafter\u003C\/p\u003E',
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
                          fileReferenceUid: 61506,
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
                          fileReferenceUid: 61506,
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
                          fileReferenceUid: 61506,
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
          kpicards: [
            {
              id: 1,
              pid: 9093,
              type: 'kpicard',
              content: {
                name: 'Durchschnittliche Kundenbeziehung',
                value: '3939',
                unit: 'kg',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore m'
              }
            },
            {
              id: 2,
              pid: 9093,
              type: 'kpicard',
              content: {
                name: 'Weltneuheiten mit DRÄXLMAIER Produktenasdasd',
                value: '9453',
                unit: 'm2',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore m'
              }
            },
            {
              id: 3,
              pid: 9093,
              type: 'kpicard',
              content: {
                name: 'Definierte Patente',
                value: '9366',
                unit: 'm2',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore m'
              }
            }
          ],
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
          background: 'gradient',
          gradient: 'dark',
          media: {
            type: 'image',
            image: null,
            video_stream: []
          },
          quote: {
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
          },
          header: { text: 'KPI + Quote + Video', tag: 'h2' },
          kpicards: [
            {
              id: 1,
              pid: 9093,
              type: 'kpicard',
              content: {
                name: 'Durchschnittliche Kundenbeziehung',
                value: '3939',
                unit: 'kg',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore m'
              }
            },
            {
              id: 2,
              pid: 9093,
              type: 'kpicard',
              content: {
                name: 'Weltneuheiten mit DRÄXLMAIER Produktenasdasd',
                value: '9453',
                unit: 'm2',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore m'
              }
            },
            {
              id: 3,
              pid: 9093,
              type: 'kpicard',
              content: {
                name: 'Weltneuheiten mit DRÄXLMAIER Produktenasdasd',
                value: '9693',
                unit: 'm2',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore m'
              }
            }
          ],
          overlays: [
            {
              id: 1,
              pid: 8678,
              type: 'overlay_multipurpose',
              content: {
                variant: 'video-upload',
                media: {
                  image: null,
                  video: [
                    [
                      {
                        publicUrl:
                          'https:\/\/draexlmaier.loc\/fileadmin\/Videos\/DRX_productvideo_v2.mp4',
                        properties: {
                          uidLocal: 61495,
                          type: 'video',
                          ext: 'mp4',
                          identifier: '\/Videos\/DRX_productvideo_v2.mp4',
                          url: 'fileadmin\/Videos\/DRX_productvideo_v2.mp4'
                        },
                        cdn: {
                          publicUrl:
                            'fileadmin\/Videos\/DRX_productvideo_v2.mp4',
                          publicPath: '\/Videos\/DRX_productvideo_v2.mp4',
                          note: 'For this mime type CDN is not relevant!'
                        }
                      }
                    ]
                  ],
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
      kpi3: {
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
          background: 'light',
          gradient: 'dark',
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
          //  media: {
          //     type: 'video-stream',
          //     video_stream: [
          //       {
          //         id: 63205,
          //         pid: 0,
          //         type: 'videos_stream',
          //         properties: {
          //           videoservice: 'vimeo',
          //           video_id: '254069548',
          //           video_title:
          //             'Pause 2018 Motion Response - Lift in the moment by Carbon',
          //           video_poster_image: null,
          //           video_start: null,
          //           video_end: null,
          //           video_duration: ''
          //         }
          //       }
          //     ]
          //   },
          quote: {
            text: ''
          },
          header: { text: '', tag: 'h2' },
          kpicards: [
            {
              id: 1,
              pid: 9093,
              type: 'kpicard',
              content: {
                name: 'Durchschnittliche Kundenbeziehung',
                value: '3939',
                unit: 'kg',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore m'
              }
            },
            {
              id: 2,
              pid: 9093,
              type: 'kpicard',
              content: {
                name: 'Weltneuheiten mit DRÄXLMAIER Produktenasdasd',
                value: '9453',
                unit: 'm2',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore m'
              }
            },
            {
              id: 3,
              pid: 9093,
              type: 'kpicard',
              content: {
                name: 'Definierte Patente',
                value: '9366',
                unit: 'm2',
                description:
                  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore m'
              }
            }
          ],
          overlays: [
            {
              id: 2,
              pid: 8678,
              type: 'overlay_multipurpose',
              content: {
                variant: 'video-stream',
                media: {
                  image: null,
                  video: null,
                  video_stream: [
                    {
                      id: 8,
                      pid: 8678,
                      type: 'videos_stream',
                      properties: {
                        videoservice: 'vimeo',
                        video_id: '254069548',
                        video_title: 'vim',
                        video_poster_image: null,
                        video_start: null,
                        video_end: null,
                        video_duration: ''
                      }
                    }
                  ]
                },
                header: {
                  text: 'Overlay with stream',
                  tag: 'h1'
                },
                subheadline: {
                  text: 'This is a subheadline'
                },
                actions: [
                  {
                    id: 3,
                    pid: 8678,
                    type: 'a_01_01__action',
                    content: {
                      text: 'link 1',
                      link: {
                        type: 'page',
                        url: '\/overview-content-elements\/overlay-1',
                        target: ' target="_top"',
                        title: '',
                        class: ''
                      },
                      icon: null,
                      color: ''
                    }
                  },
                  {
                    id: 4,
                    pid: 8678,
                    type: 'a_01_01__action',
                    content: {
                      text: 'link 2',
                      link: {
                        type: 'page',
                        url: '\/news',
                        target: ' target="_top"',
                        title: '',
                        class: ''
                      },
                      icon: null,
                      color: ''
                    }
                  }
                ],
                additionaltext: {
                  before:
                    '\u003Cp\u003ELorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non.\u003C\/p\u003E',
                  after:
                    '\u003Cp\u003ECursus eget nunc scelerisque viverra mauris in aliquam sem.\u003C\/p\u003E',
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
                          fileReferenceUid: 61500,
                          size: '4 MB',
                          link: null,
                          dimensions: {
                            width: 3543,
                            height: 1417
                          },
                          cropDimensions: {
                            width: 3543,
                            height: 1417
                          },
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
                          fileReferenceUid: 61500,
                          size: '4 MB',
                          link: null,
                          dimensions: {
                            width: 3543,
                            height: 1417
                          },
                          cropDimensions: {
                            width: 3543,
                            height: 1417
                          },
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
                          fileReferenceUid: 61500,
                          size: '4 MB',
                          link: null,
                          dimensions: {
                            width: 3543,
                            height: 1417
                          },
                          cropDimensions: {
                            width: 3543,
                            height: 1417
                          },
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
