import { defineStore } from 'pinia'

import { Filter, FilterOption, RawJob } from '../../types'

import { createRequestUrl } from '../utils/request'

const formatFilterOptions = (filters: Filter[]) =>
  filters.reduce((filterOptions: any, currentFilter: Filter) => {
    return [
      ...filterOptions,
      ...currentFilter.options.map(option => ({
        parent: currentFilter.name,
        value: option.value.toString().replace('&#44;', '%26%2344%3B'),
        label: option.label.toString().replace('&#44;', ',')
      }))
    ]
  }, [])

export const useJobs = defineStore('jobs', {
  state: () => {
    return {
      url: '',
      query: '',
      count: 0,
      currentPage: 1,
      jobs: [],
      filters: [] as Filter[],
      filterOptions: [] as FilterOption[],
      activeFilterOptions: [] as FilterOption[],
      isRequestPending: true,
      hasRequestFailed: false
    }
  },
  actions: {
    async getJobs() {
      const url = createRequestUrl({
        baseUrl: this.url,
        filters: this.activeFilterOptions,
        queryString: this.query
      })

      try {
        this.isRequestPending = true
        const response = await fetch(url, { headers: { Authorization: `Basic ${btoa('drx:drx')}` } })
        const { documents, allResultCount, facets } = await response.json()
        const jobs = documents?.list?.results.map((rawJob: RawJob) => rawJob.content) || []
        const filterOptions = formatFilterOptions(facets)

        this.count = allResultCount
        this.jobs = jobs
        this.filterOptions = filterOptions

      } catch(error) {
        this.hasRequestFailed = true
      } finally {
        this.isRequestPending = false
      }
    },
    setQuery(query: string) {
      this.query = query
    },
    setActiveFilterOptions(options: FilterOption[]) {
      this.activeFilterOptions = options
    },
    persistJobs(documents: any) {
      const jobs = documents?.list?.results.map((rawJob: any) => rawJob.content) || []
      this.jobs = jobs
      this.isRequestPending = false
    },
    persistFilters(filters: Filter[]) {
      this.filters = filters
      this.filterOptions = formatFilterOptions(filters)
    }
  }
})
