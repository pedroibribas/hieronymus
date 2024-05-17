import { ESpriteState } from "./spriteState";

export interface ISpriteStateManagementDTO {
    state: ESpriteState;
    srcY: number;
    srcX: number[];
    width: number;
    height: number;
}
