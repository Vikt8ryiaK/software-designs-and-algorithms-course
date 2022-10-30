import { Item } from './Item';

export abstract class Consumable extends Item {
    private consumed: boolean;
    private spoiled: boolean;

    constructor(spoiled: boolean, value: number, weight: number, name: string) {
        super(value, weight, name);
        this.spoiled = spoiled;
        this.consumed = false;
    }

    public use(): string {
        if(!this.consumed){
            return this.eat();
        }
        return `There is nothing left of the ${this.name} to consume.`;
    }

    protected eat(): string {
        const eatenText = `You eat the ${this.name}.`;
        const spoiledText = this.spoiled ? ' You feel sick.' : '';
        return `${eatenText}${spoiledText}`
    }

    private isConsumed(): boolean {
        return this.consumed;
    }

    protected setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }
}