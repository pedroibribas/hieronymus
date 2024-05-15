import { SpriteStateDto } from "./spriteStateDto";
import { ISpriteStateManagementDTO } from "./spriteStateManagementDTO";

export interface IAssetManagementDTO {
    imageSrc: string,
    imageWidth: number,
    imageHeight: number,
    maxSpritesAmount: number
    states: ISpriteStateManagementDTO[];
}

export class AssetManagement {
    public readonly imageId: string;
    public readonly imageSrc: string;
    public readonly imageWidth: number;
    public readonly imageHeight: number;
    public readonly maxSpritesAmount: number;
    public readonly spriteWidth: number;
    public readonly spriteHeight: number;
    public readonly states: ISpriteStateManagementDTO[];

    constructor(dto: IAssetManagementDTO) {
        this.imageId = crypto.randomUUID();
        this.imageSrc = dto.imageSrc;
        this.imageWidth = dto.imageWidth;
        this.imageHeight = dto.imageHeight;
        this.maxSpritesAmount = dto.maxSpritesAmount;
        this.spriteWidth = this.calcSpriteWidth(dto.imageWidth, dto.maxSpritesAmount);
        this.spriteHeight = this.calcSpriteHeight(dto.imageHeight, dto.states);
        this.states = this.mapStates(dto);
    }

    private calcSpriteWidth(imageWidth: number, maxSpritesAmount: number): number {
        return imageWidth/maxSpritesAmount;
    }
    private calcSpriteHeight(imageHeight: number, imageStates: SpriteStateDto[]): number {
        return imageHeight/imageStates.length;
    }
    private mapStates(dto: IAssetManagementDTO): ISpriteStateManagementDTO[] {
        let spriteStates = [] as ISpriteStateManagementDTO[];
        let spritesPositionsMultiplier = 0;
        let yPositionMultiplier = 0;

        dto.states.forEach((state) => {
            const spritesPositions = [];
            for (let i = 0; i < state.spritesAmount; i++) {
                spritesPositions.push(this.spriteWidth * spritesPositionsMultiplier);
                spritesPositionsMultiplier++;
            }
            state.spritesPositions = spritesPositions;

            state.yPosition = this.spriteHeight * yPositionMultiplier;
            yPositionMultiplier++

            spriteStates.push(state);
        });

        return spriteStates;
    }

}