import { IDrawImageOnCanvasDTO } from "../models/drawImageOnCanvasDto";
import { ImageService } from "./imageService";

export class DrawingTool {

    private readonly canvasContext: CanvasRenderingContext2D;

    constructor(canvasContext: CanvasRenderingContext2D) {
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
}