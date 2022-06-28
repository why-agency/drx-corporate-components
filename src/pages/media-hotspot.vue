<template>
  <o-06-09-media-hotspot :data="hotspot1"/>
</template>

<script>
import O0609MediaHotspot from '../components/organisms/o-06-09-media-hotspot/index.ce.vue'
export default {
  components: { O0609MediaHotspot },
  data() {
    return {
      hotspot1: {
        content: {
          header: {
            text: 'Die innovativsten Automarken der Welt vertrauen auf unsere L\u00f6sungen.',
            size: 1,
            color: 'light',
            tag: 'h1',
            fontWeight: 'font-normal'
          },
          text: {
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.\u003Cbr \/\u003E\rCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
            size: 'text-body1'
          },
          media: {
            image: [
              [
                {
                  publicUrl:
                    'https://draexlmaier.loc/fileadmin/user_upload/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image\/jpeg',
                    type: 'image',
                    filename:
                      'Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg',
                    originalUrl:
                      'fileadmin/user_upload/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg',
                    uidLocal: 21322,
                    fileReferenceUid: 63236,
                    size: '195 KB',
                    link: null,
                    dimensions: { width: 1920, height: 1080 },
                    cropDimensions: { width: 1920, height: 1080 },
                    crop: {
                      crop_16_9: {
                        cropArea: { x: 0, y: 0, width: 1, height: 1 },
                        selectedRatio: '16:9',
                        focusArea: null
                      }
                    },
                    autoplay: null,
                    extension: 'jpeg'
                  },
                  cdn: {
                    publicUrl:
                      '',
                    publicPath:
                      '/user_upload/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg'
                  },
                  useCase: 'default',
                  ratio: '16:9'
                }
              ]
            ],
            videos_stream: []
          },
          actions: [
            {
              id: 16,
              pid: 9102,
              type: 'a_01_01__action',
              content: {
                text: 'Warum DRX?',
                link: {
                  type: 'page',
                  url: '\/refresh-2022\/o-06-09-media-hotspot',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: null,
                color: 'secondary'
              }
            }
          ],
          hotspots: [
            {
              id: 1,
              pid: 9102,
              type: 'hotspot',
              content: {
                headline: {
                  text: 'Licht',
                  size: 3,
                  color: 'light',
                  tag: 'h3',
                  fontWeight: 'font-normal'
                },
                text: {
                  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus muss. asdsada',
                  size: 'text-body1'
                },
                coordinates: '24.9;44.0',
                actions: [
                  {
                    id: 17,
                    pid: 9102,
                    type: 'a_01_01__action',
                    content: {
                      text: 'Mehr Licht',
                      link: {
                        type: 'page',
                        url: '\/refresh-2022\/o-06-09-media-hotspot',
                        target: ' target="_top"',
                        title: '',
                        class: ''
                      },
                      icon: null,
                      color: 'secondary'
                    }
                  }
                ],
                icon: [
                  [
                    {
                      publicUrl:
                        'https:\/\/draexlmaier.loc\/fileadmin\/idea.svg',
                      properties: {
                        title: null,
                        alternative: null,
                        description: null,
                        mimeType: 'image\/svg+xml',
                        type: 'image',
                        filename: 'idea.svg',
                        originalUrl: 'fileadmin\/idea.svg',
                        uidLocal: 21327,
                        fileReferenceUid: 63237,
                        size: '1 KB',
                        link: null,
                        dimensions: { width: 24, height: 24 },
                        cropDimensions: { width: 24, height: 24 },
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
                          '',
                        publicPath: '\/idea.svg'
                      },
                      useCase: 'default',
                      ratio: '1:1'
                    }
                  ]
                ]
              }
            },
            {
              id: 2,
              pid: 9102,
              type: 'hotspot',
              content: {
                headline: {
                  text: 'Konnektivit\u00e4t',
                  size: 3,
                  color: 'light',
                  tag:'h3',
                  fontWeight: 'font-normal'
                },
                text: {
                  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
                  size: 'text-body1'
                },
                coordinates: '74.3;60.9',
                actions: [
                  {
                    id: 18,
                    pid: 9102,
                    type: 'a_01_01__action',
                    content: {
                      text: 'Noch mehr Konnektivit\u00e4t',
                      link: {
                        type: 'page',
                        url: '\/refresh-2022\/o-06-09-media-hotspot',
                        target: ' target="_top"',
                        title: '',
                        class: ''
                      },
                      icon: null,
                      color: 'secondary'
                    }
                  }
                ],
                icon: [
                  [
                    {
                      publicUrl:
                        'https:\/\/draexlmaier.loc\/fileadmin\/leaf.svg',
                      properties: {
                        title: null,
                        alternative: null,
                        description: null,
                        mimeType: 'image\/svg+xml',
                        type: 'image',
                        filename: 'leaf.svg',
                        originalUrl: 'fileadmin\/leaf.svg',
                        uidLocal: 21328,
                        fileReferenceUid: 63235,
                        size: '790 B',
                        link: null,
                        dimensions: { width: 24, height: 24 },
                        cropDimensions: { width: 24, height: 24 },
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
                          '',
                        publicPath: '\/leaf.svg'
                      },
                      useCase: 'default',
                      ratio: '1:1'
                    }
                  ]
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