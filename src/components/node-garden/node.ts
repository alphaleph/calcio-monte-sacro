const targetFPS = 1000 / 60;

export default class Node {
    xBoundary: number;
    yBoundary: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    m: number;

    constructor(xBoundary: number, yBoundary: number) {
        this.xBoundary = xBoundary;
        this.yBoundary = yBoundary;
        this.x = Math.random() * xBoundary;
        this.y = Math.random() * yBoundary;
        this.vx = Math.random() * 0.5 - 0.25;
        this.vy = Math.random() * 0.5 - 0.25;
        this.m = Math.random() * 2 + 0.5;
    }

    reset() {
        this.x = Math.random() * this.xBoundary;
        this.y = Math.random() * this.yBoundary;
        this.vx = Math.random() * 0.5 - 0.25;
        this.vy = Math.random() * 0.5 - 0.25;
        this.m = Math.random() * 2 + 0.5;
    }

    addForce(force: number, direction: { x: number; y: number }) {
        this.vx += (force * direction.x) / this.m;
        this.vy += (force * direction.y) / this.m;
    }

    distanceTo(node: Node) {
        const x = node.x - this.x;
        const y = node.y - this.y;
        const total = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

        return { x, y, total };
    }

    update(deltaTime: number) {
        this.x += (this.vx * deltaTime) / targetFPS;
        this.y += (this.vy * deltaTime) / targetFPS;

        if (
            this.x > this.xBoundary + 50 ||
            this.x < -50 ||
            this.y > this.yBoundary + 50 ||
            this.y < -50
        ) {
            // if node over screen limits - reset to a init position
            this.reset();
        }
    }

    squaredDistanceTo(node: Node) {
        return (
            (node.x - this.x) * (node.x - this.x) +
            (node.y - this.y) * (node.y - this.y)
        );
    }

    collideTo(node: Node) {
        node.vx =
            (node.m * node.vx) / (this.m + node.m) +
            (this.m * this.vx) / (this.m + node.m);
        node.vy =
            (node.m * node.vy) / (this.m + node.m) +
            (this.m * this.vy) / (this.m + node.m);

        this.reset();
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = 'rgba(223, 238, 255, .8)';
        ctx.fillStyle = 'rgba(223, 238, 255, .8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.getDiameter(), 0, 2 * Math.PI);
        ctx.fill();
    }

    getDiameter() {
        return this.m;
    }
}
