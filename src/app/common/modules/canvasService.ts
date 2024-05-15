import { ICanvasDimensions } from "../models/canvasDimensions";

/**
 * Initializes and provides HTMLCanvasElement properties.
 */
export class CanvasService {

    public readonly element: HTMLCanvasElement;
    public readonly context: CanvasRenderingContext2D;

    constructor(dimensions: ICanvasDimensions) {
        this.element = this.createCanvasElement(dimensions);
        this.context = this.element.getContext("2d");
    }

    private createCanvasElement(dimensions: ICanvasDimensions): HTMLCanvasElement {
        const canvasElement = document.createElement("canvas");
        canvasElement.id = "canvas";
        canvasElement.style.border = "5px solid black";
        canvasElement.style.width = dimensions.width;
        canvasElement.style.height = dimensions.height;
        document.body.appendChild(canvasElement);
        return canvasElement;
    }

}