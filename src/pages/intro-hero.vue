<template>
  <section>
    <o-02-04-intro-hero :data="hero0" class="mb-64" />
  </section>
  <section>
    <o-02-04-intro-hero :data="hero1" class="mb-64" />
  </section>
  <section>
    <o-02-04-intro-hero :data="hero2" class="mb-64" />
  </section>
  <section>
    <o-02-04-intro-hero :data="hero3" class="mb-64" />
  </section>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import O0204IntroHero from '../components/organisms/o-02-04-intro-hero.ce.vue'
</script>

<script>
export default {
  data() {
    return {
      hero0: {
        content: {
          variant: 'default',
          background: 'gradient',
          header: {
            text: 'Familienunternehmen seit 1958',
            layout: '2',
            color: 'turquoise',
            tag: 'h1'
          },
          subheadline: 'Der Vorstand der DRÄXLMAIER Group',
          bodytext: {
            text: '',
            layout: '1'
          },
          media: [
            [
              {
                publicUrl:
                  'https:\/\/development.draexlmaier.com\/fileadmin\/user_upload\/28-06-2018_Puebla_Photoshoot__13_.jpg',
                properties: {
                  title: null,
                  alternative: null,
                  description: null,
                  mimeType: 'image\/jpeg',
                  type: 'image',
                  filename: '28-06-2018_Puebla_Photoshoot__13_.jpg',
                  originalUrl:
                    'fileadmin\/user_upload\/28-06-2018_Puebla_Photoshoot__13_.jpg',
                  uidLocal: 21042,
                  fileReferenceUid: 63181,
                  size: '6 MB',
                  link: null,
                  dimensions: { width: 4771, height: 3181 },
                  cropDimensions: { width: 4771, height: 3181 },
                  crop: {
                    desktop: {
                      cropArea: {
                        x: 0,
                        y: 0.07816920779629047,
                        width: 1,
                        height: 0.843661584407419
                      },
                      selectedRatio: '16:9',
                      focusArea: null
                    },
                    mobil: {
                      cropArea: {
                        x: 0.3124803500314399,
                        y: 0,
                        width: 0.3750392999371201,
                        height: 1
                      },
                      selectedRatio: '9:16',
                      focusArea: null
                    }
                  },
                  autoplay: null,
                  extension: 'jpg'
                },
                cdn: {
                  publicUrl:
                    'https:\/\/ik.imagekit.io\/v2bbhazxb\/user_upload\/28-06-2018_Puebla_Photoshoot__13_.jpg',
                  publicPath:
                    '\/user_upload\/28-06-2018_Puebla_Photoshoot__13_.jpg'
                },
                useCase: 'default',
                ratio: null
              },
              {
                publicUrl:
                  'https:\/\/development.draexlmaier.com\/fileadmin\/user_upload\/28-06-2018_Puebla_Photoshoot__13_.jpg',
                properties: {
                  title: null,
                  alternative: null,
                  description: null,
                  mimeType: 'image\/jpeg',
                  type: 'image',
                  filename: '28-06-2018_Puebla_Photoshoot__13_.jpg',
                  originalUrl:
                    'fileadmin\/user_upload\/28-06-2018_Puebla_Photoshoot__13_.jpg',
                  uidLocal: 21042,
                  fileReferenceUid: 63181,
                  size: '6 MB',
                  link: null,
                  dimensions: { width: 4771, height: 3181 },
                  cropDimensions: { width: 4771, height: 3181 },
                  crop: {
                    desktop: {
                      cropArea: {
                        x: 0,
                        y: 0.07816920779629047,
                        width: 1,
                        height: 0.843661584407419
                      },
                      selectedRatio: '16:9',
                      focusArea: null
                    },
                    mobil: {
                      cropArea: {
                        x: 0.3124803500314399,
                        y: 0,
                        width: 0.3750392999371201,
                        height: 1
                      },
                      selectedRatio: '9:16',
                      focusArea: null
                    }
                  },
                  autoplay: null,
                  extension: 'jpg'
                },
                cdn: {
                  publicUrl:
                    'https:\/\/ik.imagekit.io\/v2bbhazxb\/user_upload\/28-06-2018_Puebla_Photoshoot__13_.jpg',
                  publicPath:
                    '\/user_upload\/28-06-2018_Puebla_Photoshoot__13_.jpg'
                },
                useCase: 'full',
                ratio: null
              },
              {
                publicUrl:
                  'https:\/\/development.draexlmaier.com\/fileadmin\/user_upload\/28-06-2018_Puebla_Photoshoot__13_.jpg',
                properties: {
                  title: null,
                  alternative: null,
                  description: null,
                  mimeType: 'image\/jpeg',
                  type: 'image',
                  filename: '28-06-2018_Puebla_Photoshoot__13_.jpg',
                  originalUrl:
                    'fileadmin\/user_upload\/28-06-2018_Puebla_Photoshoot__13_.jpg',
                  uidLocal: 21042,
                  fileReferenceUid: 63181,
                  size: '6 MB',
                  link: null,
                  dimensions: { width: 4771, height: 3181 },
                  cropDimensions: { width: 4771, height: 3181 },
                  crop: {
                    desktop: {
                      cropArea: {
                        x: 0,
                        y: 0.07816920779629047,
                        width: 1,
                        height: 0.843661584407419
                      },
                      selectedRatio: '16:9',
                      focusArea: null
                    },
                    mobil: {
                      cropArea: {
                        x: 0.3124803500314399,
                        y: 0,
                        width: 0.3750392999371201,
                        height: 1
                      },
                      selectedRatio: '9:16',
                      focusArea: null
                    }
                  },
                  autoplay: null,
                  extension: 'jpg'
                },
                cdn: {
                  publicUrl:
                    'https:\/\/ik.imagekit.io\/v2bbhazxb\/user_upload\/28-06-2018_Puebla_Photoshoot__13_.jpg',
                  publicPath:
                    '\/user_upload\/28-06-2018_Puebla_Photoshoot__13_.jpg'
                },
                useCase: 'mobile',
                ratio: null
              }
            ]
          ],
          gradient: 'dark',
          actions: [
            {
              id: 7,
              pid: 9088,
              type: 'a_01_01__action',
              content: {
                text: 'test',
                link: {
                  type: 'page',
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: null,
                color: 'secondary'
              }
            },
            {
              id: 8,
              pid: 9088,
              type: 'a_01_01__action',
              content: {
                text: 'button',
                link: {
                  type: 'page',
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: null,
                color: 'secondary'
              }
            },
            {
              id: 9,
              pid: 9088,
              type: 'a_01_01__action',
              content: {
                text: 'Nachhaltigkeit',
                link: {
                  type: 'page',
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: null,
                color: 'white'
              }
            },
            {
              id: 9,
              pid: 9088,
              type: 'a_01_01__action',
              content: {
                text: 'I am Button Number 4',
                link: {
                  type: 'page',
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: null,
                color: 'white'
              }
            }
          ]
        }
      },
      hero1: {
        content: {
          variant: 'default',
          background: 'gradient',
          header: {
            text: 'Familienunternehmen seit 1958',
            layout: '1',
            color: 'turquoise',
            tag: 'h1'
          },
          subheadline: '',
          bodytext: {
            text: 'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdie.',
            layout: '1'
          },
          media: null,
          gradient: 'dark',
          actions: [
            {
              id: 7,
              pid: 9088,
              type: 'a_01_01__action',
              content: {
                text: 'test',
                link: {
                  type: 'page',
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: null,
                color: 'secondary'
              }
            }
          ]
        }
      },
      hero2: {
        content: {
          variant: 'headline_large',
          background: 'gradient',
          header: {
            text: 'Familienunternehmen seit 1958',
            layout: '1',
            color: 'turquoise',
            tag: 'h1'
          },
          subheadline: 'Der Vorstand der DRÄXLMAIER Group',
          bodytext: {
            text: 'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdie.',
            layout: '1'
          },
          media: [
            [
              {
                publicUrl:
                  'https:\/\/development.draexlmaier.com\/fileadmin\/user_upload\/Neues_Video.mp4',
                properties: {
                  uidLocal: 63453,
                  type: 'video',
                  ext: 'mp4',
                  identifier: '\/user_upload\/Neues_Video.mp4',
                  url: 'fileadmin\/user_upload\/Neues_Video.mp4'
                },
                cdn: {
                  publicUrl: 'fileadmin\/user_upload\/Neues_Video.mp4',
                  publicPath: '\/user_upload\/Neues_Video.mp4',
                  note: 'For this mime type CDN is not relevant!'
                }
              }
            ]
          ],
          gradient: 'dark',
          actions: [
            {
              id: 7,
              pid: 9088,
              type: 'a_01_01__action',
              content: {
                text: 'test',
                link: {
                  type: 'page',
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: null,
                color: 'secondary'
              }
            },
            {
              id: 8,
              pid: 9088,
              type: 'a_01_01__action',
              content: {
                text: 'button',
                link: {
                  type: 'page',
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: null,
                color: 'secondary'
              }
            },
            {
              id: 9,
              pid: 9088,
              type: 'a_01_01__action',
              content: {
                text: 'Nachhaltigkeit',
                link: {
                  type: 'page',
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: null,
                color: 'white'
              }
            },
            {
              id: 9,
              pid: 9088,
              type: 'a_01_01__action',
              content: {
                text: 'I am Button Number 4',
                link: {
                  type: 'page',
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: null,
                color: 'white'
              }
            }
          ]
        }
      },
      hero3: {
        content: {
          variant: 'default',
          background: 'gradient',
          header: {
            text: 'Automobile Zukunft – unser Auftrag, unsere Passion',
            layout: '1',
            color: 'turquoise',
            tag: 'h1'
          },
          subheadline: 'Vom Goggomobil bis zum autonomen Fahren',
          bodytext: {
            text: 'Trotz vieler Veränderungen ist das Entscheidende geblieben: unsere Unabhängigkeit, unsere Kundenorientierung, der Zusammenhalt unter unseren Mitarbeitenden, unsere Produkte und unsere Passion für Innovationen und die Gestaltung unserer Zukunft.',
            layout: '1'
          },
          media: [
            [
              {
                publicUrl:
                  'https:\/\/development.draexlmaier.com\/fileadmin\/user_upload\/Neues_Video.mp4',
                properties: {
                  uidLocal: 63453,
                  type: 'video',
                  ext: 'mp4',
                  identifier: '\/user_upload\/Neues_Video.mp4',
                  url: 'fileadmin\/user_upload\/Neues_Video.mp4'
                },
                cdn: {
                  publicUrl: 'fileadmin\/user_upload\/Neues_Video.mp4',
                  publicPath: '\/user_upload\/Neues_Video.mp4',
                  note: 'For this mime type CDN is not relevant!'
                }
              }
            ]
          ],
          gradient: 'dark',
          actions: [
            {
              id: 7,
              pid: 9088,
              type: 'a_01_01__action',
              content: {
                text: 'test',
                link: {
                  type: 'page',
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: null,
                color: 'secondary'
              }
            },
            {
              id: 8,
              pid: 9088,
              type: 'a_01_01__action',
              content: {
                text: 'button',
                link: {
                  type: 'page',
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: null,
                color: 'secondary'
              }
            },
            {
              id: 9,
              pid: 9088,
              type: 'a_01_01__action',
              content: {
                text: 'Nachhaltigkeit',
                link: {
                  type: 'page',
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: null,
                color: 'white'
              }
            },
            {
              id: 9,
              pid: 9088,
              type: 'a_01_01__action',
              content: {
                text: 'I am Button Number 4',
                link: {
                  type: 'page',
                  url: '\/karriere',
                  target: ' target="_top"',
                  title: '',
                  class: ''
                },
                icon: null,
                color: 'white'
              }
            }
          ]
        }
      }
    }
  }
}
</script>
