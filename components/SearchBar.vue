<template>
  <div class="search-box" @click="openSearch">
    <button class="btn-search" :class="{ 'has-search': search.length > 0 }">
      <Icon name="search" />
    </button>
    <input
      ref="search"
      v-model="search"
      type="text"
      class="input-search no-css"
      placeholder="Search"
      :class="{ 'has-search': search.length > 0 }"
      @input="inputChange($event)"
    />
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  props: {
    value: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      search: this.value,
    };
  },
  watch: {
    value(newValue, oldValue) {
      if (newValue !== oldValue && this.checked !== newValue) {
        this.search = newValue;
      }
    },
  },
  methods: {
    openSearch() {
      this.$refs.search.focus();
    },
    inputChange(e) {
      const value = e.target.value;
      this.$emit("update:value", value);
      this.$emit("input", value);
    },
  },
};
</script>
<style lang="scss" scoped>
.search-box {
  width: fit-content;
  height: fit-content;
  position: relative;
}
.input-search {
  height: 50px;
  width: 50px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all 0.4s ease-in-out;
  background-color: gold;
  padding-right: 40px;
  color: #fff;
}
.input-search::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 100;
}
.btn-search {
  width: 50px;
  height: 50px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  top: 0;
  color: #ffffff;
  background-color: transparent;
  pointer-events: painted;
}
.btn-search:focus ~ .input-search {
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}

.input-search:focus,
.input-search.has-search {
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}
</style>
