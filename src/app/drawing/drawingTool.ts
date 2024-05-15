import { CanvasAPI } from "../common/canvasApi";

interface IDrawImageOnCanvasDTO { srcX: number, srcY: number, srcWidth: number, srcHeight: number, destX: number, destY: number }
// interface IDrawDynamicImageOnCanvasDTO { image: IDrawImageOnCanvasDTO, state: IImageState }
// interface IDrawStaticImageOnCanvasDTO { srcX: number, srcY: number, srcWidth: number, srcHeight: number, destX: number, destY: number }
/**
 * Element to be drawn on canvas.
 */
export class DrawingTool {

    // private readonly canvasElement: HTMLCanvasElement;
    private readonly canvasContext: CanvasRenderingContext2D;
    private readonly imageElement: HTMLImageElement;
    private readonly imageElementSrc: string;
    private readonly imageElementId: string;

    constructor(canvasContext: CanvasRenderingContext2D, imageElementSrc: string, imageElementId: string) {
        this.canvasContext = canvasContext;
        this.imageElement = new Image();
        this.imageElementSrc = imageElementSrc;
        this.imageElementId = imageElementId;
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
        })
        this.imageElement.src = this.imageElementSrc;
    }
    
    // public drawDynamicImage(dto: IDrawDynamicImageOnCanvasDTO) {
    //     for (let i = 0; i < dto.state.spritesAmount; i++) {
    //         // this.draw();
    //     }
    // }

}