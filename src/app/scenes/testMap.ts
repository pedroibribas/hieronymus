import { ESpriteState } from "../common/models/spriteState";
import { CanvasService } from "../common/modules/canvasService";
import { DrawingTool } from "../common/modules/drawingTool";
import { Warrior } from "../sprites/warrior";

export class TestMap {

    private brush: DrawingTool;
    private canvasDimensions: { w: number; h: number; };

    constructor(brush: DrawingTool) {
        this.brush = brush;
        this.canvasDimensions = CanvasService.getCanvasDimensionsById("canvas_main");
    }

    public init() {
        this.spriteTwo().draw();
    }

    private spriteTwo(): Warrior {
        return new Warrior(
            this.brush,
            {
                destX: this.canvasDimensions.w / 2 - 96 / 3,
                destY: this.canvasDimensions.h / 2 - 144 / 4,
                scale: 1.25,
                initialState: ESpriteState.IdleDown
            });
    }
}