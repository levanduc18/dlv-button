<template>
  <button class="button">{{ label }}</button>
</template>
<script>
export default {
  name: "VueButton",
  props: {
    label: {
      type: String,
      default: "",
      required: true,
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
