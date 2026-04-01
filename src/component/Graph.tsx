
type graphProps = {
    a: number;
    b: number;
    c: number;
    d: number;

}
export const Graph = ({a, b, c, d}: graphProps) => {
        /* const canvas = document.getElementById("graph") as HTMLCanvasElement;
        const width: number = 400;
        const height: number = 400;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        ctx.resetTransform();
        ctx.clearRect(0, 0, width, height);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2)
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(width / 2, 0);
        ctx.lineTo(width / 2, height);
        ctx.stroke();
        ctx.translate(width / 2, height / 2);
        ctx.beginPath();
        let y: number = 0;
        ctx.lineWidth = 3;
        for (let i = -width / 2; i <= width; i++) {
            const x = i / 30;
            y = -((a * (x ** 3)) + (b * (x ** 2)) + (c * x) + d) * 30
            if (i === -width / 2) {
                ctx.moveTo(i, y);
            } else {
                ctx.lineTo(i, y);
            }
        } */
    return (
    <div>
        <canvas id="graph" width="400" height="400"></canvas>
    </div>
)
}