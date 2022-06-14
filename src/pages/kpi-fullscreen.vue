<template>
  <div><o-06-07-kpi-fullscreen :data="kpi" /></div>
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
          background: 'dark',
          gradient: 'light',
          media: {
            type: 'image',
            image: [
              [
                {
                  publicUrl:
                    'https:\/\/draexlmaier.loc\/fileadmin\/user_upload\/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image\/jpeg',
                    type: 'image',
                    filename:
                      'Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg',
                    originalUrl:
                      'fileadmin\/user_upload\/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg',
                    uidLocal: 21323,
                    fileReferenceUid: 63201,
                    size: '195 KB',
                    link: null,
                    dimensions: { width: 1920, height: 1080 },
                    cropDimensions: { width: 1920, height: 1080 },
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
                      'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/user_upload\/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg',
                    publicPath:
                      '\/user_upload\/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg'
                  },
                  useCase: 'default',
                  ratio: null
                },
                {
                  publicUrl:
                    'https:\/\/draexlmaier.loc\/fileadmin\/user_upload\/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image\/jpeg',
                    type: 'image',
                    filename:
                      'Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg',
                    originalUrl:
                      'fileadmin\/user_upload\/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg',
                    uidLocal: 21323,
                    fileReferenceUid: 63201,
                    size: '195 KB',
                    link: null,
                    dimensions: { width: 1920, height: 1080 },
                    cropDimensions: { width: 1920, height: 1080 },
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
                      'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/user_upload\/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg',
                    publicPath:
                      '\/user_upload\/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg'
                  },
                  useCase: 'full',
                  ratio: null
                },
                {
                  publicUrl:
                    'https:\/\/draexlmaier.loc\/fileadmin\/user_upload\/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg',
                  properties: {
                    title: null,
                    alternative: null,
                    description: null,
                    mimeType: 'image\/jpeg',
                    type: 'image',
                    filename:
                      'Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg',
                    originalUrl:
                      'fileadmin\/user_upload\/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg',
                    uidLocal: 21323,
                    fileReferenceUid: 63201,
                    size: '195 KB',
                    link: null,
                    dimensions: { width: 1920, height: 1080 },
                    cropDimensions: { width: 1920, height: 1080 },
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
                      'https:\/\/ik.imagekit.io\/v2bbhazxb\/dev\/user_upload\/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg',
                    publicPath:
                      '\/user_upload\/Marmotamaps_Wallpaper_Inntal_Desktop_1920x1080.jpeg'
                  },
                  useCase: 'mobile',
                  ratio: null
                }
              ]
            ],
            video_stream: [
              {
                id: 3,
                pid: 9093,
                type: 'videos_stream',
                properties: {
                  videoservice: 'youtube',
                  video_id: 'ScMzIvxBSi4',
                  video_title: 'The video title',
                  video_poster_image: null,
                  video_start: null,
                  video_end: null,
                  video_duration: ''
                }
              }
            ]
          },
          quote:{text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."},
          header: { text: 'KPI + Quote + Video', tag: 'h2' },
          kpicards: [
            {
              id: 1,
              pid: 9093,
              type: 'kpicard',
              content: {
                name: 'KPI 1',
                value: '3939',
                unit: 'kg',
                description: 'sdsffsf'
              }
            },
            {
              id: 2,
              pid: 9093,
              type: 'kpicard',
              content: {
                name: 'KPI 2',
                value: '3333',
                unit: 'm2',
                description: 'asdadd'
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
