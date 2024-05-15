/**
 * Initializes and provides HTMLCanvasElement properties.
 */
export class CanvasAPI {

    public readonly element: HTMLCanvasElement;
    public readonly context: CanvasRenderingContext2D;

    constructor() {
        this.element = this.createCanvasElement();
        this.context = this.element.getContext("2d");
    }

    private createCanvasElement(): HTMLCanvasElement {
        const canvasElement = document.createElement("canvas");
        canvasElement.id = "canvas";
        canvasElement.style.border = "5px solid black";
        document.body.appendChild(canvasElement);
        return canvasElement;
    }

}