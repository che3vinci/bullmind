import { IDable, isObject } from '@c3/utils';
import { List } from '@src/utils/List';
import { IContainerable, Pred } from './containerable';

export const withContainer = <
  Child,
  B extends Ctor<{ children: List<Child> }>
>(
    Base: B
  ) => {
  return class Container extends Base implements IContainerable<Child> {
    addChild(child: Child, index?: number) {
      return this.children.add(child, index);
    }
    delChild(child: Child) {
      this.children.delete(child);
    }
    findAll(pred: Pred<Child>): Child[] {
      let results: Child[] = [];
      for (const child of this.children) {
        if (isContainer<Child>(child)) {
          const res = child.findAll(pred);
          if (res) {
            results = [...results, ...res];
          }
        } else if (pred(child)) {
          results.push(child);
        }
      }
      return results;
    }
    find(pred: Pred<Child>): Child | undefined {
      for (const child of this.children) {
        if (isContainer<Child>(child)) {
          const res = child.find(pred);
          if (res) {
            return res;
          }
        } else if (pred(child)) {
          return child;
        }
      }
      return undefined;
    }
  };
};

export const isContainer = <C>(el: unknown): el is IContainerable<C> => {
  return (
    isObject(el) &&
    Reflect.has(el, 'layout') &&
    Reflect.has(el, 'children')
  );
};
