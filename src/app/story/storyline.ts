import { DrawingTool } from "../common/modules/drawingTool";
import { OldManHeroSprite } from "../sprites/oldManHeroSprite";

export class Storyline {
    public static play(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        const brush = new DrawingTool(canvas, context);
        TestMap.init(brush);
    }
}

export class TestMap {
    static init( brush: DrawingTool) {
        new OldManHeroSprite(brush).draw({ atX:0, atY: 0});
    }
}