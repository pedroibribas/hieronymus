import { DrawingTool } from "../common/modules/drawingTool";
import { TestMap } from "./testMap";

export class Storyline {
    public static play(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        const brush = new DrawingTool(canvas, context);
        TestMap.init(brush);
    }
}

