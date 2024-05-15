import { TImageStateType } from "../types/imageStateTypeType";

/**
 * spritesPositions - Array of x-axis positions representing each change from the same state.
 */
export interface IImageState {
    readonly type: TImageStateType, 
    readonly spritesAmount: number,
    yPosition?: number,
    spritesPositions?: number[]
}