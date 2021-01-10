<template>
  <button :style="{ color: visible }" @click="verifyNumber">
    {{ playerCell }}
  </button>
</template>

<script>
export default {
  props: { cell: Number, playerCell: Number, selectedNumber: Number },
  computed: {
    visible() {
      return this.playerCell !== 0 ? "#000" : "#fff";
    },
  },
  methods: {
    verifyNumber() {
      if (this.selectedNumber === this.cell) {
        this.$emit("verifiedNumber", this.cell);
        console.log("o número combina");
      } else {
        console.log("não combina");
      }
    },
  },
  emits: ["verifiedNumber"],
};
</script>

<style scoped>
button {
  width: 38px;
  height: 38px;
  margin: 2px;
  font-size: 14pt;
  background-color: white;
  border: 0;
  cursor: pointer;
}
button:hover {
  background-color: rgba(188, 143, 143, 0.527);
}
</style>
