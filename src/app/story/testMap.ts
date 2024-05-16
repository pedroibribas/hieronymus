import { SpriteState } from "../common/models/spriteState";
import { CanvasService } from "../common/modules/canvasService";
import { DrawingTool } from "../common/modules/drawingTool";
import { OldManHeroSprite } from "../sprites/oldManHeroSprite";
import { Warrior } from "../sprites/warrior";

export class TestMap {

    static init(brush: DrawingTool) {
        // new OldManHeroSprite(brush).draw();
        new Warrior(brush, {
            destX: CanvasService.getCanvasById("canvas_main").width / 2 - 96 / 3,
            destY: CanvasService.getCanvasById("canvas_main").height / 2 - 144 / 4,
            scale: 1.25,
            initialState: SpriteState.WalkingDown
        }).draw();
    }
}