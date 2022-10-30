import { Comparable } from './Comparable';

let id = 0;
let counter = 0;

export abstract class Item implements Comparable<Item> {
    private id: number = id;
    protected name: string;
    protected value: number;
    protected weight: number;

    constructor(value: number, weight: number, name: string) {
        this.value = value;
        this.weight = weight;
        this.name = name;

        this.increaseCounter();
        this.increaseId();
    }

    public use(): void {}

    public compareTo(other: Item): number {
        if(this.getValue > other.getValue) {
            return 1;
        } else if(this.getValue < other.getValue) {
            return -1;
        }
        return this.getName.localeCompare(other.getName);
    }

    protected toString(): string {
        return `${this.getName} - Value: ${this.getValue}, Weight: ${this.getWeight}`;
    }

    public get getId(): number {
        return this.id;
    }

    public get getValue(): number {
        return this.value;
    }

    public get getName(): string {
        return this.name;
    }

    public get getWeight(): string {
        return this.weight.toFixed(2);
    }

    private set setId(id: number) {
        this.id = id;
    }

    private set setValue(price: number) {
        this.value = price;
    }

    private set setName(name: string) {
       this.name = name;
    }

    private set setWeight(weight: number) {
        this.weight = weight;
    }

    public static reset(): void {
        counter = 0;
    }

    static get getNumberOfItems(): number {
        return counter;
    }

    private increaseCounter() {
        counter += 1;
    }

    private increaseId() {
        id += 1;
        this.setId = id;
    }
}
