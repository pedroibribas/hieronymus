import { SpriteState } from "../common/models/spriteState";

export interface ISpriteStateManagementDTO {
    state: SpriteState;
    colsCount: number;
    yPosition?: number;
    colsPositions?: number[];
}
