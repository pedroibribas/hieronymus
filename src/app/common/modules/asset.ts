import { DrawingTool } from "./drawingTool";
import { ImageService } from "./imageService";
import { ESpriteState } from "../models/spriteState";
import { ISpriteStateManagementDTO } from "../models/spriteStateManagementDTO";
import { AssetManagement } from "./assetManagement";
import { TRowDTO } from "../models/rowDTO";
import { TImgMatrix } from "../models/imgMatrix";
import { GameKeys } from "../models/gameKeys";

export abstract class Asset {
    private readonly brush: DrawingTool;
    private readonly asset: AssetManagement;
    private readonly imageElement: HTMLImageElement;

    private xColCounter: number;
    private drawingSpeedBase: number;
    private drawingSpeed: number;
    private frameCounter: number;
    private spriteState: ISpriteStateManagementDTO;
    private destX: number;
    private destY: number;
    private scale: number;

    private isPressed: { [key: string]: boolean };

    constructor(
        brush: DrawingTool,
        dto: { destX: number, destY: number, scale: number, initialState: ESpriteState }
    ) {
        this.asset = this.setAsset();

        this.brush = brush;
        this.frameCounter = 0;
        this.xColCounter = 0;
        this.drawingSpeedBase = 6;
        this.drawingSpeed = this.drawingSpeedBase;
        this.destX = dto.destX;
        this.destY = dto.destY;
        this.scale = dto.scale;

        this.imageElement = ImageService.createImage({
            imageElementId: this.asset.imageId,
            imageElementSrc: this.asset.imageSrc
        });

        this.setCurrentSpriteState(dto.initialState);

        this.isPressed = {
            KeyW: false,
            KeyD: false,
            KeyS: false,
            KeyA: false,
        };

        window.addEventListener("keydown", (event) => {
            if (event.code in this.isPressed) {
                this.isPressed[event.code] = true;
            };
        }, false);
        window.addEventListener("keyup", (event) => {
            event.preventDefault();
            if (event.code in this.isPressed) {
                this.isPressed[event.code] = false;
                console.log(event.code);
                if (event.code === GameKeys.KeyW) this.setCurrentSpriteState(ESpriteState.IdleUp);
                else if (event.code === GameKeys.KeyD) this.setCurrentSpriteState(ESpriteState.IdleRight);
                else if (event.code === GameKeys.KeyS) this.setCurrentSpriteState(ESpriteState.IdleDown);
                else if (event.code === GameKeys.KeyA) this.setCurrentSpriteState(ESpriteState.IdleLeft);
            }
        }, false);
    }

    protected abstract setAsset(): AssetManagement;

    private setCurrentSpriteState(currentSpriteState: ESpriteState) {
        this.spriteState = this.asset.states.find((s) => s.state === currentSpriteState);
    }

    public draw() {
        this.brush.animate(() => {

            if (this.isPressed[GameKeys.KeyW]) this.move(0, -3, ESpriteState.WalkingUp);
            else if (this.isPressed[GameKeys.KeyD]) this.move(3, 0, ESpriteState.WalkingRight);
            else if (this.isPressed[GameKeys.KeyS]) this.move(0, 3, ESpriteState.WalkingDown);
            else if (this.isPressed[GameKeys.KeyA]) this.move(-3, 0, ESpriteState.WalkingLeft);

            this.frameCounter++;
            if (this.frameCounter < this.drawingSpeed) return;
            this.frameCounter = 0;

            this.brush.clearCanvas();
            this.brush.drawFrame({
                img: this.imageElement,
                srcX: this.spriteState.srcX[this.xColCounter],
                srcY: this.spriteState.srcY,
                srcW: this.spriteState.width,
                srcH: this.spriteState.height,
                destX: this.destX,
                destY: this.destY,
                scale: this.scale
            });

            this.xColCounter++;
            if (this.xColCounter === this.spriteState.srcX.length) {
                this.xColCounter = 0;
            }
        });
    }

    private move(onX: number, onY: number, state: ESpriteState) {
        if (onX !== 0) this.destX += onX;
        if (onY !== 0) this.destY += onY;
        this.setCurrentSpriteState(state);
    }

    /**
     * Cria dinamicamente uma representação matricial de linhas-colunas da imagem fonte
     * @param rows Nº de colunas por linha da imagem, largura e altura de um sprite
     * @returns [{ rPosition1: [cPosition1, cPosition2, ...]}, {...}]
     */
    protected calcImgMatrix(rows: TRowDTO): TImgMatrix {
        const matrix: TImgMatrix = [];

        let widthMultiplier = 0;
        let heightMultiplier = 0;

        for (let i = 0; i < rows.length; i++) {
            const rowPosition: number = rows[i].spriteH * heightMultiplier;
            heightMultiplier++;

            const colsPositions: number[] = [];
            for (let j = 0; j < rows[i].colsCount; j++) {
                const colPosition = rows[i].spriteW * widthMultiplier;
                colsPositions.push(colPosition);
                widthMultiplier++;
            }

            matrix.push({ colsPositions, rowPosition });
            widthMultiplier = 0;
        }

        return matrix;
    }
}