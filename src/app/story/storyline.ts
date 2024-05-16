import { CanvasService } from "../common/modules/canvasService";
import { DrawingTool } from "../common/modules/drawingTool";
import { OldManHeroSprite } from "../sprites/oldManHeroSprite";

export class Storyline {

    private readonly canvasService: CanvasService;
    private readonly drawingTool: DrawingTool;

    constructor(canvasService: CanvasService) {
        this.canvasService = canvasService;
        this.drawingTool = new DrawingTool(
            canvasService.element,
            canvasService.context);
    }

    public play() {
        const sprite = new OldManHeroSprite(this.drawingTool);
        sprite.draw();
    }
    
}