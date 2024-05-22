import { IButtonProps } from "../models/buttonProps";
import { DOMElementHandler } from "./domElementHandler";

export interface IButtonDTO {
    posX: number,
    posY: number,
    width: number,
    height: number,
    title: string,
    fontSize: string
}

export class Dialog {

    constructor(canvas: HTMLCanvasElement, text: string[] ) {
        canvas.addEventListener("keydown", (event) => {
            console.log(event.code);
        });
        this.draw(canvas, text);
    }

    private draw(canvas: HTMLCanvasElement, text: string[]) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();

        const boxX = 75;
        const boxY = 75;
        const boxW = canvas.width - (boxX * 2);
        const boxH = canvas.height - (boxY * 2);
        
        const fontSize = 20;
        const textX = boxX + 25;

        ctx.rect(boxX, boxY, boxW, boxH);
        ctx.fillStyle = "#e6e6fa";
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#4b0082";
        ctx.stroke();
        ctx.closePath();

        let textYMultipler = 1;
        for (let i = 0; i < text.length; i++) {
            let textY = boxY + fontSize + 50;
            ctx.font = `${fontSize}pt Arial`;
            ctx.fillStyle = "#000";
            if (i > 0) {
                textY = textY + (fontSize + 10);
            }

            ctx.fillText(
                text[i],
                textX,
                (textY));

            textYMultipler++;
        }
    }
}
