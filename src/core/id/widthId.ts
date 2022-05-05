import { IDable } from '@c3/utils';
import { Id } from './id';

export const widthId = <TBase extends Ctor<{ _id: Id }>>(Base: TBase) => {
  return class  extends Base implements IDable {
    get id() {
      return this._id.id;
    }
  };
};
