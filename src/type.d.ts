declare const __PRODUCTION__: boolean;
declare const __ENV__: string;

declare module '*.less' {
  const resource: { [key: string]: string };
  export = resource;
}
type ModelId = string;

type IObject = Record<string, any>;
interface IAction<P> {
  type: string;
  payload?: P;
}
interface IModelAction<D = any, P = IModelPayload<D>> extends IAction<P> {
  payload: P;
}

type Ctor<T = {}> = new (...args: any[]) => T;
type isTFn<T> = (ele: unknown) => ele is T


interface IModelPayload<D = any> {
  id: ModelId;
  data?: D;
}

interface IModelValue {
  id: ModelId;
  parentId?: ModelId;
  children?: ModelId[];
  [key: string]: any;
}
type IModelProps<T> = {
  model: T
}

/**
 * @note: the interface with same name will be automatically merged.
 * this ability is called `interface merging`
 *  */
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: (...args: any[]) => any;
}
declare const __DEV__: boolean;
