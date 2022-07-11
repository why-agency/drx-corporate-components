<template>
  <div>
    <!-- START job detail intro -->
    <div class="grid grid-cols-1 xl:grid-cols-2">
      <div class="bg-primary pt-24 pb-12 px-6 text-white">
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

        <!-- START actions
        <MActionbar />
        END actions -->
        <BaseAction :to="job.url" class="block mt-32">
          Apply now
          <template #icon>
            <IconArrowRight />
          </template>
        </BaseAction>
      </div>

      <div>
        <div>
          <BasePicture v-if="props.data.media" :images="props.data.media" />
        </div>
        <BaseHtmlParser :content="job.description" class="description hidden xl:block text-primary" />
      </div>

      <BaseHtmlParser :content="job.description" class="description block xl:hidden mt-10 px-6 text-primary" />
    </div>
    <!-- END job detail intro -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Types
import { Job } from '../../../types/jobs'

// Components
import BaseHeadline from '../base/Headline.vue'
import BaseHtmlParser from '../base/HtmlParser.vue'
import MActionBar from '../molecules/ActionBar.vue'
import BasePicture from '../base/Picture.vue'
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
  @apply ml-4
}
</style>
