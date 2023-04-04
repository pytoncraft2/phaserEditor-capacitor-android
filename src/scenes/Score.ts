import { makeAutoObservable } from "mobx";

class ScoreState {
    life: number;
    niveau: number;
    killedEnnemy: number;
    constructor() {
        this.life = 10;
        this.niveau = 1;
        this.killedEnnemy = 0;
        makeAutoObservable(this);
    }
}

export const score = new ScoreState()