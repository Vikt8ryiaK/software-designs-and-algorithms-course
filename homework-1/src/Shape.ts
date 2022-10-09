import { Point } from './Point';

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    constructor(points: Point[]);
    constructor(points: Point[], color: string, filled: boolean);
    constructor(points: Point[], color?: string, filled?: boolean) {
        this.color = color ?? "green";
        this.filled = filled ?? true;

        if(points.length < 3) throw new Error('Shape should contain at least 3 points');
        this.points = points;
    }

    abstract getType(): string;

    toString(): string {
        const filledContent = `${this.filled ? '' : 'not '}filled`;
        const pointsContent = this.points.map(point => ` ${point.toString()}`);
        return `A Shape with color of ${this.color} and ${filledContent}. Points:${pointsContent}.`
    }

    getPerimeter() {
        return this.points.reduce((partialSum, point, i) => partialSum + point.distance(this.points[i + 1]), 0);
    }
}
  