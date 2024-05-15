import { CanvasAPI } from "../common/canvasApi";
import CharacterPng from "../../assets/character.png";
import { DrawingImage } from "../drawing/drawingImage";

/**
 *
 */
export class Scripting {

    private readonly canvasAPI: CanvasAPI;

    constructor(canvasAPI: CanvasAPI) {
        this.canvasAPI = canvasAPI;
    }

    public play() {
        // new DrawingImage(this.canvasAPI, CharacterPng)
        //     .drawRawImage({ destX: 0, destY: 0 });
        new DrawingImage(this.canvasAPI, CharacterPng)
            .draw({ 
                srcX: 1536/12, srcY: 1536/12,
                srcWidth: 1536/12, srcHeight: 1536/12,
                destX: 0, destY: 0 });
    }
    
}