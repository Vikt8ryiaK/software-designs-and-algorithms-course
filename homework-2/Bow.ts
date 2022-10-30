import { Weapon } from "./Weapon";

export class Bow extends Weapon {
    protected durabilityModifier: number = 0;
    protected name: string = 'bow';

    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(baseDamage, baseDurability, value, weight);
    }

    protected polish(): void {
        const increased = this.durabilityModifier + Weapon.MODIFIER_CHANGE_RATE;
        this.durabilityModifier = increased >= 1 ? 1: increased;
    }
}