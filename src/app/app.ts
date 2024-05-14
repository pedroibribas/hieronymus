import { Canvas } from "./common/canvas";
import { Scripting } from "./common/scripting";

export class App {
    static init() {
        console.log("Type App detected.");
        Canvas.test();
        Scripting.test();
    }
}