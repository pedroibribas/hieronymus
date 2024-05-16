import { DrawingTool } from "../common/modules/drawingTool";
import { OldManHeroSprite } from "../sprites/oldManHeroSprite";

export class TestMap {
    static init(brush: DrawingTool) {
        new OldManHeroSprite(brush).draw();
    }
}