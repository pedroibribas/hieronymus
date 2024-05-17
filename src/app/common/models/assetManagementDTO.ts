import { ISpriteStateManagementDTO } from "./spriteStateManagementDTO";


export interface IAssetManagementDTO {
    imageSrc: string;
    imageWidth: number;
    imageHeight: number;
    states: ISpriteStateManagementDTO[];
}
