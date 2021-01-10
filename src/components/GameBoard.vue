<template>
  <div id="grid">
    <game-line
      index="0"
      :playerList="playerLists[0]"
      :list="lists[0]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-line
      index="1"
      :playerList="playerLists[1]"
      :list="lists[1]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-line
      index="2"
      :playerList="playerLists[2]"
      :list="lists[2]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-line
      index="3"
      :playerList="playerLists[3]"
      :list="lists[3]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-line
      index="4"
      :playerList="playerLists[4]"
      :list="lists[4]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-line
      index="5"
      :playerList="playerLists[5]"
      :list="lists[5]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-line
      index="6"
      :playerList="playerLists[6]"
      :list="lists[6]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-line
      index="7"
      :playerList="playerLists[7]"
      :list="lists[7]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
    <game-line
      index="8"
      :playerList="playerLists[8]"
      :list="lists[8]"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
  </div>
</template>

<script>
import GameLine from "./GameLine.vue";
export default {
  components: { GameLine },
  props: { playerLists: Array, lists: Array, selectedNumber: Number },
  methods: {
    verifiedNumber(list, pos, num) {
      this.$emit("verifiedNumber", list, pos, num);
    },
  },
};
</script>

<style scoped>
#grid {
  width: 380px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-image: url("~@/assets/grid.png");
}
</style>
