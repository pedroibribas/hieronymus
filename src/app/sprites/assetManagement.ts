import { SpriteStateDto } from "./spriteStateDto";
import { ISpriteStateManagementDTO } from "./spriteStateManagementDTO";

export interface IAssetManagementDTO {
    imageSrc: string,
    imageWidth: number,
    imageHeight: number,
    imageColsCount: number;
    imageRowsCount: number;
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
        this.maxSpritesAmount = dto.imageColsCount;
        this.spriteWidth = this.calcSpriteWidth(dto.imageWidth, dto.imageColsCount);
        this.spriteHeight = this.calcSpriteHeight(dto.imageHeight, dto.imageRowsCount);
        this.states = this.mapStates(dto);
    }

    private calcSpriteWidth(imageWidth: number, imageColsCount: number): number {
        return imageWidth / imageColsCount;
    }
    private calcSpriteHeight(imageHeight: number, imageRowsCount: number): number {
        return imageHeight / imageRowsCount;
    }

    private mapStates(dto: IAssetManagementDTO): ISpriteStateManagementDTO[] {
        const rows = [] as ISpriteStateManagementDTO[];
        let heightMultiplier = 0;
        dto.states.forEach((row) => {
            const colsPositions = [];
            let widthMultiplier = 0;
            for (let i = 0; i < row.colsCount; i++) {
                colsPositions.push(this.spriteWidth * widthMultiplier);
                widthMultiplier++;
            }
            row.colsPositions = colsPositions;

            row.yPosition = this.spriteHeight * heightMultiplier;
            heightMultiplier++

            rows.push(row);
        });

        return rows;
    }

}