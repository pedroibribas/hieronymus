import { CanvasAPI } from "../common/canvasApi";
import { OldMainCharacterAsset } from "../imageAsset/oldMainCharacterAsset";
/**
 *
 */
export class Scripting {

    private readonly canvasAPI: CanvasAPI;

    constructor(canvasAPI: CanvasAPI) {
        this.canvasAPI = canvasAPI;
    }

    public play() {
        const testChar = new OldMainCharacterAsset(this.canvasAPI.context);
        testChar.draw();
    }
    
}