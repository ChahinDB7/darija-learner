<template>
  <div class="content container" :class="{ loaded: !loading }">
    <Head>
      <Title>Learning Darija</Title>
    </Head>
    <div class="body">
      <h2 class="title">
        <span>Learning Darija</span>

        <SearchBar v-model:value="search" :disabled="loading" />
      </h2>
      <Loader v-if="loading" message="Getting data..." :dark-mode="true" />

      <ClientOnly>
        <template v-if="!loading && searchResults.length <= 0">
          <masonry-wall
            :items="mainStoreComputed.arabic"
            :min-columns="1"
            :max-columns="2"
            :scroll-container="true"
            :column-width="400"
            :gap="40"
            class="board"
          >
            <template #default="{ item }">
              <div
                :key="index"
                class="card-container"
                :class="{ sentences: item.hasSentences }"
              >
                <AccordionPanel
                  v-model:value="item.open"
                  class="card-item"
                  :title="item.title"
                  :expanded="isFavorited(item)"
                >
                  <template #header>
                    <span>({{ item.data.length }})</span>
                    <span>
                      <Icon
                        v-show="isFavorited(item)"
                        name="heart-filled"
                        class="favorite-icon"
                        @click.stop="toggleFavorite(item)"
                      />
                      <Icon
                        v-show="!isFavorited(item)"
                        class="favorite-icon"
                        name="empty-heart"
                        @click.stop="toggleFavorite(item)"
                      />
                    </span>
                  </template>
                  <nuxt-link
                    class="no-underline"
                    :to="`/learning/${item.lession}`"
                  >
                    <div class="words is-thumb">
                      <div v-for="(word, index) in item.data" :key="index">
                        <span class="">{{ word.english }}</span
                        >:
                        <span class="gold">
                          {{ word.arabic }}
                        </span>
                      </div>
                    </div>
                  </nuxt-link>
                </AccordionPanel>
              </div>
            </template>
          </masonry-wall>
        </template>
        <div v-else-if="!loading" class="search-result is-thumb">
          <nuxt-link
            v-for="(word, index) in searchResults"
            :key="index"
            :to="`/learning/${word.lession}`"
            class="card-item"
          >
            <span class="">{{ word.english }}</span
            >:
            <span class="gold">
              {{ word.arabic }}
            </span>
          </nuxt-link>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import darijaLib from "@lib/darija";

export default {
  name: "Learning",

  setup() {
    const mainStore = MainStore();

    return { mainStore };
  },

  data() {
    return {
      darijaLib,
      debouncedSearch: _debounce(this.doSearch, 1000),
      search: "",
      searchResults: [],
    };
  },

  computed: {
    mainStoreComputed() {
      if (_isNil(this.mainStore.$state)) return {};
      return this.mainStore.$state;
    },
    loading() {
      if (_isNil(this.mainStoreComputed.loading)) return true;
      return this.mainStoreComputed.loading;
    },
  },

  watch: {
    search(newValue, oldValue) {
      if (newValue === oldValue) return;
      this.debouncedSearch();
    },
  },

  methods: {
    isFavorited(data) {
      return data.favorite;
    },
    toggleFavorite(lession) {
      this.mainStore.setFavorite(lession);
    },
    doSearch() {
      if (this.search === "") {
        this.searchResults = [];
        return;
      }
      const allSearchAble = this.mainStoreComputed.allData;
      const regexPattern = new RegExp(_escapeRegExp(this.search), "i");
      this.searchResults = _filter(
        allSearchAble,
        (item) =>
          regexPattern.test(item.title) ||
          regexPattern.test(item.english) ||
          regexPattern.test(item.arabic),
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/devices";

.content {
  width: 100%;
  background-color: #131722;
  border-radius: 40px;
  display: flex;
  min-height: 450px;
  justify-content: center;
  padding: 30px;

  &.loaded {
    min-height: 500px;
  }

  .body {
    width: 100%;
    h2.title {
      text-align: center;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 40px;
      justify-content: center;
    }
    .board {
      margin-top: 50px;

      .card-container {
        .card-item {
          display: flex;
          flex-direction: column;
          gap: 10px;
          height: fit-content;
          flex: auto;
          .words {
            max-height: 400px;
            padding-right: 30px;
            display: flex;
            color: white;
            flex-direction: column;
            gap: 15px;
            font-size: 16px;
            overflow-y: auto;

            .gold {
              margin-left: 10px;
            }
          }
        }

        &.sentences {
          .card-item {
          }
        }
      }
    }

    .search-result {
      display: flex;
      margin: 30px 60px 60px 60px;
      gap: 30px;
      flex-direction: row;
      align-content: center;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;

      .card-item {
        border: 1px solid gold;
        color: white;
        padding: 15px 30px;
        border-radius: 10px;
        font-size: 16px;
      }
    }
  }

  @media (max-width: $d-l-mobile) {
    min-height: 100dvh;
    border-radius: 0;
  }

  @media (max-width: $d-m-ipad) {
    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        flex-direction: column;
      }

      .board {
        width: 100%;

        .card-container {
          width: 100%;
          .card-item {
            min-width: unset !important;
            width: 100%;

            .words {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
}
</style>
