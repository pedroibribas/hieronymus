import { IImageAssetData } from "../common/models/imageAssetDataInterface";
import { IImageState } from "../common/models/imageStateInterface";
import { DrawingTool } from "../drawing/drawingTool";

/**
 * Base class for mapping assets, implemented by image-asset strategies.
 */
export abstract class ImageAsset {
    protected readonly image: IImageAssetData;
    protected readonly drawingTool: DrawingTool;

    constructor(canvasContext: CanvasRenderingContext2D) {
        this.image = this.setImage();
        this.image.id = this.getUUID();
        this.image.spriteWidth = this.calcSpriteWidth();
        this.image.spriteHeight = this.calcSpriteHeight();
        this.image.states = this.mapImageStates(this.image);
        this.drawingTool = new DrawingTool(canvasContext, this.image.src, this.image.id);
    }

    /**
     * Defines manually the data of an asset image for a strategy.
     */
    protected abstract setImage(): IImageAssetData;

    private getUUID(): string {
        return crypto.randomUUID();
    }
    private mapImageStates(image: IImageAssetData): IImageState[] {
        let spritesPositionsMultiplier = 1;
        let yPositionMultiplier = 1;
        image.states.forEach((state) => {
            const spritesPositions = [];
            for (let i = 0; i < state.spritesAmount; i++) {
                spritesPositions.push(image.spriteWidth * spritesPositionsMultiplier);
                spritesPositionsMultiplier++;
            }
            state.spritesPositions = spritesPositions;

            state.yPosition = image.spriteHeight * yPositionMultiplier;
            yPositionMultiplier++
        });
        return image.states;
    }
    private calcSpriteWidth(): number {
        return this.image.width/this.image.maxSpritesAmount;
    }
    private calcSpriteHeight(): number {
        return this.image.height/this.image.states.length;
    }
}