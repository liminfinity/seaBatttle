import { Application } from "./Application.js";
import { PreparationScene } from "./scenes/PreparationScene.js";
import { ComputerScene } from "./scenes/ComputerScene.js";


const app = new Application({
	preparation: PreparationScene,
	computer: ComputerScene,
});

app.start("preparation");