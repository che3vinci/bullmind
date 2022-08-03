import { useApi } from '@c3/api';
import React from 'react';
import { fetchUser } from './api/user';

const Home: React.FC = props => {
  const { ...restProps } = props;
  const [data, fetch] = useApi(fetchUser);
  return (
    <div {...restProps}>
      dd home{JSON.stringify(data)}
      <button onClick={() => fetch(undefined)}>fetch</button>
    </div>
  );
};

export default Home;
