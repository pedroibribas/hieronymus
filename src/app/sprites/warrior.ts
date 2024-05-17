import { Asset } from "../common/modules/asset";
import { AssetManagement } from "../common/modules/assetManagement";

import WarriorImg from "../../assets/rpg_warrior_32x32.png";
import { ESpriteState } from "../common/models/spriteState";

export class Warrior extends Asset {

    protected setAsset(): AssetManagement {
        const width = 96/3;
        const height = 144/4;

        const matrix = this.calcImgMatrix([
            { colsCount: 3, spriteW: 96 / 3, spriteH: 144 / 4 },
            { colsCount: 3, spriteW: 96 / 3, spriteH: 144 / 4 },
            { colsCount: 3, spriteW: 96 / 3, spriteH: 144 / 4 },
            { colsCount: 3, spriteW: 96 / 3, spriteH: 144 / 4 }
        ]);
        
        return new AssetManagement({
            imageSrc: WarriorImg,
            imageWidth: 96,
            imageHeight: 144,
            states: [
                {
                    state: ESpriteState.IdleUp,
                    srcY: matrix[0].rowPosition,
                    srcX: [matrix[0].colsPositions[1]],
                    width,
                    height
                },
                {
                    state: ESpriteState.WalkingUp,
                    srcY: matrix[0].rowPosition,
                    srcX: matrix[0].colsPositions,
                    width,
                    height
                },
                {
                    state: ESpriteState.IdleRight,
                    srcY: matrix[1].rowPosition,
                    srcX: [matrix[1].colsPositions[1]],
                    width,
                    height
                },
                {
                    state: ESpriteState.WalkingRight,
                    srcY: matrix[1].rowPosition,
                    srcX: matrix[1].colsPositions,
                    width,
                    height
                },
                {
                    state: ESpriteState.IdleDown,
                    srcY: matrix[2].rowPosition,
                    srcX: [matrix[2].colsPositions[1]],
                    width,
                    height
                },
                {
                    state: ESpriteState.WalkingDown,
                    srcY: matrix[2].rowPosition,
                    srcX: matrix[2].colsPositions,
                    width,
                    height,
                },
                {
                    state: ESpriteState.IdleLeft,
                    srcY: matrix[3].rowPosition,
                    srcX: [matrix[3].colsPositions[1]],
                    width,
                    height
                },
                {
                    state: ESpriteState.WalkingLeft,
                    srcY: matrix[3].rowPosition,
                    srcX: matrix[3].colsPositions,
                    width,
                    height,
                },
            ]
        });
    }
}