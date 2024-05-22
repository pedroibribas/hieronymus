export class DOMElementHandler {

    static getMousePositionOnCanvas(event: MouseEvent, element: HTMLElement): { x: number, y: number} {
        var distances = element.getBoundingClientRect();
        return {
            x: event.clientX - distances.left,
            y: event.clientY - distances.top,
        };
    }
}