<template>
  <div class="breadcrumbs-wrapper" :class="{ 'show-border': border }">
    <div class="container">
      <div class="breadcrumbs">
        <nuxt-link :to="'/'">
          <Icon name="home" width="14px" class="home-icon" /> Home
        </nuxt-link>

        <template v-for="(link, index) in links" :key="link">
          <Icon
            class="chevron-icon"
            :class="{ last: links.length === index + 1 }"
            width="21px"
            name="chevron-right"
          />

          <nuxt-link
            :to="link.href"
            :class="{ last: links.length === index + 1 }"
          >
            {{ link.label }}
          </nuxt-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbs",

  props: {
    links: {
      type: Array,
      default: () => [],
    },
    border: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/devices";

.breadcrumbs-wrapper {
  @media (max-width: $d-l-ipad) {
    border-bottom: 0;
  }

  &.show-border {
    width: 100%;
    padding-bottom: 16px;
    border-bottom: 1px solid white;
  }
}

.breadcrumbs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 1.5rem;

  a {
    font-size: 18px;
    gap: 0.6rem;
    display: flex;
    align-items: center;
    color: gold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &.last {
      display: inline-block;
      color: white;
    }
  }

  .home-icon {
    margin-bottom: 4px;
  }

  .chevron-icon {
    margin-bottom: 4px;
    color: gold;

    &.last {
      color: white;
    }
  }
  @media (max-width: $d-m-ipad) {
    flex-wrap: wrap;
  }
}
</style>
