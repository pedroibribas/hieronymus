export class CanvasService {

    public static createCanvasElement(id: string, width: number, height: number, styles: { property: string, value: string }[]): HTMLCanvasElement {
        const canvas = document.createElement("canvas");
        canvas.id = id;
        canvas.width = width;
        canvas.height = height;
        styles.forEach((style) =>
            canvas.style.setProperty(style.property, style.value));
        document.body.appendChild(canvas);
        return canvas;
    }

    public static getCanvasById(id: string): HTMLCanvasElement {
        return document.getElementById(id) as HTMLCanvasElement;
    }

    public static getCanvasDimensionsById(id: string): { w: number, h: number } {
        const canvas = document.getElementById(id) as HTMLCanvasElement;
        return { w: canvas.width, h: canvas.height };
    }

    public static centerX(canvas: HTMLCanvasElement, elementWidth: number) {
        return canvas.width/2 - elementWidth / 2;
    }

    public static centerBottomX(canvas: HTMLCanvasElement, elementWidth: number) {
        return canvas.width - elementWidth - canvas.width/16;
    }

    public static centerY(canvas: HTMLCanvasElement, elementHeight: number) {
        return canvas.height/2 - elementHeight / 2;
    }

    public static centerRightY(canvas: HTMLCanvasElement, elementHeight: number) {
        return canvas.height - elementHeight - canvas.height/16;
    }

}