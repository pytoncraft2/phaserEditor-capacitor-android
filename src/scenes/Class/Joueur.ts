
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import ToileHuipatPrefab from "../../scenes/Class/ToileHuipatPrefab";
/* END-USER-IMPORTS */

export default interface Joueur {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Joueur extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 11, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 1000;
		this.body.setSize(64, 64, false);

		// huipat
		const huipat = scene.add.image(91, 96, "huipat");
		this.add(huipat);

		// zone_attaque_physique
		const zone_attaque_physique = scene.add.rectangle(235, 96, 128, 128) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
		zone_attaque_physique.scaleX = 0.7397814767454395;
		zone_attaque_physique.scaleY = 1.3067049758245473;
		scene.physics.add.existing(zone_attaque_physique, false);
		zone_attaque_physique.body.allowGravity = false;
		zone_attaque_physique.body.setSize(128, 128, false);
		zone_attaque_physique.fillColor = 15335424;
		this.add(zone_attaque_physique);

		// groupe_projectile_toiles
		const groupe_projectile_toiles = scene.add.container(0, 0);
		this.add(groupe_projectile_toiles);

		this.huipat = huipat;
		this.zone_attaque_physique = zone_attaque_physique;
		this.groupe_projectile_toiles = groupe_projectile_toiles;

		/* START-USER-CTR-CODE */
		this.body.setSize(this.huipat.displayWidth, this.huipat.displayHeight)
		this.invincible = false;
		this.clone = 0;
		this.scene = scene;
		// this.auto()
		/* END-USER-CTR-CODE */
	}

	public huipat: Phaser.GameObjects.Image;
	public zone_attaque_physique: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };
	public groupe_projectile_toiles: Phaser.GameObjects.Container;
	public canShoot: boolean = false;
	public velY: number = 890;
	public velX: number = 350;
	public invincible: boolean = false;
	public clone: number = 0;
	public killedEnnemy: number = 0;

	/* START-USER-CODE */

	die() {
		// this.setTint(0xff0000);
		// this.play("turn");
	}
	jump() {
		this.body.checkCollision.none = true;
		this.body.setVelocityY(-this.velY);
		this.scene.time.delayedCall(500, () => (this.body.checkCollision.none = false), undefined, this);
	}
	stopMoving() {
			this.body.setVelocityX(0);
	}
	moveRight() {
		this.body.setVelocityX(this.velX)
		this.huipat.setFlipX(false);
		this.zone_attaque_physique.setPosition(this.huipat.getRightCenter().x,this.huipat.getRightCenter().y)
		this.body.setVelocityX(this.velX);
	}
	moveLeft() {
		this.huipat.setFlipX(true);
		this.zone_attaque_physique.setPosition(this.huipat.getLeftCenter().x,this.huipat.getLeftCenter().y)
		this.body.setVelocityX(-this.velX)
	}
	moveDown(): any {
		this.body.checkCollision.none = true;
		this.body.setVelocityY(this.velY)

		this.scene.time.delayedCall(50, () => (this.body.checkCollision.none = false), undefined, this);  // delay in ms
	}

	removeLife() {
		(this.scene as any).groupe_vie.length != 0 && (this.scene as any).groupe_vie.removeAt((this.scene as any).groupe_vie.length -1)
		// this.huipat.body.enable = false;
		// this.huipat.body.checkCollision.none = true;
		// this.huipat.body.allowGravity = false;
		// this.huipat.body.moves = false;
		// this.invincible = true;
		// this.scene.tweens.add({
		// 	targets: this,
		// 	alpha: {from: 0.2, to: 1},
		// 	scale: {from: 0.9, to:1},
		// 	duration: 500,
		// 	repeat: 3,            // -1: infinity
		// 	yoyo: true,
		// 	onComplete: () => {
		// 		this.huipat.setAlpha(1);
		// 		// this.huipat.body.enable = true;
		// 		// this.huipat.body.allowGravity = true;
		// 		// this.huipat.body.moves = true;
		// 	}
		// });
		// this.scene.time.delayedCall(5000, () => (this.invincible = false, this.huipat.setAlpha(1)), undefined, this)
	}

	pressButton(direction: "left" | "right" | "up" | "down" | "space") {
		switch (direction) {
			case "left":
				(this.scene as any).leftDown = true;
				break;

			case "right":
				(this.scene as any).rightDown = true;
				break;

			case "up":
				(this.scene as any).upDown = true;
				break;

			case "down":
				(this.scene as any).downDown = true;
				break;
			case "space":
				(this.scene as any).spaceDownTouch = true;
				break;
		}
	}

	envoieProjectileToile() {
		console.log("PEUT SHOOT ?");


		const t = new ToileHuipatPrefab(this.scene, this.huipat.x, this.huipat.y)
		this.groupe_projectile_toiles.add(t)
		t.body.setVelocity(this.huipat.flipX ? -1100 : 1100, -300)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
