import React from 'react';

export type AppProps = {};

const Select: React.FC<AppProps> = props => {
  const { ...restProps } = props;
  return <div {...restProps}></div>;
};
export default Select;
