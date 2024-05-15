import { CanvasService } from "../common/modules/canvasService";
import { OldManHeroSprite } from "../sprites/oldManHeroSprite";

export class Storyline {

    private readonly canvasService: CanvasService;

    constructor(canvasService: CanvasService) {
        this.canvasService = canvasService;
    }

    public play() {
        const sprite = new OldManHeroSprite(this.canvasService.context)
        sprite.draw();
    }
    
}