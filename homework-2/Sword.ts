import { Weapon } from "./Weapon";

export class Sword extends Weapon {
    protected baseDamage: number;
    protected damageModifier: number;
    protected name: string = 'sword';

    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(baseDamage, baseDurability, value, weight);
        this.baseDamage = baseDamage;

        this.damageModifier = Sword.MODIFIER_CHANGE_RATE;
    }

    polish(): void {
        const increased = this.damageModifier + Sword.MODIFIER_CHANGE_RATE;
        const maximum = this.baseDamage * 0.25;
        this.damageModifier = increased <= maximum ? increased : this.damageModifier;
    }
}