
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Joueur from "./Class/Joueur";
import Coeur from "./Coeur";
import PlayerButton from "./PlayerButton";
import PlayerController from "../components/PlayerController";
import PlatformePrefab from "./PlatformePrefab";
import AraignePrefab from "./AraignePrefab";
/* START-USER-IMPORTS */
import { autorun } from "mobx";
import { score } from "./Score";
import EcranInfo from "./EcranInfo";
/* END-USER-IMPORTS */

export default class Level1 extends Phaser.Scene {

	constructor() {
		super("Level1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// leftKey
		const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightKey
		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// upKey
		const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// downKey
		const downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		// spaceKey
		const spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// fond
		const fond = this.add.image(960, 540, "fond");

		// player
		const player = new Joueur(this, 192, 800);
		this.add.existing(player);
		player.scaleX = 0.9136878847416884;
		player.scaleY = 0.9136878847416884;

		// groupe_vie
		const groupe_vie = this.add.layer();

		// coeur
		const coeur = new Coeur(this, 57, 46.606177095632425);
		groupe_vie.add(coeur);

		// coeur_1
		const coeur_1 = new Coeur(this, 124.12485775334338, 46.606177095632425);
		groupe_vie.add(coeur_1);

		// coeur_2
		const coeur_2 = new Coeur(this, 191.24971550668678, 46.606177095632425);
		groupe_vie.add(coeur_2);

		// coeur_3
		const coeur_3 = new Coeur(this, 258.37457326003016, 46.606177095632425);
		groupe_vie.add(coeur_3);

		// coeur_4
		const coeur_4 = new Coeur(this, 325.4994310133735, 46.606177095632425);
		groupe_vie.add(coeur_4);

		// coeur_5
		const coeur_5 = new Coeur(this, 392.62428876671686, 46.606177095632425);
		groupe_vie.add(coeur_5);

		// coeur_6
		const coeur_6 = new Coeur(this, 459.7491465200602, 46.606177095632425);
		groupe_vie.add(coeur_6);

		// coeur_7
		const coeur_7 = new Coeur(this, 526.8740042734036, 46.606177095632425);
		groupe_vie.add(coeur_7);

		// coeur_8
		const coeur_8 = new Coeur(this, 593.9988620267469, 46.606177095632425);
		groupe_vie.add(coeur_8);

		// coeur_9
		const coeur_9 = new Coeur(this, 661.1237197800903, 46.606177095632425);
		groupe_vie.add(coeur_9);

		// coeur_10
		const coeur_10 = new Coeur(this, 728.2485775334336, 46.606177095632425);
		groupe_vie.add(coeur_10);

		// coeur_11
		const coeur_11 = new Coeur(this, 795.373435286777, 46.606177095632425);
		groupe_vie.add(coeur_11);

		// controlsLayer
		const controlsLayer = this.add.layer();

		// btn_up
		const btn_up = new PlayerButton(this, 1787, 728);
		controlsLayer.add(btn_up);

		// playerButton
		const playerButton = new PlayerButton(this, 123, 966, "ui", "btn-left");
		controlsLayer.add(playerButton);

		// playerButton_1
		const playerButton_1 = new PlayerButton(this, 405, 967, "ui", "btn-right");
		controlsLayer.add(playerButton_1);

		// playerButton_2
		const playerButton_2 = new PlayerButton(this, 1792, 967, "ui", "btn-right");
		playerButton_2.scaleX = 1.6;
		playerButton_2.scaleY = 1.6;
		playerButton_2.angle = 0;
		controlsLayer.add(playerButton_2);

		// playerButton_3
		const playerButton_3 = new PlayerButton(this, 1565, 845);
		playerButton_3.scaleX = 1.6088075096745973;
		playerButton_3.scaleY = 1.6088075096745973;
		playerButton_3.angle = -90;
		playerButton_3.tintTopLeft = 15388681;
		playerButton_3.tintTopRight = 15388681;
		playerButton_3.tintBottomLeft = 15388681;
		playerButton_3.tintBottomRight = 15388681;
		controlsLayer.add(playerButton_3);

		// platformesLayer
		const platformesLayer = this.add.container(0, 0);

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(this, 768, 800);
		platformePrefab_1.scaleX = 6;
		platformePrefab_1.scaleY = 0.20034715589478025;
		platformesLayer.add(platformePrefab_1);

		// platformePrefab_2
		const platformePrefab_2 = new PlatformePrefab(this, 384, 600);
		platformePrefab_2.scaleX = 5;
		platformePrefab_2.scaleY = 0.20034715589478025;
		platformesLayer.add(platformePrefab_2);

		// platformePrefab_4
		const platformePrefab_4 = new PlatformePrefab(this, 960, 400);
		platformePrefab_4.scaleX = 8;
		platformePrefab_4.scaleY = 0.20034715589478025;
		platformesLayer.add(platformePrefab_4);

		// platformePrefab_5
		const platformePrefab_5 = new PlatformePrefab(this, 1536, 200);
		platformePrefab_5.scaleX = 5;
		platformePrefab_5.scaleY = 0.20034715589478025;
		platformesLayer.add(platformePrefab_5);

		// platformePrefab_6
		const platformePrefab_6 = new PlatformePrefab(this, 960, 1000);
		platformesLayer.add(platformePrefab_6);

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 1344, 600);
		platformePrefab.scaleX = 5;
		platformePrefab.scaleY = 0.20034715589478025;
		platformesLayer.add(platformePrefab);

		// platformePrefab_3
		const platformePrefab_3 = new PlatformePrefab(this, 192, 200);
		platformePrefab_3.scaleX = 3;
		platformePrefab_3.scaleY = 0.20034715589478025;
		platformesLayer.add(platformePrefab_3);

		// platformePrefab_7
		const platformePrefab_7 = new PlatformePrefab(this, 1728, 800);
		platformePrefab_7.scaleX = 3;
		platformePrefab_7.scaleY = 0.20034715589478025;
		platformesLayer.add(platformePrefab_7);

		// araigne_1
		const araigne_1 = new AraignePrefab(this, 768, 200);
		this.add.existing(araigne_1);

		// araigne_2
		const araigne_2 = new AraignePrefab(this, 1536, 0);
		this.add.existing(araigne_2);

		// araigne_3
		const araigne_3 = new AraignePrefab(this, 1344, 800);
		this.add.existing(araigne_3);

		// araigne
		const araigne = new AraignePrefab(this, 192, 600);
		this.add.existing(araigne);

		// lists
		const liste_colision_platforme = [araigne, player, araigne_1, araigne_2, araigne_3];
		const liste_toile_ennemy = [araigne, araigne_1, araigne_2, araigne_3];

		// zone_attaque_joueur
		this.physics.add.overlap(player.zone_attaque_physique, liste_toile_ennemy, this.hitEnnemyCb as any, this.hitEnnemy as any, this);

		// platforme_colision
		this.physics.add.collider(liste_colision_platforme, platformesLayer.list);

		// colision_toile
		this.physics.add.collider(liste_toile_ennemy, player.groupe_projectile_toiles.list, this.colisionToile as any);

		// joueur_ennemy_touche
		this.physics.add.overlap(player, liste_toile_ennemy, this.toucheEnnemy as any, this.toucheEnnemyProcessCB as any, this);

		// btn_up (components)
		const btn_upPlayerController = PlayerController.getComponent(btn_up);
		btn_upPlayerController.direction = "up";

		// playerButton (components)
		const playerButtonPlayerController = PlayerController.getComponent(playerButton);
		playerButtonPlayerController.direction = "left";

		// playerButton_1 (components)
		const playerButton_1PlayerController = PlayerController.getComponent(playerButton_1);
		playerButton_1PlayerController.direction = "right";

		// playerButton_2 (components)
		const playerButton_2PlayerController = PlayerController.getComponent(playerButton_2);
		playerButton_2PlayerController.direction = "down";

		// playerButton_3 (components)
		const playerButton_3PlayerController = PlayerController.getComponent(playerButton_3);
		playerButton_3PlayerController.direction = "space";

		this.fond = fond;
		this.player = player;
		this.groupe_vie = groupe_vie;
		this.platformesLayer = platformesLayer;
		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.upKey = upKey;
		this.downKey = downKey;
		this.spaceKey = spaceKey;
		this.liste_colision_platforme = liste_colision_platforme;
		this.liste_toile_ennemy = liste_toile_ennemy;

		this.events.emit("scene-awake");
	}

