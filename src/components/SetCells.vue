<template>
  <div class="set">
    <div id="set1">
      <cell-button></cell-button>
      <cell-button></cell-button>
      <cell-button></cell-button>
    </div>
    <div id="set2">
      <cell-button></cell-button>
      <cell-button></cell-button>
      <cell-button></cell-button>
    </div>
    <div id="set3">
      <cell-button></cell-button>
      <cell-button></cell-button>
      <cell-button></cell-button>
    </div>
  </div>
</template>

<script>
import CellButton from "./CellButton.vue";
export default {
  components: { CellButton },
};
</script>

<style scoped>
.set {
  display: flex;
  flex-direction: horizontal;
  align-content: center;
  margin: 5px;
}
</style>
