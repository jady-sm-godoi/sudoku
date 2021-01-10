<template>
  <div class="set">
    <game-cell
      :playerCell="playerList[0]"
      :cell="list[0]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-cell
      :playerCell="playerList[1]"
      :cell="list[1]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-cell
      :playerCell="playerList[2]"
      :cell="list[2]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-cell
      :playerCell="playerList[3]"
      :cell="list[3]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-cell
      :playerCell="playerList[4]"
      :cell="list[4]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-cell
      :playerCell="playerList[5]"
      :cell="list[5]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-cell
      :playerCell="playerList[6]"
      :cell="list[6]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-cell
      :playerCell="playerList[7]"
      :cell="list[7]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-cell
      :playerCell="playerList[8]"
      :cell="list[8]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
  </div>
</template>

<script>
import GameCell from "./GameCell.vue";
export default {
  components: { GameCell },
  props: {
    playerList: Array,
    list: Array,
    selectedNumber: Number,
    index: String,
  },
  methods: {
    verifiedNumber(num) {
      let pos = this.list.indexOf(num);
      this.$emit("verifiedNumber", Number(this.index), pos, num);
    },
  },
  emits: ["verifiedNumber"],
};
</script>

<style scoped>
.set {
  display: flex;
  flex-direction: row;
  align-content: center;
}
</style>
