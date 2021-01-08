import { createApp } from "vue";
import App from "./App.vue";

import CellButton from "./components/CellButton.vue";
import SetCells from "./components/SetCells.vue";
import GridSets from "./components/GridSets.vue";

const app = createApp(App);

app.component("cell-button", CellButton);
app.component("set-cells", SetCells);
app.component("grid-sets", GridSets);
app.mount("#app");
