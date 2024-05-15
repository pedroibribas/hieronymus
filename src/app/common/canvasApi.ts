interface IDimensions { width: number, height: number }
/**
 * Initializes and provides HTMLCanvasElement properties.
 */
export class CanvasAPI {

    public readonly element: HTMLCanvasElement;
    public readonly context: CanvasRenderingContext2D;

    constructor(dimensions: IDimensions) {
        this.element = this.createCanvasElement(dimensions);
        this.context = this.element.getContext("2d");
    }

    private createCanvasElement(dimensions: IDimensions): HTMLCanvasElement {
        const canvasElement = document.createElement("canvas");
        canvasElement.id = "canvas";
        canvasElement.width = dimensions.width;
        canvasElement.height = dimensions.height;
        canvasElement.style.border = "5px solid black";
        document.body.appendChild(canvasElement);
        return canvasElement;
    }

}