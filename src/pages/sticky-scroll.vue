<template>
  <section>
    <div class="bg-primary">
      <o-03-11-sticky-scroll :data="sticky1" />
    </div>
  </section>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import O0311StickyScroll from '../components/organisms/o-03-11-sticky-scroll.ce.vue'
</script>

<script>
export default {
  components: { O0311StickyScroll },
  data() {
    return {
      sticky1: {
        content: {
          box_background: 'yes',
          background: 'dark',
          header: {
            text: 'Starke Gr\u00fcnde warum wir matchen.',
            size: 2,
            color: 'sand',
            tag: 'h1',
            fontWeight: 'font-normal'
          },
          actions: [],
          scroll_items: [
            {
              id: 1,
              pid: 9089,
              type: 'scroll_item',
              content: {
                headline: 'Premiumprodukte',
                text: {
                  text: 'Wir beliefern weltweit Premium-Fahrzeughersteller mit komplexen Bordnetz-Systemen, zentralen Elektrik- und Elektronik-Komponenten, exklusivem Interieur sowie Batteriesystemen f\u00fcr die Elektromobilit\u00e4t. Die Kombination der Kernkompetenzen Interieur, Elektrik, Elektronik und Batteriesysteme macht DR\u00c4XLMAIER einzigartig in der Branche.',
                  size: '2'
                },
                icon: [
                  [
                    {
                      publicUrl:
                        'https:\/\/draexlmaier.loc\/fileadmin\/user_upload\/Vector_4__Stroke_.svg',
                      properties: {
                        title: null,
                        alternative: null,
                        description: null,
                        mimeType: 'image\/svg+xml',
                        type: 'image',
                        filename: 'Vector_4__Stroke_.svg',
                        originalUrl:
                          'fileadmin\/user_upload\/Vector_4__Stroke_.svg',
                        uidLocal: 21319,
                        fileReferenceUid: 63195,
                        size: '330 B',
                        link: null,
                        dimensions: { width: 12, height: 8 },
                        cropDimensions: { width: 12, height: 8 },
                        crop: {
                          desktop: {
                            cropArea: {
                              x: 0.16666666666666666,
                              y: 0,
                              width: 0.6666666666666666,
                              height: 1
                            },
                            selectedRatio: '1:1',
                            focusArea: null
                          }
                        },
                        autoplay: 0,
                        extension: 'svg'
                      },
                      cdn: {
                        publicUrl: '\/user_upload\/Vector_4__Stroke_.svg',
                        publicPath: '\/user_upload\/Vector_4__Stroke_.svg'
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
                      text: 'draexlmaier.com',
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
                  size: '2'
                },
                icon: [
                  [
                    {
                      publicUrl:
                        'https:\/\/draexlmaier.loc\/fileadmin\/user_upload\/Vector_4__Stroke_.svg',
                      properties: {
                        title: null,
                        alternative: null,
                        description: null,
                        mimeType: 'image\/svg+xml',
                        type: 'image',
                        filename: 'Vector_4__Stroke_.svg',
                        originalUrl:
                          'fileadmin\/user_upload\/Vector_4__Stroke_.svg',
                        uidLocal: 21319,
                        fileReferenceUid: 63196,
                        size: '330 B',
                        link: null,
                        dimensions: { width: 12, height: 8 },
                        cropDimensions: { width: 12, height: 8 },
                        crop: {
                          desktop: {
                            cropArea: {
                              x: 0.16666666666666666,
                              y: 0,
                              width: 0.6666666666666666,
                              height: 1
                            },
                            selectedRatio: '1:1',
                            focusArea: null
                          }
                        },
                        autoplay: 0,
                        extension: 'svg'
                      },
                      cdn: {
                        publicUrl: '\/user_upload\/Vector_4__Stroke_.svg',
                        publicPath: '\/user_upload\/Vector_4__Stroke_.svg'
                      },
                      useCase: 'default',
                      ratio: null
                    }
                  ]
                ],
                actions: []
              }
            }
          ]
        }
      }
    }
  }
}
</script>
