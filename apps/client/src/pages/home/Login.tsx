import React from 'react';

const Login: React.FC = props => {
  const { ...restProps } = props;



  return <div {...restProps}>hello</div>;
};

export default Login;
