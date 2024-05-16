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
    private frameCounter: number;

    constructor(drawingTool: DrawingTool) {
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
        this.drawingTool = drawingTool;

        window.requestAnimationFrame(() => this.handleState);
        this.frameCounter = 0;
    }

    public draw() {
        this.currentSpriteState = SpriteState.Idle;
        const spriteState = this.asset.states.find((s) => s.state === this.currentSpriteState);
        this.handleState(spriteState);
    }

    private handleState(spriteState: ISpriteStateManagementDTO) {
        const maxFramesAmount: number = spriteState.spritesPositions.length;
        this.drawingTool.drawFrame({
            imageElement: this.imageElement,
            srcX: spriteState.spritesPositions[this.frameCounter],
            srcY: spriteState.yPosition,
            srcWidth: this.asset.spriteWidth,
            srcHeight: this.asset.spriteWidth,
            destX: 50,
            destY: 0,
            spritePositions: spriteState.spritesPositions
        });
        this.frameCounter++;
        if (this.frameCounter === maxFramesAmount) {
            this.frameCounter = 0;
        }
        window.requestAnimationFrame(()=>this.handleState);
    }
}