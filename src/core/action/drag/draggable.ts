export type IMovement = {
  dx: number;
  dy: number;
};
export interface IDraggable {
  dragStart(distance: MouseEvent, data?: any): void;
  drag(event: MouseEvent, data?: any): void;
  dragEnd(event: MouseEvent, data?: any): void;
}
