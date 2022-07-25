import { registerComponent } from 'apps/client/src/bootstrap/gComponentMap';
import { immerable } from 'immer';
import { RectModel } from './Rect.model';
import { Rect } from './Rect.view';

//@ts-ignore
RectModel[immerable] = true;
registerComponent(RectModel.cname, RectModel, Rect);

export { RectModel, Rect };
