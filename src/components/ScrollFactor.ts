
// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ScrollFactor extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Image|Phaser.GameObjects.Text) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__ScrollFactor"] = this;

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image|Phaser.GameObjects.Text): ScrollFactor {
		return (gameObject as any)["__ScrollFactor"];
	}

	//@ts-ignore
	private gameObject: Phaser.GameObjects.Image|Phaser.GameObjects.Text;
	public x: number = 0;
	public y: number = 0;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