	public fond!: Phaser.GameObjects.Image;
	private player!: Joueur;
	public groupe_vie!: Phaser.GameObjects.Layer;
	public platformesLayer!: Phaser.GameObjects.Container;
	private leftKey!: Phaser.Input.Keyboard.Key;
	private rightKey!: Phaser.Input.Keyboard.Key;
	private upKey!: Phaser.Input.Keyboard.Key;
	private downKey!: Phaser.Input.Keyboard.Key;
	private spaceKey!: Phaser.Input.Keyboard.Key;
	public liste_colision_platforme!: Array<AraignePrefab|Joueur>;
	public liste_toile_ennemy!: AraignePrefab[];

	/* START-USER-CODE */
	private leftDown = false;
	private rightDown = false;
	private upDown = false;
	private downDown = false;
	private spaceDown = false;
	private spaceDownTouch = false;
	private isMobile = false;


	// Write your code here

	create() {

		this.editorCreate();

		autorun(() => {
			this.player.killedEnnemy = score.killedEnnemy;
			if (this.player.killedEnnemy == 1) {
				const ecran_info = new EcranInfo(this, 0, 0)
				ecran_info.texteNiveau.text = `Niveau ${score.niveau} réussi !`;
				score.niveau += 1;
				this.time.delayedCall(3000, () => {
					ecran_info.fermer();
					this.fond.setTexture('fond3')
				})
			}
		})

		this.scale.startFullscreen();
		this.input.addPointer(3);

		const checkIfMobile = function () {
			let check = false;
			(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor);
			return check;
		};

		this.isMobile = checkIfMobile()



		//this.physics.world.setBoundsCollision(true, true, false, false)
        var FKey = this.input.keyboard.addKey('F');

        FKey.on('down', function (this: any) {

            if (this.scale.isFullscreen)
            {
                //button.setFrame(0);
                this.scale.stopFullscreen();
            }
            else
            {
                //button.setFrame(1);
                this.scale.startFullscreen();
            }

        }, this);
	}

