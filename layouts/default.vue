<template>
  <div>
    <div class="body-content">
      <slot :test="true" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Default",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style lang="scss">
.body-content {
  margin: 30px;

  @media (max-width: $d-s-ipad) {
    margin: 0;

    .content {
      border-radius: 0;
    }
  }
}
</style>
