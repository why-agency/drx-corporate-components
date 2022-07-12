<template>
  <div>
    <!-- START job detail intro -->
    <div class="grid grid-cols-1 xl:grid-cols-[37rem,1fr]">
      <div>
        <div class="bg-primary pt-24 pb-12 px-6 text-white xl:min-h-[768px]">
          <div class="xl:w-[420px] xl:ml-auto xl:mr-10">
            <BaseHeadline
              :text="job.title"
              color="light"
              :size="3"
              tag="h1"
              font-weight="font-normal"
            />
            <div class="mt-12">
              <p>
                <span>Job ID:</span>
                <span class="ml-2 font-bold">{{ job.ID }}</span>
              </p>
              <p>
                <span>Location:</span>
                <span class="ml-2 font-bold">{{ job.location }}</span>
              </p>
              <p>
                <span>Department:</span>
                <span class="ml-2 font-bold">{{ job.department }}</span>
              </p>
            </div>

            <BaseAction :to="job.url" class="block mt-32">
              Apply now
              <template #icon>
                <IconArrowRight />
              </template>
            </BaseAction>
          </div>
        </div>
      </div>

      <div>
        <div>
          <picture>
            <source
              :src="'https://ik.imagekit.io/v2bbhazxb/DRX_Asset_wcRiu6wav.png?tr=w-375,f-auto,fo-auto'"
              media="(max-width: 375px)"
            />
            <source
              :src="'https://ik.imagekit.io/v2bbhazxb/DRX_Asset_wcRiu6wav.png?tr=w-640,h-320,f-auto,fo-auto'"
              media="(max-width: 640px)"
            />
            <source
              :src="'https://ik.imagekit.io/v2bbhazxb/DRX_Asset_wcRiu6wav.png?tr=w-1024,h-400,f-auto,fo-auto'"
              media="(max-width: 1024px)"
            />
            <source
              :src="'https://ik.imagekit.io/v2bbhazxb/DRX_Asset_wcRiu6wav.png?tr=w-1280,h-592,f-auto,fo-auto'"
              media="(max-width: 1280px)"
            />
            <source
              :src="'https://ik.imagekit.io/v2bbhazxb/DRX_Asset_wcRiu6wav.png?tr=w-844,h-592,f-auto,fo-auto'"
              media="(max-width: 1440px)"
            />
            <source
              :src="'https://ik.imagekit.io/v2bbhazxb/DRX_Asset_wcRiu6wav.png?tr=w-940,h-592,f-auto,fo-auto'"
              media="(max-width: 1536px)"
            />
            <source
              :src="'https://ik.imagekit.io/v2bbhazxb/DRX_Asset_wcRiu6wav.png?tr=w-1328,h-592,f-auto,fo-auto'"
              media="(max-width: 1920px)"
            />
            <img
              class="w-full h-full object-cover"
              src="https://ik.imagekit.io/v2bbhazxb/DRX_Asset_wcRiu6wav.png?tr=f-auto,fo-auto"
              width="1328"
              height="592"
              alt="Job detail image"
            />
          </picture>
        </div>
        <BaseHtmlParser
          :content="job.description"
          class="description hidden xl:block text-primary w-[560px] mx-auto mt-12"
        />
      </div>

      <BaseHtmlParser
        style="padding: 0 1.5rem"
        :content="job.description"
        class="description block xl:hidden mt-10 text-primary"
      />
    </div>
    <!-- END job detail intro -->

    <!-- START job detail footer -->
    <div style="padding: 2rem 0" class="bg-sand mt-10 xl:!py-24">
      <div
        class="frame-content-small flex flex-col xl:flex-row xl:justify-between xl:items-center"
      >
        <BaseHeadline text="Ready to join DRÄXLMAIER?" tag="div" :size="3" />

        <BaseAction class="mt-10 block xl:mt-0" :to="job.url" color="tertiary">
          Apply now
          <template #icon>
            <IconArrowRight />
          </template>
        </BaseAction>
      </div>
    </div>
    <!-- END job detail footer -->
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Components
import BaseHeadline from '../base/Headline.vue'
import BaseHtmlParser from '../base/HtmlParser.vue'
import BaseAction from '../base/Action.vue'
import IconArrowRight from '../icons/Arrow/Right.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const job = computed(() => {
  return {
    uid: props.data.job.uid,
    title: props.data.job.title,
    city: props.data.job.city,
    state: props.data.job.state,
    postalcode: props.data.job.postalcode,
    country: props.data.job.country,
    jobtype: props.data.job.jobtype,
    location: props.data.job.location,
    businessunit: props.data.job.businessunit,
    department: props.data.job.department,
    dept: props.data.job.dept,
    facility: props.data.job.facility,
    ID: props.data.job.ID,
    shifttype: props.data.job.shifttype,
    adcode: props.data.job.adcode,
    compensation: props.data.job.compensation,
    recruiterid: props.data.job.recruiterid,
    joblocale: props.data.job.joblocale,
    clientcustomer: props.data.job.clientcustomer,
    customfield1: props.data.job.customfield1,
    customfield2: props.data.job.customfield2,
    customfield3: props.data.job.customfield3,
    customfield4: props.data.job.customfield4,
    customfield5: props.data.job.customfield5,
    certification: props.data.job.certification,
    degree: props.data.job.degree,
    education: props.data.job.education,
    travel: props.data.job.travel,
    productservice: props.data.job.productservice,
    experience: props.data.job.experience,
    description: props.data.job.description,
    brand: props.data.job.brand,
    campaigncode: props.data.job.campaigncode,
    shift: props.data.job.shift,
    segments: props.data.job.segments,
    url: props.data.job.url
  }
})
</script>

<style scoped>
:deep(.description table) {
  display: none;
}
:deep(.description ul[style] li) {
  @apply ml-4;
}
</style>
