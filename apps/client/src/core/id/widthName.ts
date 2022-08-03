export const withName = <TBase extends Ctor>(Base: TBase, name: string) => {
  return class Name extends Base {
    static cname = name;
    get cname() { return Name.cname; }
  };
};

