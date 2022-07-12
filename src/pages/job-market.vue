<template>
  <div>
    <o-09-01-JobMarket v-if="jobsData" :data="jobsData" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import O0901JobMarket from '../components/organisms/o-09-01-job-market/index.ce.vue'

const jobMarketUrl = 'https://development.draexlmaier.com/jobs.json/'
const jobsData = ref(null)

const placeHolderImage = [
  {
    publicUrl:
      'https://ik.imagekit.io/v2bbhazxb/dev/_processed_/9/a/csm_28-06-2018_Puebla_Photoshoot__13__fb6e90140c.jpg?tr=w-1536',
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
      'https://ik.imagekit.io/v2bbhazxb/dev/_processed_/9/a/csm_28-06-2018_Puebla_Photoshoot__13__fb6e90140c.jpg?tr=w-1536',
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

onMounted(async () => {
  fetch(jobMarketUrl)
    .then(response => response.json())
    .then(data => jobsData.value = { ...data, image: placeHolderImage, header: { text: 'Reshape the way cars are built' } })
})
</script>
