<template>
  <div class="content container" :class="{ loaded: !loading }">
    <div class="body">
      <Head>
        <Title>Learning Darija</Title>
      </Head>
      <Loader v-if="loading" message="Getting data..." :dark-mode="true" />

      <ClientOnly>
        <template v-if="specificLession">
          <Head>
            <Title>Learning {{ specificLession?.title }}</Title>
          </Head>
          <div v-once class="navigate-home">
            <BreadCrumbs
              :links="[
                {
                  href: `/learning/${currentRouteId}`,
                  label: specificLession.title,
                },
              ]"
            />
          </div>
          <h2 v-once class="title">
            Learn <span class="gold">{{ specificLession.title }}</span>
          </h2>
          <div class="learn">
            <nuxt-link
              v-if="specificLession.hasSentences"
              class="learn-words"
              :to="`/learning/sentences/${specificLession.lession}`"
              >Learn sentences</nuxt-link
            >
            <nuxt-link
              v-else
              class="learn-words"
              :to="`/learning/words/${specificLession.lession}`"
              >Learn words</nuxt-link
            >
          </div>
          <div class="board is-thumb">
            <div
              v-for="(word, index) in specificLession.data"
              :key="index"
              class="card-item"
            >
              <span class="">{{ word.english }}</span
              >:
              <span class="gold">
                {{ word.arabic }}
              </span>
            </div>
          </div>
        </template>
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
    };
  },

  computed: {
    mainStoreComputed() {
      if (_isNil(this.mainStore.$state)) return {};
      return this.mainStore.$state;
    },
    loading() {
      if (_isNil(this.mainStoreComputed.loading)) return true;
      if (_isNil(this.specificLession)) return true;
      return this.mainStoreComputed.loading;
    },
    specificLession() {
      if (_isEmpty(this.mainStoreComputed.arabic)) return null;
      return this.mainStoreComputed.arabic.find(
        (item) => item.lession === this.currentRouteId,
      );
    },
    currentRouteId() {
      return this.$route.params.id;
    },
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  background-color: #131722;
  border-radius: 40px;
  display: flex;
  min-height: 230px;
  justify-content: center;
  padding: 30px;

  .body {
    width: 100%;
    h2.title {
      text-align: center;
    }
    .board {
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

    .navigate-home {
      margin-bottom: 30px;
    }

    .learn {
      text-align: center;

      .learn-words {
        color: white;
      }
    }
  }

  @media (max-width: $d-l-mobile) {
    min-height: 100dvh;
    border-radius: 0;
  }

  @media (max-width: $d-m-ipad) {
    .body {
      .board {
        margin: 30px 0 60px 0;
        flex-direction: column;
        .card-item {
          width: 100%;
          flex: 1;
        }
      }
    }
  }
}
</style>
