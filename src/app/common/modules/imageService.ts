import { CreateImageDto } from "../models/createImageDto";

/**
 * Initializes and provides HTMLImageElement properties.
 */
export class ImageService {

    public static createImage(dto: CreateImageDto): HTMLImageElement {
        const imageElement = new Image();
        imageElement.id = dto.imageElementId;
        imageElement.src = dto.imageElementSrc;
        return imageElement;
    }
    public static getById(id: string): HTMLImageElement {
        return document.getElementById(id) as HTMLImageElement;
    }
    public static setOnLoad(image: HTMLImageElement, callback: () => any) {
        image.addEventListener("load", callback);
    }
}