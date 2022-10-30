import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
    private numberOfSlices: number;
    private slicesEathen: number = 0;

    constructor(numberOfSlices: number, spoiled: boolean, value: number = 0, weight: number = 0, name: string = "pizza") {
        super(spoiled, value, weight, name);
        this.numberOfSlices = numberOfSlices;
    }

    protected eat(): string {
        if (this.slicesEathen < this.numberOfSlices) {
            this.slicesEathen++;

            if(this.slicesEathen >= this.numberOfSlices) {
                this.setConsumed(true);
            }

            return 'You ate a slice of the pizza';
        } else {
            return '';
        }
    }
}