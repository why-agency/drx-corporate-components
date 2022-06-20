<template>
  <div><o-06-07-kpi-fullscreen :data="kpi" /></div>
  <div class="h-[1000px]">Text div for scrolling</div>
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
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore m'
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
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore m'
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
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore m'
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
