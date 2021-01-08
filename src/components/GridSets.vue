<template>
  <div class="grid">
    <div id="grid1">
      <set-cells></set-cells>
      <set-cells></set-cells>
      <set-cells></set-cells>
    </div>
    <div id="grid2">
      <set-cells></set-cells>
      <set-cells></set-cells>
      <set-cells></set-cells>
    </div>
    <div id="grid3">
      <set-cells></set-cells>
      <set-cells></set-cells>
      <set-cells></set-cells>
    </div>
  </div>
</template>

<script>
import SetCells from "./SetCells.vue";
export default {
  components: { SetCells },
};
</script>

<style scoped>
.grid {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: 10px;
}
</style>
