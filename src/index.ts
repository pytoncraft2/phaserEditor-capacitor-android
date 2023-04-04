import Phaser from "phaser";
import Level from "./scenes/Level";
import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";
import Level1 from "./scenes/Level1";

class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", preloadAssetPackUrl);
    }

    create() {

       this.scene.start("Preload");
    }
}

window.addEventListener('load', function () {
	const game = new Phaser.Game({
		width: 1920,
		height: 1080,
		backgroundColor: "#eee",
		physics: {
			default: 'arcade',
			arcade: {
				gravity: { y: 900 },
				debug: false
			}
		},
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		scene: [Boot, Preload, Level, Level1]
	});
	game.scene.start("Boot");

});