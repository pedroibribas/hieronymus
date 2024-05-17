import { ISpriteStateManagementDTO } from "../models/spriteStateManagementDTO";
import { IAssetManagementDTO } from "../models/assetManagementDTO";

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

        // const errors = this.ensureDto(dto);
        // if (errors.length > 0) {
        //     console.error(`ERROR Asset creation ${this.imageId}: ${errors}`);
        // }

        this.imageSrc = dto.imageSrc;
        this.imageWidth = dto.imageWidth;
        this.imageHeight = dto.imageHeight;
        this.states = dto.states;
    }

    // private ensureDto(dto: IAssetManagementDTO): string[] {
    //     const errors = [];

    //     const { imageRowsCount, states } = dto;
    //     const statesCount = states.length;

    //     if (dto.imageRowsCount !== statesCount) {
    //         errors.push(`
    // 1.Prop 'imageRowsCount' (=${imageRowsCount}) and 'states' length (=${statesCount}) should be equal`
    //         );
    //     }

    //     return errors;
    // }

    // private calcSpriteWidth(imageWidth: number, imageColsCount: number): number {
    //     return imageWidth / imageColsCount;
    // }

    // private calcSpriteHeight(imageHeight: number, imageRowsCount: number): number {
    //     return imageHeight / imageRowsCount;
    // }

    // private mapStates(dto: IAssetManagementDTO): ISpriteStateManagementDTO[] {
    //     const rows = [] as ISpriteStateManagementDTO[];
    //     let heightMultiplier = 0;
    //     dto.states.forEach((row) => {
    //         const colsPositions = [];
    //         let widthMultiplier = 0;
    //         for (let i = 0; i < row.colsCount; i++) {
    //             colsPositions.push(this.spriteWidth * widthMultiplier);
    //             widthMultiplier++;
    //         }
    //         row.colsPositions = colsPositions;

    //         row.yPosition = this.spriteHeight * heightMultiplier;
    //         heightMultiplier++

    //         rows.push(row);
    //     });

    //     return rows;
    // }

}