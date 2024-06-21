<template>
  <div class="icon">
    <ClientOnly>
      <component
        :is="currentIcon"
        v-tooltip="{
          content: tooltip,
          html: htmlTooltip,
          shown: alwaysShown,
        }"
        :style="{ width: `${width}`, height: `${height}` }"
        :class="{ clickable: clickable }"
      />
    </ClientOnly>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },

    width: {
      type: String,
      default: "auto",
    },

    height: {
      type: String,
      default: "auto",
    },

    filled: {
      type: Boolean,
      default: false,
    },

    clickable: {
      type: Boolean,
      default: false,
    },

    tooltip: {
      type: String,
      required: false,
      default: "",
    },

    alwaysShown: {
      type: Boolean,
      required: false,
      default: false,
    },

    htmlTooltip: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  setup(props) {
    const currentIcon = defineAsyncComponent(
      async () => await import(`@icons/${props.name}.svg`),
    );

    return {
      currentIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
svg {
  display: inline-block;
  vertical-align: middle;
  transition:
    fill 200ms ease,
    stroke 200ms ease;

  &:focus {
    outline: none;
  }

  &.filled {
    fill: currentcolor;
    stroke: transparent;
  }
}
</style>
