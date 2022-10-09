import { Shape } from './Shape';
import { Point } from './Point';

export class Triangle extends Shape {
    constructor(point1: Point, point2: Point, point3: Point, color: string, filled: boolean) {
        super([point1, point2, point3], color, filled);
    }

    toString(): string {
        return `Triangle[${this.points.map((point, i) => `v${i + 1}=${point.toString()}`)}]`
    }

    getType(): string {
        const t1 = this.points[0].distance(this.points[1]);
        const t2 = this.points[1].distance(this.points[2]);
        const t3 = this.points[2].distance(this.points[0]);

        if(t1 === t2 && t2 === t3 && t3 === t1) {
            return "equilateral triangle";
        } 
        if (t1 === t2 || t2 === t3 || t3 === t1) {
            return "isosceles triangle";
        }
        return "scalene triangle";
    }
}
