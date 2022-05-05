export interface IValuable {
  valueOf(): IObject;
  fromValue(value: IObject): void;
}
