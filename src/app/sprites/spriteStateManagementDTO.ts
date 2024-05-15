import { SpriteState } from "../common/models/spriteState";

export interface ISpriteStateManagementDTO {
    state: SpriteState;
    spritesAmount: number;
    yPosition?: number;
    spritesPositions?: number[];
}
