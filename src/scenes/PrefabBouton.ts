
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PrefabBouton extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0.5, y ?? 0.5);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(1, 7, 128, 128);
		rectangle_1.scaleX = 3.122232243521787;
		rectangle_1.scaleY = 0.7371264798005659;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 26265;
		this.add(rectangle_1);

		// text_1
		const text_1 = scene.add.text(0, 9, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "New text";
		text_1.setStyle({ "color": "#ffffffff", "fontSize": "28px" });
		this.add(text_1);

		this.text_1 = text_1;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public text_1: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
