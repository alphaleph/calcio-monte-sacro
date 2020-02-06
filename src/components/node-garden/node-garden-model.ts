import Node from './node';

export default class NodeGardenModel {
    nodes: Node[];
    xBoundary: number;
    yBoundary: number;

    constructor(xBoundary: number, yBoundary: number) {
        this.nodes = [];
        this.xBoundary = xBoundary;
        this.yBoundary = yBoundary;
    }

    initNodes(numNodes: number) {
        // create nodes
        let newNodes = [];
        for (let i = 0; i < numNodes; i++) {
            newNodes[i] = new Node(this.xBoundary, this.yBoundary);
        }
        this.nodes = newNodes;
    }

    resetNodes(xBoundary: number, yBoundary: number, numNodes: number) {
        this.xBoundary = xBoundary;
        this.yBoundary = yBoundary;
        this.initNodes(numNodes);
    }

    render(
        isAnimate: boolean,
        ctx: CanvasRenderingContext2D,
        deltaTime: number
    ) {
        // clear canvas
        ctx.fillStyle = '#000918';
        ctx.fillRect(0, 0, this.xBoundary, this.yBoundary);

        if (isAnimate) {
            // update links
            for (let i = 0; i < this.nodes.length - 1; i++) {
                const nodeA = this.nodes[i];
                for (let j = i + 1; j < this.nodes.length; j++) {
                    const nodeB = this.nodes[j];
                    const squaredDistance = nodeA.squaredDistanceTo(nodeB);

                    // calculate gravity force
                    const force = (3 * (nodeA.m * nodeB.m)) / squaredDistance;

                    const opacity = force * 100;

                    if (opacity < 0.025) {
                        continue;
                    }

                    if (
                        squaredDistance <=
                        (nodeA.m / 2 + nodeB.m / 2) *
                            (nodeA.m / 2 + nodeB.m / 2)
                    ) {
                        // collision: remove smaller or equal - never both of them
                        if (nodeA.m <= nodeB.m) {
                            nodeA.collideTo(nodeB);
                        } else {
                            nodeB.collideTo(nodeA);
                        }
                        continue;
                    }

                    const distance = nodeA.distanceTo(nodeB);

                    // calculate gravity direction
                    const direction = {
                        x: distance.x / distance.total,
                        y: distance.y / distance.total,
                    };

                    // draw gravity lines
                    ctx.beginPath();
                    ctx.strokeStyle =
                        'rgba(191,191,191,' + (opacity < 1 ? opacity : 1) + ')';
                    ctx.moveTo(nodeA.x, nodeA.y);
                    ctx.lineTo(nodeB.x, nodeB.y);
                    ctx.stroke();

                    nodeA.addForce(force, direction);
                    nodeB.addForce(-force, direction);
                }
            }
        }

        // render and update nodes
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].render(ctx);
            if (isAnimate) {
                this.nodes[i].update(deltaTime || 0);
            }
        }
    }
}
