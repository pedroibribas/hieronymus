import { IImageAssetData } from "../common/models/imageAssetDataInterface";
import { TImageStateType } from "../common/types/imageStateTypeType";
import { ImageAsset } from "./imageAsset";
import { IImageState } from "../common/models/imageStateInterface";
import Asset from "../../assets/old-main-character.png";

interface DrawImageAssetDTO { width: number, height: number, state: IImageState }

export class OldMainCharacterAsset extends ImageAsset {

    private currentState: TImageStateType;

    protected setImage(): IImageAssetData {
        return {
            src: Asset,
            width: 1536,
            height: 1536,
            maxSpritesAmount: 12,
            states: [
                { type: "idle", spritesAmount: 6 },
                // { 1: 8 }, 
                // { 2: 6 }, 
                // { 3: 8 }, 
                // { 4: 3 }, 
                // { 5: 5 }, 
                // { 6: 10 }, 
                // { 7: 10 }, 
                // { 8: 5 }, 
                // { 9: 12 }, 
                // { 10: 12 }, 
                // { 11: 6 }
            ]
        };
    }

    public draw() {
        this.currentState = "idle";
        const { id, spriteHeight, spriteWidth } = this.image;
        const state: IImageState = this.image.states.find((s) => s.type === this.currentState);
        this.HandleIdleState({ state, width: spriteWidth, height: spriteHeight});
    }

    private HandleIdleState(dto: DrawImageAssetDTO) {
        while (this.currentState === "idle") {
            dto.state.spritesPositions.forEach((position) => {
                this.drawingTool.draw({
                    srcX: position,
                    srcY: dto.state.yPosition,
                    srcWidth: dto.width,
                    srcHeight: dto.height,
                    destX: 0,
                    destY: 0
                });
            });
        }
    }
}