<template>
  <vue-collapsible-panel-group class="small-padding">
    <vue-collapsible-panel :expanded="expanded">
      <template #title>
        <div v-if="data.title !== ''" class="collapser-title no-select bold">
          {{ data.title }}
        </div>
        <slot name="header" />
      </template>
      <template #content>
        <slot name="body" />
      </template>
    </vue-collapsible-panel>
  </vue-collapsible-panel-group>
</template>

<script>
export default {
  name: "Collapser",

  props: {
    data: {
      type: Object,
      required: false,
      default: () => {
        return {
          title: "",
        };
      },
    },
    expanded: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      hoi: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.collapser-title {
  font-size: 20px;
  text-align: left;
  font-weight: 500;

  @media screen and (max-width: $d-s-ipad) {
    font-size: 20px;
  }
}

.description {
  text-align: left;
  color: rgba(86, 86, 86, 0.5);
  font-size: 20px;
}

.vcpg {
  border: none;
}
</style>
