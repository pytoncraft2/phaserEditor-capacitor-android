
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlatformePrefab from "./PlatformePrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class NiveauxPlatformePrefab extends Phaser.GameObjects.Layer {

	constructor(scene: Phaser.Scene) {
		super(scene);

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(scene, 768, 800);
		platformePrefab_1.scaleX = 6;
		platformePrefab_1.scaleY = 0.20034715589478025;
		this.add(platformePrefab_1);

		// platformePrefab_2
		const platformePrefab_2 = new PlatformePrefab(scene, 384, 600);
		platformePrefab_2.scaleX = 5;
		platformePrefab_2.scaleY = 0.20034715589478025;
		this.add(platformePrefab_2);

		// platformePrefab_4
		const platformePrefab_4 = new PlatformePrefab(scene, 960, 400);
		platformePrefab_4.scaleX = 8;
		platformePrefab_4.scaleY = 0.20034715589478025;
		this.add(platformePrefab_4);

		// platformePrefab_5
		const platformePrefab_5 = new PlatformePrefab(scene, 1536, 200);
		platformePrefab_5.scaleX = 5;
		platformePrefab_5.scaleY = 0.20034715589478025;
		this.add(platformePrefab_5);

		// platformePrefab_6
		const platformePrefab_6 = new PlatformePrefab(scene, 960, 1000);
		this.add(platformePrefab_6);

		// platformePrefab
		const platformePrefab = new PlatformePrefab(scene, 1344, 600);
		platformePrefab.scaleX = 5;
		platformePrefab.scaleY = 0.20034715589478025;
		this.add(platformePrefab);

		// platformePrefab_3
		const platformePrefab_3 = new PlatformePrefab(scene, 192, 200);
		platformePrefab_3.scaleX = 3;
		platformePrefab_3.scaleY = 0.20034715589478025;
		this.add(platformePrefab_3);

		// platformePrefab_7
		const platformePrefab_7 = new PlatformePrefab(scene, 1728, 800);
		platformePrefab_7.scaleX = 3;
		platformePrefab_7.scaleY = 0.20034715589478025;
		this.add(platformePrefab_7);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
