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
        this.imageSrc = dto.imageSrc;
        this.imageWidth = dto.imageWidth;
        this.imageHeight = dto.imageHeight;
        this.states = dto.states;
    }

}