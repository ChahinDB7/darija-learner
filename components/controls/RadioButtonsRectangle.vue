<template>
  <div class="mydict">
    <div>
      <label v-for="(value, index) in items" :key="index">
        <input v-model="current" type="radio" name="radio" :value="value" />
        <span>{{ value }}</span>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "RadioButtonsRectangle",
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      current: this.value,
    };
  },
  watch: {
    value(newValue, oldValue) {
      if (newValue !== oldValue && this.current !== newValue) {
        this.current = newValue;
      }
    },
    current(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.$emit("update:value", newValue);
        this.$emit("change", newValue);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
:focus {
  outline: 0;
  border-color: #2260ff;
  box-shadow: 0 0 0 4px #b5c9fc;
}

.mydict div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.mydict input[type="radio"] {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

.mydict input[type="radio"]:checked + span {
  box-shadow: 0 0 0 0.0625em gold;
  background-color: transparent;
  z-index: 1;
  color: gold;
}

label span {
  display: block;
  cursor: pointer;
  background-color: transparent;
  padding: 5px 15px;
  position: relative;
  margin-left: 0.0625em;
  box-shadow: 0 0 0 0.0625em white;
  letter-spacing: 0.05em;
  color: white;
  text-align: center;
  transition: background-color 0.5s ease;
}

label:first-child span {
  border-radius: 0.375em 0 0 0.375em;
}

label:last-child span {
  border-radius: 0 0.375em 0.375em 0;
}
</style>
