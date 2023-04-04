
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EcranInfo extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? -1170);

		// fondNoir
		const fondNoir = scene.add.rectangle(965, 547, 128, 128);
		fondNoir.scaleX = 15.727055413525404;
		fondNoir.scaleY = 8.592969514268392;
		fondNoir.alpha = 0;
		fondNoir.isFilled = true;
		fondNoir.fillColor = 0;
		this.add(fondNoir);

		// texteNiveau
		const texteNiveau = scene.add.text(962, 555, "", {});
		texteNiveau.setOrigin(0.5, 0.5);
		texteNiveau.text = "Niveau 1";
		texteNiveau.setStyle({ "fontSize": "46px" });
		this.add(texteNiveau);

		this.fondNoir = fondNoir;
		this.texteNiveau = texteNiveau;

		/* START-USER-CTR-CODE */
		scene.add.existing(this)
		scene.tweens.add({
			targets: fondNoir,
			alpha: 1,
			duration: 900
		})
		scene.tweens.add({
			targets: texteNiveau,
			scale: 1.5,
			duration: 700,
			ease: 'Sine.easeOut',
			yoyo: true
		})
		scene.tweens.add({
			targets: this,
			y: 0,
			duration: 900
		})
		/* END-USER-CTR-CODE */
	}

	private fondNoir: Phaser.GameObjects.Rectangle;
	public texteNiveau: Phaser.GameObjects.Text;
	public show: boolean = false;
	public title: string = "";
	public subtitle: string = "";

	/* START-USER-CODE */
	fermer() {
		this.scene.add.existing(this)
		this.scene.tweens.add({
			targets: this.fondNoir,
			alpha: 0,
			duration: 900,
			onComplete: () => {this.destroy(true)}
		})
		this.scene.tweens.add({
			targets: this.texteNiveau,
			scale: 0,
			duration: 700,
			ease: 'Sine.easeOut',
			yoyo: true
		})
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
