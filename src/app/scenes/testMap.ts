import { ESpriteState } from "../common/models/spriteState";
import { CanvasService } from "../common/modules/canvasService";
import { DrawingTool } from "../common/modules/drawingTool";
import { Warrior } from "../sprites/warrior";
import { ButtonDefault } from "../sprites/buttonDefault";
import { Dialog } from "../common/modules/dialog";

export class TestMap {

    private brush: DrawingTool;
    private canvasDimensions: { w: number; h: number; };
    canvas: HTMLCanvasElement;

    constructor(brush: DrawingTool) {
        this.brush = brush;
        this.canvasDimensions = CanvasService.getCanvasDimensionsById("canvas_main");
        this.canvas = CanvasService.getCanvasById("canvas_main");
    }

    public test_intro(): void {
        new Dialog(
            this.canvas,
            [
                "Olá.",
                "Seja bem-vindo!",
                "Tecle ENTER para começar."
            ]
        );
    }

    private startBtn() {
        const btnWidth = 200;
        const btnHeight = 75;
        new ButtonDefault(
            this.canvas,
            {
                posX: CanvasService.centerBottomX(this.canvas, btnWidth),
                posY: CanvasService.centerRightY(this.canvas, btnHeight),
                width: btnWidth,
                height: btnHeight,
                title: "Iniciar",
                fontSize: "20"
            },
            () => {
                console.log("bang");
                
            }
        );
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