import { CanvasAPI } from "./common/canvasApi";
import { Scripting } from "./scripting/scripting";

export class App {
    static init() {
        new Scripting(new CanvasAPI())
            .play();
    }
}