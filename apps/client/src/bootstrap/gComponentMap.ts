
export type ComponentMap = {
  [name: string]: { view: React.FC<any>; model: Ctor };
};
export const gComponentMap: ComponentMap = {};
export const registerComponent = (
  name: string,
  model: Ctor,
  view: React.FC<any>
) => {
  gComponentMap[name] = { model: model, view };
};
