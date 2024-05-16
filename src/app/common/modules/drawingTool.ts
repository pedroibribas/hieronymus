import { IDrawImageOnCanvasDTO } from "../models/drawImageOnCanvasDto";
import { ImageService } from "./imageService";

export class DrawingTool {

    private readonly canvasElement: HTMLCanvasElement;
    private readonly canvasContext: CanvasRenderingContext2D;

    constructor(canvasElement: HTMLCanvasElement, canvasContext: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.canvasContext = canvasContext;
    }

    public draw(dto: IDrawImageOnCanvasDTO) {
        ImageService.setOnLoad(dto.imageElement, () => {
            this.canvasContext.drawImage(
                dto.imageElement,
                dto.srcX, dto.srcY,
                dto.srcWidth, dto.srcHeight,
                dto.destX, dto.destY,
                dto.srcWidth, dto.srcHeight,
            );
        });
    }

    public drawFrame(dto: IDrawImageOnCanvasDTO) {
        this.clearCanvas();
        ImageService.setOnLoad(dto.imageElement, () => {
            this.canvasContext.drawImage(
                dto.imageElement,
                dto.srcX,
                dto.srcY,
                dto.srcWidth, dto.srcHeight,
                dto.destX, dto.destY,
                dto.srcWidth, dto.srcHeight
            );
        });
    }

    private clearCanvas() {
        this.canvasContext.clearRect(
            0,
            0,
            this.canvasElement.width,
            this.canvasElement.height);
    }
}