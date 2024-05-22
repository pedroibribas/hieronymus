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

export abstract class Button {
    private readonly props: IButtonProps;

    constructor(canvas: HTMLCanvasElement, dto: IButtonDTO, action: () => void) {
        this.props = this.setButtonProps(dto);
        canvas.addEventListener("click", (event) => {
            const clickPosition = DOMElementHandler.getMousePositionOnCanvas(event, canvas);
            if (clickPosition.x > this.props.posX
                && clickPosition.x < this.props.posX + this.props.width
                && clickPosition.y > this.props.posY
                && clickPosition.y < this.props.posY + this.props.height) {
                    action();
            }
        });
        const context = canvas.getContext("2d");
        this.draw(context, this.props);
    }

    protected abstract setButtonProps(dto: IButtonDTO): IButtonProps;

    private draw(ctx: CanvasRenderingContext2D, props: IButtonProps) {
        ctx.beginPath();
        ctx.rect(props.posX, props.posY, props.width, props.height);
        ctx.fillStyle = props.bgColor;
        ctx.fill();
        ctx.lineWidth = props.borderWidth;
        ctx.strokeStyle = props.borderClr;
        ctx.stroke();
        ctx.closePath();
        ctx.font = props.font;
        ctx.fillStyle = props.textClr;
        ctx.fillText(
            props.title,
            props.posX + props.width / 4,
            props.posY + props.height /1.7
        );
    }
}