	update(_time: number, _delta: number): void {

		if (this.player.killedEnnemy == 4) {
			console.log("FIN");
		}

		this.updatePlayer();
	}

	private hitEnnemy(_obj1: any, obj2: AraignePrefab) {
			if (obj2.killable) return true;
			else return false;
	}

	private hitEnnemyCb(obj1: any, obj2: AraignePrefab) {
		obj2.timerDiminutionToile?.remove();
		obj2.body.moves = true;
		obj2.body.checkCollision.none = true;
		score.killedEnnemy += 1;
		console.log(obj2);

		this.tweens.add({
			targets: [obj2.araigne, obj2.toileImage],
			angle: obj1.parentContainer.huipat.flipX ? -960 : 960,
			alpha: 0,
			ease: 'Linear',
			duration: 1000
		});
		obj2.body.setVelocity(obj1.parentContainer.huipat.flipX ? -500 : 500, -1800);
		this.time.delayedCall(800, () => obj2.destroy(true))
	}

	private isKeyDown(key?: Phaser.Input.Keyboard.Key) {

		if (key) {

			return key.isDown;
		}

		return false;
	}

	private updatePlayer() {


		this.leftDown = this.leftDown || this.isKeyDown(this.leftKey);
		this.rightDown = this.rightDown || this.isKeyDown(this.rightKey);
		this.upDown = this.upDown || this.isKeyDown(this.upKey) ;
		this.downDown = this.downDown || this.isKeyDown(this.downKey);
		if (this.isMobile) {
			this.spaceDown = this.spaceDown || this.isKeyDown(this.spaceKey) || this.spaceDownTouch;
		}

		if (Phaser.Input.Keyboard.JustDown(this.spaceKey)) {
			this.player.envoieProjectileToile()
		}

		if (this.isMobile) {
			if (this.spaceDown) {
				this.player.envoieProjectileToile()
				this.spaceDown = false;
			}
		}


		if (this.leftDown) {
			this.player.moveLeft();
		} else if (this.rightDown) {

			this.player.moveRight();
		} else if (this.downDown) {
			this.player.moveDown();
		} else {
			this.player.stopMoving();
		}

		if (this.upDown && this.player.body.touching.down) {
			this.player.jump();
		}

		if (!this.isMobile) {
			this.leftDown = this.rightDown = this.upDown = this.downDown = this.spaceDown = this.spaceDownTouch = false;
		}

	}

	colisionToile(araigne:AraignePrefab, toile:any) {
		araigne.hit(araigne.degat, toile);
	}

	toucheEnnemyProcessCB(obj1: Joueur, _obj2: AraignePrefab) {
		if (!obj1.invincible) {
			return true;
		} else {
			return false;
		}
	}

	toucheEnnemy(obj1: Joueur) {
		obj1.removeLife();
		obj1.invincible = true;
		obj1.body.moves = false;
		this.tweens.add({
			targets: obj1,
			alpha: {
				from: 0.8,
				to: 0
			},
			duration: 100,
			yoyo: true,
			repeat: 3,
			onComplete: () => {
				obj1.body.moves = true;
			}
		});
		this.time.delayedCall(3000, () => {
			obj1.setAlpha(1);
			obj1.invincible = false;
		});
		console.log("TOUCHE ENNEMY");
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
