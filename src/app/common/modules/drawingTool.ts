import { IDrawImageOnCanvasDTO } from "../models/drawImageOnCanvasDto";

export class DrawingTool {

    private readonly canvasElement: HTMLCanvasElement;
    private readonly canvasContext: CanvasRenderingContext2D;

    constructor(canvasElement: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.canvasContext = canvasContext;
    }

    public drawFrame(dto: IDrawImageOnCanvasDTO) {
        this.canvasContext.drawImage(
            dto.img,
            dto.srcX, dto.srcY, dto.srcW, dto.srcH,
            dto.destX, dto.destY, dto.srcW * dto.scale, dto.srcH * dto.scale,
        );        
    }
    public clearCanvas() {
        this.canvasContext.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }

    public animate(action: () => void) {
        function handler() {
            action();
            window.requestAnimationFrame(handler);
        };
        window.requestAnimationFrame(handler);
    }
}