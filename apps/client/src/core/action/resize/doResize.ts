import Transform from 'apps/client/src/core/transform/transform';
import { Resizable } from './resizable';

export const doResize = <TBase extends Ctor<{ transform: Transform }>>(
  Base: TBase
) => {
  return class extends Base implements Resizable {
    resize(dx: number, dy: number): void {
      this.transform.scale(1 + 0.1 * dx, 1 + 0.1 * dy);
    }
  };
};
