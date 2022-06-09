<template>
  <section>
    <div class="bg-gradient">
      <o-03-11-sticky-scroll :data="sticky1" />
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
      sticky1: {
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
