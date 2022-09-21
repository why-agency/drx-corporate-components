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
    <o-02-04-intro-hero :data="hero3" />
  </section>
  <section>
    <o-03-04-fullscreen-media-text :data="mediaImage" />
  </section>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import O0204IntroHero from '../components/organisms/o-02-04-intro-hero.ce.vue'
import O0304FullscreenMediaText from '../components/organisms/o-03-04-fullscreen-media-text.ce.vue'
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
            text:
              '',
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
            text:
              'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdie.',
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
            text:
              'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdie.',
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
            text:
              'Trotz vieler Veränderungen ist das Entscheidende geblieben: unsere Unabhängigkeit, unsere Kundenorientierung, der Zusammenhalt unter unseren Mitarbeitenden, unsere Produkte und unsere Passion für Innovationen und die Gestaltung unserer Zukunft.',
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
      mediaImage: {
        content: {
          header: { text: 'Outstanding Solutions through Synergy', size: 3 },
          bodytext:
            '<p>Es ist unser Antrieb, Premium-Fahrzeugen ästhetisch und technisch Charakter zu verleihen, damit unsere Kunden im Markt vorausfahren. Dafür denken wir bei DRÄXLMAIER in Systemen – über Produktgrenzen und Produktbereiche hinaus. Wir bündeln unsere Kompetenzen aus Interieur, Elektronik, Elektrik, Komponenten und Batteriesystemen, um neue Standards zu setzen. Wir verbinden das Gute und erschaffen dadurch das Beste. So entstehen Outstanding Solutions through Synergy. Mit dem Systemgedanken verbinden wir auch Menschen – Spezialisten von DRÄXLMAIER und unserer Kunden, um die besten Ideen für die Mobilität von morgen zu entwickeln. Schwerpunkte auf der IZB sind das Bordnetz der Zukunft, wo wir Komplexitätsgrenzen durchbrechen, das Interieur der Zukunft, insbesondere hinsichtlich Funktionsintegration, Licht und Nachhaltigkeit, die E-Mobilität, für die wir für unsere Kunden ein Komplettpaket haben, sowie die Nachhaltigkeit, die wir aktiv gestalten – etwa dank innovativer Oberflächen und Leichtbau<\/p>',
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
      }
    }
  }
}
</script>
