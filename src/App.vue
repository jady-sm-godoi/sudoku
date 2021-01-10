<template>
  <h1>template</h1>
  <div>
    <game-board
      :playerLists="playerLists"
      :lists="lists"
      :selectedNumber="selectedNumber"
      @verifiedNumber="verifiedNumber"
    />
  </div>
  <select-number @setNumber="setNumber" />
</template>

<script>
import selectNumber from "./components/SelectNumber.vue";
const playerGame = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const game = [
  [2, 4, 8, 1, 5, 7, 3, 9, 6],
  [7, 9, 3, 2, 6, 4, 1, 8, 5],
  [6, 1, 5, 8, 3, 9, 2, 4, 7],
  [5, 7, 2, 6, 4, 3, 8, 1, 9],
  [1, 3, 4, 9, 7, 8, 6, 5, 2],
  [9, 8, 6, 5, 1, 2, 7, 3, 4],
  [8, 2, 1, 7, 9, 5, 4, 6, 3],
  [3, 6, 9, 4, 2, 1, 5, 7, 8],
  [4, 5, 7, 3, 8, 6, 9, 2, 1],
];
export default {
  components: { selectNumber },
  name: "App",
  data() {
    return {
      playerLists: playerGame,
      lists: game,
      selectedNumber: null,
    };
  },
  methods: {
    setNumber(num) {
      this.selectedNumber = num;
    },
    verifiedNumber(list, pos, num) {
      this.playerLists[list][pos] = num;
      console.log("chegou aqui", list, pos, num);
    },
  },
};
</script>
SetCells

<style></style>
