import { CanvasAPI } from "../common/canvasApi";

/**
 * Element to be drawn on canvas.
 */
export class DrawingImage {

    private readonly canvasElement: HTMLCanvasElement;
    private readonly canvasContext: CanvasRenderingContext2D;
    private readonly imageElement: HTMLImageElement;
    private readonly imageElementSrc: string;

    constructor(canvasAPI: CanvasAPI, imageElementSrc: string) {
        const { element, context } = canvasAPI;
        this.canvasElement = element;
        this.canvasContext = context;
        this.imageElement = new Image();
        this.imageElementSrc = imageElementSrc;
    }

    public draw(data: { srcX: number, srcY: number, srcWidth: number, srcHeight: number, destX: number, destY: number }) {
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
    
    public drawDynamicImage() {
        const imageData = {
            width: 1536,
            height: 1536,
            maxSpritesNumber: 12,
            states: [
                {type:0,spritesNumber:6}, 
                {1:8}, {2:6}, {3:8}, {4:3}, {5:5}, {6:10}, {7:10}, {8:5}, {9:12}, {10:12}, {11:6}
            ]
        };

        const imageStatesMap = [];
        imageData.states.forEach((state) => {
            // GERA LISTA DE POSIÇÕES Y DO ESTADO
            let x = [];
            for (let i = 0; i < state.spritesNumber; i++) {
                let multiplier = 1;
                x.push(imageData.width/imageData.maxSpritesNumber * multiplier); //todo 12
                multiplier++;
            }
            // GERA ESTADO
            imageStatesMap.push({
                    state: state.type,
                    positionY: imageData.height * (state.type + 1),
                    x,
                    width: imageData.width/imageData.maxSpritesNumber,
                    height: imageData.height/imageData.states.length,
                }
            );
        });

        // const state = imageData.states[0];
        // for (let i = 0; i < state.spritesNumber; i++) { //todo [0]
        //     // this.draw();
        // }
    }

}