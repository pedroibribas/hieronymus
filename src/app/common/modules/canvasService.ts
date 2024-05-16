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

}