import { Asset } from "./asset";
import { AssetManagement } from "./assetManagement";
import { SpriteState } from "../common/models/spriteState";

import WarriorImg from "../../assets/rpg_warrior_32x32.png";

export class Warrior extends Asset {

    protected setAsset(): AssetManagement {
        return new AssetManagement({
            imageSrc: WarriorImg,
            imageWidth: 96,
            imageHeight: 144,
            imageRowsCount: 4,
            imageColsCount: 3,
            states: [
                { state: SpriteState.WalkingUp, colsCount: 3 },
                { state: SpriteState.WalkingRight, colsCount: 3 },
                { state: SpriteState.WalkingDown, colsCount: 3 },
                { state: SpriteState.WalkingLeft, colsCount: 3 },
                { state: SpriteState.IdleUp, colsCount: 1 },
                { state: SpriteState.IdleRight, colsCount: 1 },
                { state: SpriteState.IdleDown, colsCount: 1 },
                { state: SpriteState.IdleLeft, colsCount: 1 },
            ]
        });
    }

}