import { IDable } from '@c3/utils';
import { withContainer } from 'apps/client/src/core/containerable';
import { widthId, Id, withName } from 'apps/client/src/core/id';
import { List } from 'apps/client/src/utils/List';

type Child = IDable & { cname: string };

class BaseSVGModel {
  _id = new Id();

  children = new List() as List<Child>;
}

const K = withName(BaseSVGModel, 'svg');
export const SVGModel = widthId(withContainer<Child, typeof K>(K));
export type SVGModel = InstanceType<typeof SVGModel>;
