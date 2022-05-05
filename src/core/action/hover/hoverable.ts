export interface IHoverable {
  mouseOver(event: MouseEvent, data?: any): void;
  mouseOut(event: MouseEvent): void;
}
