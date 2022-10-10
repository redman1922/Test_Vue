<template>
  <ul class="pagination">
    <li class="pagination-item">
      <button
        type="button"
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
        aria-label="Go to first page"
      >
        First
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
        aria-label="Go to previous page"
      >
        Previous
      </button>
    </li>

    <li v-for="(page, idx) in pages" :key="idx" class="pagination-item">
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
        :aria-label="`Go to page number ${page.name}`"
      >
        {{ page.name }}
        <!-- <router-link
          class="pagination__link"
          :to="{ path: '/', query: { page: page } }"
        >
        </router-link> -->
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        @click="onClickNextPage"
        :disabled="isInLastPage"
        aria-label="Go to next page"
      >
        Next
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        @click="onClickLastPage"
        :disabled="isInLastPage"
        aria-label="Go to last page"
      >
        Last
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5,
    },
    size: {
      type: Number,
      required: false,
      default: 3,
    },
    // url: {
    //   type: String,
    //   required: true,
    // },
  },

  computed: {
    startPage() {
      if (
        this.$store.getters.getCurrentPage === 1 ||
        this.$store.getters.getCurrentPage === this.$store.getters.getPageCount
      ) {
        return 1;
      }

      return this.$store.getters.getCurrentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.$store.getters.getPageCount
      );
    },
    pages() {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.$store.getters.getCurrentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.$store.getters.getCurrentPage === 1;
    },
    isInLastPage() {
      return (
        this.$store.getters.getCurrentPage === this.$store.getters.getPageCount
      );
    },
  },
  methods: {
    onClickFirstPage() {
      this.$store.commit("setCurrentPage", 1);
    },
    onClickPreviousPage() {
      this.$store.commit(
        "setCurrentPage",
        this.$store.getters.getCurrentPage - 1
      );
    },
    onClickPage(page) {
      this.$router.push(`${this.$route.path}?page=${page}`).catch(error => {
        if (!isNavigationFailure(error, NavigationFailureType.duplicated)) {
          throw Error(error);
        }
      });
      // +this.$route.query.page ||
      console.log(this.$store.getters.getCurrentPage);
      this.$store.commit("setCurrentPage", +this.$route.query.page);
    },
    onClickNextPage() {
      this.$store.commit(
        "setCurrentPage",
        this.$store.getters.getCurrentPage + 1
      );
    },
    onClickLastPage() {
      this.$store.commit("setCurrentPage", this.$store.getters.getPageCount);
    },
    isPageActive(page) {
      return this.$store.getters.getCurrentPage === page;
    },
  },
};
</script>

<style lang="scss">
.pagination {
  list-style-type: none;

  &-item {
    display: inline-block;
    margin: 5px;
  }
}

.active {
  background-color: cadetblue;
  color: #ffffff;
}
</style>
