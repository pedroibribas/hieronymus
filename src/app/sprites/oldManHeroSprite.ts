import { Asset } from "./asset";
import { AssetManagement } from "./assetManagement";
import { SpriteState } from "../common/models/spriteState";
import CharacterPng from "../../assets/character.png";


export class OldManHeroSprite extends Asset {
    protected setAsset(): AssetManagement {
        return new AssetManagement({
            imageSrc: CharacterPng,
            imageWidth: 1536,
            imageHeight: 1536,
            imageRowsCount: 12,
            imageColsCount: 12,
            states: [
                { state: SpriteState.Idle, colsCount: 6 },
                { state: SpriteState.WalkingRight, colsCount: 8 },
            ]
        });
    }
}