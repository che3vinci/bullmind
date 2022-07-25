import { SVG } from './Svg.view.';
import { registerComponent } from 'apps/client/src/bootstrap/gComponentMap';
import { SVGModel } from './Svg.model';
import { immerable } from 'immer';

//@ts-ignore
SVGModel[immerable] = true;
registerComponent(SVGModel.cname, SVGModel, SVG);

export { SVGModel, SVG };
