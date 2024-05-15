import { CanvasAPI } from "./common/canvasApi";
import { Scripting } from "./scripting/scripting";

export class App {
    static init() {
        new Scripting(new CanvasAPI({
            width: 400,
            height: 400
        })).play();
    }
}