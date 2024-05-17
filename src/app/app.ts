import { CanvasService } from "./common/modules/canvasService";
import { Storyline } from "./scenes/storyline";

export class App {

    static init() {
        document.body.style.backgroundColor = "#D6D6";
        const width = 800;
        const dimensionsProportion = 0.7;
        const canvas = CanvasService.createCanvasElement(
            `canvas_main`,
            800,
            width * dimensionsProportion,
            [
                { property: "display", value: "block" },
                { property: "margin", value: "0 auto" },
                { property: "background-color", value: "#FFF" },
                { property: "border", value: "5px solid #000" },
            ]
        );
        document.body.appendChild(canvas);

        const ctx = canvas.getContext("2d");

        Storyline.play(canvas, ctx);
    }

}