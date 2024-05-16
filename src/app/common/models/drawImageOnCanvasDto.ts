export interface IDrawImageOnCanvasDTO {
    imageElement: HTMLImageElement,
    srcX?: number,
    srcY: number,
    srcWidth: number,
    srcHeight: number,
    destX: number,
    destY: number,
    spritePositions?: number[]
}