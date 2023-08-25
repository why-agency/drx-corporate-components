<template>
  <div>
    <o-09-01-JobMarket v-if="jobsData" :data="jobsData" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import O0901JobMarket from '../components/organisms/o-09-01-job-market/index.ce.vue'

const jobMarketUrl = 'https://review.job.draexlmaier.com/jobs.json/'
const jobsData = ref(null)

const placeHolderImage = [
  [
    {
      publicUrl:
        'https://review.draexlmaier.com/fileadmin/user_upload/01_interieur_slider01.jpg',
      properties: {
        title: null,
        alternative: null,
        description: null,
        mimeType: 'image/jpeg',
        type: 'image',
        filename: '01_interieur_slider01.jpg',
        originalUrl: 'fileadmin/user_upload/01_interieur_slider01.jpg',
        uidLocal: 21650,
        fileReferenceUid: 66887,
        size: '735 KB',
        link: null,
        dimensions: {
          width: 1586,
          height: 830
        },
        cropDimensions: {
          width: 1586,
          height: 830
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
          'https://ik.imagekit.io/v2bbhazxb/rev/user_upload/01_interieur_slider01.jpg',
        publicPath: '/user_upload/01_interieur_slider01.jpg'
      },
      useCase: 'default',
      ratio: null
    },
    {
      publicUrl:
        'https://review.draexlmaier.com/fileadmin/user_upload/01_interieur_slider01.jpg',
      properties: {
        title: null,
        alternative: null,
        description: null,
        mimeType: 'image/jpeg',
        type: 'image',
        filename: '01_interieur_slider01.jpg',
        originalUrl: 'fileadmin/user_upload/01_interieur_slider01.jpg',
        uidLocal: 21650,
        fileReferenceUid: 66887,
        size: '735 KB',
        link: null,
        dimensions: {
          width: 1586,
          height: 830
        },
        cropDimensions: {
          width: 1586,
          height: 830
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
          'https://ik.imagekit.io/v2bbhazxb/rev/user_upload/01_interieur_slider01.jpg',
        publicPath: '/user_upload/01_interieur_slider01.jpg'
      },
      useCase: 'full',
      ratio: null
    },
    {
      publicUrl:
        'https://review.draexlmaier.com/fileadmin/user_upload/01_interieur_slider01.jpg',
      properties: {
        title: null,
        alternative: null,
        description: null,
        mimeType: 'image/jpeg',
        type: 'image',
        filename: '01_interieur_slider01.jpg',
        originalUrl: 'fileadmin/user_upload/01_interieur_slider01.jpg',
        uidLocal: 21650,
        fileReferenceUid: 66887,
        size: '735 KB',
        link: null,
        dimensions: {
          width: 1586,
          height: 830
        },
        cropDimensions: {
          width: 1586,
          height: 830
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
          'https://ik.imagekit.io/v2bbhazxb/rev/user_upload/01_interieur_slider01.jpg',
        publicPath: '/user_upload/01_interieur_slider01.jpg'
      },
      useCase: 'mobile',
      ratio: null
    }
  ]
]

onMounted(async () => {
  fetch(jobMarketUrl)
    .then(response => response.json())
    .then(
      data =>
        (jobsData.value = {
          ...data,
          image01: placeHolderImage,
          header: 'Reshape the way cars are built',
          label_search_input_placeholder: 'Find your dream job',
          label_jobs_count: 'Jobs',
          label_collapsed_filter_bar: 'Choose Filter',
          label_show_results_button: 'Ergebnisse anzeigen',
          label_return_to_filters: 'Back to filters',
          label_job_id: 'Job ID',
          label_location: 'Standort',
          label_business_area: 'Funktionsbereich',
          label_job_type: 'Anstellungsart',
          label_apply_button: 'Apply now',
          label_print_button: 'Print',
          label_clear_all_filters: 'Clear all filters'
        })
    )
})
</script>
