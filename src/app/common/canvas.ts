export class Canvas {

    public create() {
        const canvasElement : HTMLCanvasElement = document.createElement("canvas");
        canvasElement.id = "canvas";
        canvasElement.style.border = "3px solid black";
        document.body.appendChild(canvasElement);
    }
    
    static test() {
        console.log("TEST Hello, World!");
    }
}