import { defineStore, createPinia, setActivePinia } from "pinia";

import { Filter, FilterOption } from '../../types'

import { createRequestUrl } from '../utils/request'

setActivePinia(createPinia())

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
      currentPage: 0,
      jobsPerPage: 10,
      jobs: [],
      filters: [] as Filter[],
      filterOptions: [] as FilterOption[],
      activeFilterOptions: [] as FilterOption[],
      isRequestPending: true,
      hasRequestFailed: false,
      isFilterBarActive: false,
      activeFilterView: null as Filter | null
    }
  },
  getters: {
    numberOfActiveFilterOptions(state) {
      return state.activeFilterOptions.length
    },
    numberOfPages(state) {
      return Math.ceil(state.count / state.jobsPerPage)
    },
    jobsToDisplay(state) {
      return state.jobs.slice(state.currentPage * 10, (state.currentPage + 1) * 10)
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

        this.count = allResultCount
        this.persistJobs(documents)
        this.persistFilters(facets)

      } catch (error) {
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
      if (!filters || !Array.isArray(filters)) return

      const ignoreList = ['type', 'pid']

      this.filters = filters.filter(filter => !ignoreList.includes(filter.name))
      this.filterOptions = formatFilterOptions(this.filters)
    },
    clearFilterOption(filterOptionToClear: FilterOption) {
      this.activeFilterOptions = this.activeFilterOptions.filter(
        filterOption => filterOption.value !== filterOptionToClear.value
      )
    },
    clearFilters() {
      this.activeFilterOptions = []
      this.query = ''
    }
  }
})
