import { CanvasService } from "./common/modules/canvasService";
import { Storyline } from "./story/storyline";

export class App {
    static init() {
        new Storyline(
            new CanvasService({ width: "500px", height: "250px" }))
            .play();
    }
}