export class Point {
    private x: number;
    private y: number;
    private basePoint: {x: number, y: number}

    constructor(x?: number, y?: number) {
        this.x = x || 0;
        this.y = y || 0;
        this.basePoint = {x: 0, y: 0}
    }

    public toString() {
        return `(${this.x}, ${this.y})`
    }

    distance(): number;
    distance(other: Point): number;
    distance(x: number, y: number): number;
    distance(other?: Point | number, y?: number): number {
        let xDistance: number = this.basePoint.x;
        let yDistance: number = this.basePoint.y;

         if(other instanceof Point) {
            xDistance = other.x;
            yDistance = other.y;
         } else if (typeof other === 'number' && typeof y === 'number') {
            xDistance = other;
            yDistance = y;
         }

         return parseFloat(Math.sqrt(Math.pow(xDistance - this.x, 2) + Math.pow(yDistance - this.y, 2)).toFixed(1));
    }
}
