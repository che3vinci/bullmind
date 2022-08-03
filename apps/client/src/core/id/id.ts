import { Hydratable } from '../jsonable';
import { IValuable } from '../jsonable/valuable';

export const IdUtil = {
  id: 1,
  generate() {
    return this.id++;
  },
};

export class Id implements Hydratable {
  private _id: string;
  constructor() {
    this._id = `${IdUtil.generate()}`;
  }
  get id() {
    return this._id;
  }
  hydrate(data: IObject) {
    this._id = data.id;
  }
}
