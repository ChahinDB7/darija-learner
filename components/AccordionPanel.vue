<template>
  <div class="panel" :class="{ 'has-scroll': showScrollbar }">
    <div class="c">
      <input :id="id" v-model="open" type="checkbox" />
      <div class="header no-select">
        <label @click.self="open = !open"
          ><span v-if="title" class="title" @click.self="open = !open"
            >{{ title }}
            <slot name="header" />
          </span>
          <Icon
            v-if="!hideChevron"
            name="chevron-down"
            class="chevron"
            :class="{ up: open }"
          />
        </label>
      </div>
      <div class="p is-thumb" :class="{ 'has-scroll': showScrollbar }">
        <div class="content">
          <slot name="default" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccordionPanel",
  props: {
    value: {
      type: Boolean,
      required: false,
      default: null,
    },
    title: {
      type: String,
      required: false,
      default: null,
    },
    showScrollbar: {
      type: Boolean,
      required: false,
      default: false,
    },
    expanded: {
      type: Boolean,
      required: false,
      default: false,
    },
    hideChevron: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      id: this.generateRandomId(),
      open: this.expanded,
    };
  },
  watch: {
    value(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.open = newValue;
      }
    },
    open: {
      handler(newValue, oldValue) {
        if (oldValue === newValue) return;
        this.$emit("collapsed", newValue);
      },
    },
  },
  methods: {
    generateRandomId() {
      const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let id = "";

      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters.charAt(randomIndex);
      }

      return id;
    },
  },
};
</script>
<style lang="scss" scoped>
div.c {
  position: relative;
  margin: 10px;
}
input {
  display: none;
}
.header {
  color: white;
  font-size: 20px;
  position: relative;
}

label {
  cursor: pointer;
  position: relative;
  display: flex;
  font-size: 18px;
  padding: 6px 20px;
  align-items: center;
  justify-content: space-between;
}

.title {
  display: flex;
  gap: 30px;
  align-items: center;
  color: white;
  font-size: 20px;
}
div.p {
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.3s;
}
div.p p {
  padding: 2em;
}
input:checked ~ .header label::before {
  border-left: 15px solid transparent;
  border-top: 20px solid white;
  margin-top: 12px;
  margin-right: 10px;
}
input:checked ~ .header ~ div.p {
  max-height: 500px;
  transition: max-height 0.4s;

  &.has-scroll {
    overflow-y: auto;
  }
}

a {
  color: steelblue;
}

.panel {
  // max-width: 500px;
  transition: max-height 0.5s;
  padding: 3px;
  color: white;
  margin: 0 auto;
  background-color: #131722;
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.2);
  border-radius: 30px;

  &.has-scroll {
    padding: 3px 11px 16px 3px;
  }
}

.content {
  padding: 20px;
}

.chevron {
  transition: transform 0.3s ease;
  &.up {
    transform: rotate(180deg);
  }
}
.no-select {
  -webkit-touch-callout: none; /* iOS Safari */ /* Safari */ /* Konqueror HTML */ /* Old versions of Firefox */ /* Internet Explorer/Edge */
  user-select: none;
  -webkit-user-drag: none;
  -o-user-drag: none;
}
</style>
