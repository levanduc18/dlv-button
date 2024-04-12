<template>
  <button class="button" @click="onClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "VueButton",
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
<style scoped>
.button {
  background-color: rgb(138, 208, 248);
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  transition: background-color 0.3s linear;
  font-size: 1.3rem;
}
.button:hover {
  background-color: rgb(106, 189, 238);
}
</style>
