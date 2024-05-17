import { DrawingTool } from "./drawingTool";
import { ImageService } from "./imageService";
import { ESpriteState } from "../models/spriteState";
import { ISpriteStateManagementDTO } from "../models/spriteStateManagementDTO";
import { AssetManagement } from "./assetManagement";
import { TRowDTO } from "../models/rowDTO";
import { TImgMatrix } from "../models/imgMatrix";

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
        this.setSpriteActions();
    }

    protected abstract setAsset(): AssetManagement;

    private setCurrentSpriteState(currentSpriteState: ESpriteState) {
        this.spriteState = this.asset.states.find((s) => s.state === currentSpriteState);
    }

    public draw() {
        this.brush.animate(() => {
            this.frameCounter++;
            if (this.frameCounter < this.drawingSpeed) return;
            this.frameCounter = 0;

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

    private setSpriteActions() {
        const ctl = {
            moveUp: "w",
            moveDown: "s",
            moveRightKey: "d",
            moveLeftKey: "a",
        };
        let lastPressedKey = "";

        // document.addEventListener("keyup", () => {
        //     if (lastPressedKey === ctl.moveUp) {
        //         this.setCurrentSpriteState(ESpriteState.IdleUp);
        //     }
        //     if (lastPressedKey === ctl.moveRightKey) {
        //         this.setCurrentSpriteState(ESpriteState.IdleRight);
        //     }
        //     if (lastPressedKey === ctl.moveDown) {
        //         this.setCurrentSpriteState(ESpriteState.IdleDown);
        //     }
        //     if (lastPressedKey === ctl.moveLeftKey) {
        //         this.setCurrentSpriteState(ESpriteState.IdleLeft);
        //     }
        // });

        document.addEventListener("keydown", (event) => {
            this.drawingSpeed = this.drawingSpeedBase * 0.75;
            const distance = 3;
            if (event.key === ctl.moveRightKey) {
                lastPressedKey = ctl.moveRightKey;
                this.destX += distance;
                this.setCurrentSpriteState(ESpriteState.WalkingRight);
            }
            if (event.key === ctl.moveLeftKey) {
                this.destX -= distance;
                this.setCurrentSpriteState(ESpriteState.WalkingLeft);
            }
            if (event.key === ctl.moveUp) {
                this.destY -= distance;
                this.setCurrentSpriteState(ESpriteState.WalkingUp);
            }
            if (event.key === ctl.moveDown) {
                this.destY += distance;
                this.setCurrentSpriteState(ESpriteState.WalkingDown);
            }
        });
    }
}