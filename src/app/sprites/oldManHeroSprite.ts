import { DrawingTool } from "../common/modules/drawingTool";
import { ImageService } from "../common/modules/imageService";
import { SpriteState } from "../common/models/spriteState";
import { AssetManagement } from "./assetManagement";
import CharacterPng from "../../assets/character.png";

export class OldManHeroSprite {

    private readonly brush: DrawingTool;
    private readonly asset: AssetManagement;
    private readonly imageElement: HTMLImageElement;
    private currentSpriteState: SpriteState;

    private xSpriteCounter: number;
    private drawingSpeed: number;
    private frameCounter: number;
    
    constructor(brush: DrawingTool) {
        this.brush = brush;
        this.frameCounter = 0;
        this.xSpriteCounter = 0;
        this.drawingSpeed = 7;

        this.asset = new AssetManagement({
            imageSrc: CharacterPng,
            imageWidth: 1536,
            imageHeight: 1536,
            maxSpritesAmount: 12,
            states: [{
                state: SpriteState.Idle,
                spritesAmount: 6
            }]
        });

        this.imageElement = ImageService.createImage({
            imageElementId: this.asset.imageId,
            imageElementSrc: this.asset.imageSrc
        });
    }

    public draw(dto: { atX: number, atY: number }) {
        this.currentSpriteState = SpriteState.Idle;

        const spriteState = this.asset.states.find((s) => s.state === this.currentSpriteState);

        this.brush.animate(() => {
            this.frameCounter++;
            if (this.frameCounter < this.drawingSpeed) return;

            this.frameCounter = 0;
            this.brush.drawFrame({
                img: this.imageElement,
                srcX: spriteState.spritesPositions[this.xSpriteCounter],
                srcY: spriteState.yPosition,
                srcW: this.asset.spriteWidth,
                srcH: this.asset.spriteWidth,
                destX: dto.atX,
                destY: dto.atY,
                scale: 3
            });

            this.xSpriteCounter++;
            if (this.xSpriteCounter === 6) this.xSpriteCounter = 0;
        });
    }
}