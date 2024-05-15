import CharacterPng from "../../assets/character.png";
import { CanvasService } from "../common/modules/canvasService";
import { DrawingTool } from "../common/modules/drawingTool";
import { ImageService } from "../common/modules/imageService";

export class Storyline {

    private readonly canvasService: CanvasService;

    constructor(canvasService: CanvasService) {
        this.canvasService = canvasService;
    }

    public play() {
        const img = ImageService.createImage({ imageElementId: "1", imageElementSrc: CharacterPng})
        new DrawingTool(this.canvasService.context, img)
            .draw({ 
                srcX: 1536/12, srcY: 1536/12,
                srcWidth: 1536/12, srcHeight: 1536/12,
                destX: 0, destY: 0 });
    }
    
}