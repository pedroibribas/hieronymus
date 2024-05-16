import { DrawingTool } from "../common/modules/drawingTool";
import { ImageService } from "../common/modules/imageService";
import { SpriteState } from "../common/models/spriteState";
import { AssetManagement } from "./assetManagement";
import { CanvasService } from "../common/modules/canvasService";
import { ISpriteStateManagementDTO } from "./spriteStateManagementDTO";

export abstract class Asset {

    private readonly brush: DrawingTool;
    private readonly asset: AssetManagement;
    private readonly imageElement: HTMLImageElement;
    spriteState: ISpriteStateManagementDTO;

    private xSpriteCounter: number;
    private drawingSpeedBase: number;
    private drawingSpeed: number;
    private frameCounter: number;

    private destX: number;
    private destY: number;

    constructor(brush: DrawingTool) {
        this.asset = this.setAsset();

        this.brush = brush;
        this.frameCounter = 0;
        this.xSpriteCounter = 0;
        this.drawingSpeedBase = 6;
        this.drawingSpeed = this.drawingSpeedBase;
        this.destX = this.calcCenteredDestX();
        this.destY = 0;

        this.imageElement = ImageService.createImage({
            imageElementId: this.asset.imageId,
            imageElementSrc: this.asset.imageSrc
        });

        this.setCurrentSpriteState(SpriteState.Idle);
        this.setSpriteActions();
    }

    protected abstract setAsset(): AssetManagement;

    private setCurrentSpriteState(currentSpriteState: SpriteState) {
        this.spriteState = this.asset.states.find((s) => s.state === currentSpriteState);
    }

    public draw() {
        this.brush.animate(() => {
            this.frameCounter++;
            if (this.frameCounter < this.drawingSpeed) return;

            this.frameCounter = 0;
            this.brush.drawFrame({
                img: this.imageElement,
                srcX: this.spriteState.colsPositions[this.xSpriteCounter],
                srcY: this.spriteState.yPosition,
                srcW: this.asset.spriteWidth,
                srcH: this.asset.spriteWidth,
                destX: this.destX,
                destY: this.destY,
                scale: 3
            });

            this.xSpriteCounter++;
            if (this.xSpriteCounter === this.spriteState.colsCount) this.xSpriteCounter = 0;
        });
    }

    private calcCenteredDestX(): number {
        return CanvasService.getCanvasById("canvas_main").width / 2 - this.asset.spriteWidth * 1.5
    }

    private setSpriteActions() {
        const moveUp = "w";
        const moveDown = "s";
        const moveRightKey = "d";
        const moveLeftKey = "a";

        document.addEventListener("keyup", (event) => {
            //todo corrigir sumiço repentino
            this.setCurrentSpriteState(SpriteState.Idle);
        });

        document.addEventListener("keydown", (event) => {
            // todo corrigir delay no movimento
            this.drawingSpeed = this.drawingSpeedBase * 0.75;
            const distance = 3;
            if (event.key === moveRightKey) {
                this.destX += distance;
                this.setCurrentSpriteState(SpriteState.WalkingRight);
            }
            if (event.key === moveLeftKey) {
                this.destX -= distance;
                this.setCurrentSpriteState(SpriteState.WalkingRight);
            }
        });
    }
}