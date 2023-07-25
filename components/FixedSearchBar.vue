<template>
    <div class="fixed-search-bar bg-thienquang-yellow">
      <div class="wrapper py-4">
        <input
          ref="searchInput"
          v-model="searchContent"
          autofocus
          type="text"
          placeholder="Nhập từ khoá và nhấn Enter"
          class="block border border-thienquang-yellow rounded w-full max-w-4xl h-10 px-3 mx-auto"
          @keydown="onKeyDown"
        >
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FixedSearchBar",
    data() {
      return {
        searchContent: '',
      }
    },
    mounted() {
      (this.$refs.searchInput)?.focus();
    },
    methods: {
      onKeyDown(e) {
        if (['Escape', 'Esc'].includes(e.key)) {
          this.$emit('close')
        } else if (e.key === 'Enter' && this.searchContent.trim().length) {
          this.doSearch()
        }
      },
      doSearch() {
        console.log('Searching', this.searchContent);
      },
      onClose() {
        this.$emit('close')
      }
    },
  }
  </script>
  <style lang="scss">
  .fixed-search-bar {
    transition: all .5s ease;
  }
  </style>
  