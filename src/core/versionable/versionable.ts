interface IVersionable {
  get currentVersion(): string;
  get prevVersion(): string;
  //convert prevVersion to model of current version
  getVersionConverter(value: IObject): void
  addVersionConvert(fromVersion: string): void;
  convertFollowPath(fromVersion: string): void;
}
