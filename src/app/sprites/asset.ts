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

    private xColCounter: number;
    private drawingSpeedBase: number;
    private drawingSpeed: number;
    private frameCounter: number;

    private destX: number;
    private destY: number;
    private scale: number;

    constructor(brush: DrawingTool, dto: { destX: number, destY: number, scale: number, initialState: SpriteState }) {
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

        //todo validar estado idle existe
        this.setCurrentSpriteState(dto.initialState);
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
                srcX: this.spriteState.colsPositions[this.xColCounter],
                srcY: this.spriteState.yPosition,
                srcW: this.asset.spriteWidth,
                srcH: this.asset.spriteWidth,
                destX: this.destX,
                destY: this.destY,
                scale: this.scale
            });

            this.xColCounter++;
            if (this.xColCounter === this.spriteState.colsCount) this.xColCounter = 0;
        });
    }

    private setSpriteActions() {
        const moveUp = "w";
        const moveDown = "s";
        const moveRightKey = "d";
        const moveLeftKey = "a";

        // document.addEventListener("keyup", (event) => {
        //     //todo corrigir sumiço repentino
        //     this.setCurrentSpriteState(this.initialState);
        // });
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
                this.setCurrentSpriteState(SpriteState.WalkingLeft);
            }
            if (event.key === moveUp) {
                this.destY -= distance;
                this.setCurrentSpriteState(SpriteState.WalkingUp);
            }
            if (event.key === moveDown) {
                this.destY += distance;
                this.setCurrentSpriteState(SpriteState.WalkingDown);
            }
        });
    }
}