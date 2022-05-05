import { IDable } from '@c3/utils';
import { withContainer } from '@src/core/containerable';
import { widthId, Id, withName } from '@src/core/id';
import { List } from '@src/utils/List';

type Child = IDable & { cname: string };

class BaseSVGModel {
  _id = new Id();

  children = new List() as List<Child>;
}

const K = withName(BaseSVGModel, 'svg');
export const SVGModel = widthId(withContainer<Child, typeof K>(K));
export type SVGModel = InstanceType<typeof SVGModel>;
