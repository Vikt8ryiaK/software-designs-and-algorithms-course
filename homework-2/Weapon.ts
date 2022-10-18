import { Item } from './Item';

export abstract class Weapon extends Item {
    protected static MODIFIER_CHANGE_RATE: number = 0.05;

    protected baseDamage: number;
    protected damageModifier: number;
    protected baseDurability: number;
    protected durabilityModifier: number;

    constructor(baseDamage: number, baseDurability: number, value: number, weight: number, name: string = 'weapon') {
        super(value, weight, name);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;

        this.damageModifier = Weapon.MODIFIER_CHANGE_RATE;
        this.durabilityModifier = Weapon.MODIFIER_CHANGE_RATE;
    }

    protected polish(): void {}

    public use(): string {
        if(this.getDurability <= 0) {
            return `You can't use the ${this.getName}, it is broken.`;
        }

        this.decreaseDurabilityModifier();
        return `You use the ${this.getName}, dealing ${this.getDamage} points of damage. The hammer breaks.`;
    }

    public toString(): string {
        return `${this.getName} − Value: ${this.getValue}, Weight: ${this.getWeight}, Damage: ${this.getDamage}, Durability: ${this.getDurability}%`
    }

    private get getDamage(): string {
        return (this.baseDamage + this.damageModifier).toFixed(2);
    }

    private get getDurability() {
        return (this.baseDurability + this.durabilityModifier) * 100;
    }

    protected decreaseDurabilityModifier() {
        this.durabilityModifier -= Weapon.MODIFIER_CHANGE_RATE;
    }
}