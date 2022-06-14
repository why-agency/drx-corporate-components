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
            type: 'video-stream',
            image: null,
            video_stream: [
              {
                id: 2,
                pid: 9093,
                type: 'videos_stream',
                properties: {
                  videoservice: 'youtube',
                  video_id: 'ScMzIvxBSi4&t=1s',
                  video_title: 'This is a video title',
                  video_poster_image: null,
                  video_start: null,
                  video_end: null,
                  video_duration: ''
                }
              }
            ]
          },
          header: { text: 'KPI + Quote + Image', tag: 'h2' },
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
