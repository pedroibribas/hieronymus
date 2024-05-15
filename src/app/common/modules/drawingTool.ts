import { IDrawImageOnCanvasDTO } from "../models/drawImageOnCanvasDto";

export class DrawingTool {

    private readonly canvasContext: CanvasRenderingContext2D;
    private readonly imageElement: HTMLImageElement;

    constructor(
        canvasContext: CanvasRenderingContext2D,
        imageElement: HTMLImageElement
    ) {
        this.canvasContext = canvasContext;
        this.imageElement = imageElement;
    }

    public draw(data: IDrawImageOnCanvasDTO) {
        this.imageElement.addEventListener("load", () => {
            this.canvasContext.drawImage(
                this.imageElement,
                data.srcX, data.srcY,
                data.srcWidth, data.srcHeight,
                data.destX, data.destY,
                data.srcWidth, data.srcHeight,
            );
        });
    }
}