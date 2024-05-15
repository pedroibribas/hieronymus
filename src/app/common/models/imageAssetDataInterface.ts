import { IImageState } from "./imageStateInterface";

export interface IImageAssetData {
    readonly src: string,
    readonly width: number,
    readonly height: number,
    readonly maxSpritesAmount: number,
    states: IImageState[],
    id?: string,
    spriteWidth?: number,
    spriteHeight?: number,
};