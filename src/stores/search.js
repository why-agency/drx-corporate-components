import { defineStore, createPinia, setActivePinia } from 'pinia'

setActivePinia(createPinia())

export const useSearch = defineStore('search', {
  state: () => {
    return {
      isSearchOverlayVisible: false,
      searchText: '',
      formAction: '',
      suggestEndpoint: '',
      inputPlaceholder: '',
      topResultsLabel: '',
      showAllLabel: '',
      resultsLabelSingle: '',
      resultsLabel: '',
      baseUrl: '',
      isRequestPending: true,
      hasRequestFailed: false,
      searchResults: [],
      displayedSearchResults: [],
      suggestions: [],
      displayedSuggestions: [],
      resultCount: 0
    }
  },
  actions: {
    toggleSearchOverlay(value) {
      this.isSearchOverlayVisible = value
    },
    setSearchText(value) {
      this.searchText = value
    },
    setSearchData(data) {
      this.formAction = data.formAction
      this.suggestEndpoint = data.suggestEndpoint
      this.inputPlaceholder = data.inputPlaceholder
      this.topResultsLabel = data.topResultsLabel
      this.showAllLabel = data.showAllLabel
      this.baseUrl = data.baseUrl
      this.resultsLabel = data.resultsLabel
      this.resultsLabelSingle = data.resultsLabelSingle
    },
    async getSearchResults() {
      // reset all if search query empty
      if (!this.searchText) {
        this.clearSearch()
        return
      }
      // otherwise send request and update values in store
      const url = `${this.baseUrl}${this.suggestEndpoint}&tx_solr[callback]=c&tx_solr[queryString]=${this.searchText}`
      try {
        this.isRequestPending = true
        const response = await fetch(url)
        const responseText = await response.text()
        const responseTextParsed = JSON.parse(responseText.slice(2, -1))
        const { documents, suggestions } = responseTextParsed

        this.persistSearchResults(documents, suggestions)
        this.setDisplayedResults()
      } catch (error) {
        console.log(error)
        this.hasRequestFailed = true
      } finally {
        this.isRequestPending = false
      }
    },
    async getTotalSearchResultsCount() {
      const url = `${this.baseUrl}?type=7387&q=${this.searchText}`
      try {
        const response = await fetch(url)
        const count = await response.text()
        this.resultCount = count
      } catch (error) {
        console.log(error)
      }
    },
    persistSearchResults(documents, suggestions) {
      this.searchResults = documents
      if (typeof suggestions === 'object') {
        this.suggestions = Object.keys(suggestions)
      }
      this.isRequestPending = false
    },
    // always display 3 items max (including suggestions and results)
    setDisplayedResults() {
      /** DISPLAYED SUGGESTIONS */
      this.displayedSuggestions =
        // display no suggestions if 1 suggestion and at least 3 search results available
        this.suggestions.length === 1 && this.searchResults.length >= 3
          ? []
          : // display up to 3 suggestions
            this.suggestions.slice(0, 3)

      //displayed search results
      this.displayedSearchResults = this.searchResults.slice(
        0,
        3 - this.displayedSuggestions.length
      )
    },
    clearSearch() {
      this.searchResults = []
      this.suggestions = []
      this.setDisplayedResults()
    }
  }
})
