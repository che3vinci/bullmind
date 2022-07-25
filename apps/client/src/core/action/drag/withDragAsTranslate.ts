import { ShapeStatus } from 'apps/client/src/core/status/status';
import Transform from 'apps/client/src/core/transform/transform';
import { IDraggable } from './draggable';

export const withDragAsTranslate = <
  T extends Ctor<{ transform: Transform; status: ShapeStatus }>
>(
    Base: T
  ) => {
  return class extends Base implements IDraggable {
    dragStart(): void {
      this.status.isSelected = true;
    }
    drag(event: MouseEvent): void {
      if (this.status.isSelected) {
        this.transform.translate(event.movementX, event.movementY);
      }
    }
    dragEnd(): void {
      this.status.isSelected = false;
    }
  };
};
