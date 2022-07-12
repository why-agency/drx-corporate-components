import { FilterOption } from '../../types'

import { pipe } from '../utils/fp'

const createFilterString = (index: number, currentFilter: FilterOption) => {
  return `tx_solr[filter][${index}]=${currentFilter.parent
    }%3A${currentFilter.value.replace(' & ', '+%26+')}`
}

const withFilters = (filters: FilterOption[]) => (baseUrl: string) => {
  return filters.reduce((url, currentFilter, index) => {
    const filterString = createFilterString(index, currentFilter)
    return url + '&' + filterString
  }, baseUrl)
}

const withSorting = (sorting: string) => (baseUrl: string) => {
  return baseUrl.endsWith('?') ? baseUrl + sorting : baseUrl + '&' + sorting
}

const withQuery = (queryString: string) => (baseUrl: string) => {
  return queryString ? baseUrl + `tx_solr[q]=${queryString}` : baseUrl
}

const appendQueryParam = (baseUrl: string) => baseUrl + '?'

export const createRequestUrl = ({
  baseUrl,
  filters = [],
  sorting = 'tx_solr%5Bsort%5D=relevance+asc',
  queryString = ''
}: { baseUrl: string, filters?: FilterOption[], sorting?: string, queryString?: string }) =>
  pipe(
    appendQueryParam,
    withQuery(queryString),
    withFilters(filters),
    withSorting(sorting),
    encodeURI
  )(baseUrl)