<template>
  <div>
    <button @click="selectNumber(1)">1</button>
    <button @click="selectNumber(2)">2</button>
    <button @click="selectNumber(3)">3</button>
    <button @click="selectNumber(4)">4</button>
    <button @click="selectNumber(5)">5</button>
    <button @click="selectNumber(6)">6</button>
    <button @click="selectNumber(7)">7</button>
    <button @click="selectNumber(8)">8</button>
    <button @click="selectNumber(9)">9</button>
  </div>
</template>

<script>
export default {
  methods: {
    selectNumber(num) {
      this.$emit("setNumber", num);
    },
  },
  emits: ["setNumber"],
};
</script>
<style scoped>
div {
  margin: 7px 0;
}
button {
  width: 38px;
  height: 38px;
  margin: 0px;
  font-size: 14pt;
  background-color: white;
  border: 1;
  cursor: pointer;
}
button:hover {
  background-color: rgba(188, 143, 143, 0.527);
}
</style>
