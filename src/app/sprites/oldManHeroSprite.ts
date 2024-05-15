import { DrawingTool } from "../common/modules/drawingTool";
import { ImageService } from "../common/modules/imageService";

import CharacterPng from "../../assets/character.png";
import { SpriteState } from "../common/models/spriteState";
import { AssetManagement } from "./assetManagement";
import { ISpriteStateManagementDTO } from "./spriteStateManagementDTO";

export class OldManHeroSprite {

    private readonly drawingTool: DrawingTool;
    private readonly asset: AssetManagement;
    private readonly imageElement: HTMLImageElement;
    private currentSpriteState: SpriteState;

    constructor(canvasContext: CanvasRenderingContext2D) {
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
        this.drawingTool = new DrawingTool(canvasContext);
    }

    public draw() {
        this.drawingTool.draw({
            imageElement: this.imageElement,
            srcX: 1536 / 12,
            srcY: 1536 / 12,
            srcWidth: this.asset.spriteWidth,
            srcHeight: this.asset.spriteWidth,
            destX: 100,
            destY: 0
        });
        this.currentSpriteState = SpriteState.Idle;
        const spriteState = this.asset.states.find((s) => s.state === this.currentSpriteState);
        this.handleState(spriteState);
    }

    private handleState(spriteState: ISpriteStateManagementDTO) {
        for (let i = 0; i < spriteState.spritesAmount; i++) {
            this.drawingTool.draw({
                imageElement: this.imageElement,
                srcX: spriteState.spritesPositions[i],
                srcY: spriteState.yPosition,
                srcWidth: this.asset.spriteWidth,
                srcHeight: this.asset.spriteWidth,
                destX: 0,
                destY: 0
            });
        }
    }
}