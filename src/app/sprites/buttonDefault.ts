;import { IButtonProps } from "../common/models/buttonProps";
import { Button, IButtonDTO } from "../common/modules/button";

export class ButtonDefault extends Button {

    protected setButtonProps(dto: IButtonDTO): IButtonProps {
        return {
            posX: dto.posX,
            posY: dto.posY,
            width: dto.width,
            height: dto.height,
            bgColor: 'rgba(225,225,225,0.5)',
            borderWidth: 6,
            borderClr: '#000',
            textClr: '#000',
            font: `${dto.fontSize}pt Kremlin Pro Web`,
            title: dto.title
        };
    }
}