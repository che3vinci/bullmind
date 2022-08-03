import { IDable } from '@c3/utils';
import { List } from '@src/utils/List';

export type Pred<T> = (e: T, idx?: number) => boolean;

export interface IContainerable<Child> {
  find(predicate: Pred<Child>): Child | undefined;
  findAll(predicate: Pred<Child>): Child[];

  // layout(): void;

  // 在指定的位置插入一个child
  addChild(
    child: Child,
    index?: number,
    option?: Record<string, any>
  ): void;

  delChild(child: Child, option?: Record<string, any>): void;

  // // 当元素之间堆砌到一起时，将被点击的元素放到屏幕的最上方
  // moveToFront(model: ILayoutable): void;

  // //
  // moveToBottom(model: ILayoutable): void;

  // // 移动到index-1和index之间
  // moveTo(model: Child, index: number): void;

  // // 直接后代
  get children(): List<Child>;

  // // 所有后代
  // descents(): Collection<Child>;

  // // lock住的容器无法点击进去
  // isLocked(): boolean;

  // isMyDescent(model: Child): boolean;
}
