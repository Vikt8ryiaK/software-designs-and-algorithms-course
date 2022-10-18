import { ItemComparator } from './ItemComparator';
import { Item } from './Item';

export class Inventory implements ItemComparator {
    private items: Item[];

    constructor() {
        this.items = [];
    }

    public addItem(item: Item): void {
        this.items = [...this.items, item]
    }

    public compare(first: Item, second: Item): number {
        if (first.getWeight < second.getWeight) {
            return -1;
        }
        if (first.getWeight > second.getWeight ){
            return 1;
        }
        return 0;
    }

    public sort(): void;
    public sort(comparator: ItemComparator): void;
    public sort(comparator?: ItemComparator): void {
        if(comparator) {
            this.items.sort((a, b) => this.compare(a, b));
        } else {
            this.items.sort((a, b) => a.compareTo(b));
        }
    }

    toString(): string {
        return this.items.join(', ');
    }
}