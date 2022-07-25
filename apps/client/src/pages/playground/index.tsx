import React from 'react';
import { BaseProps, Col, Stack } from '@c3/uikits';
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';
import Prtybar from './components/Prtybar';
import { SVG } from 'apps/client/src/views/components/shapes/Svg';
import { absXCenter, absYCenter } from '@c3/css';

export type PlaygroundProps = BaseProps;

const Playground: React.FC<PlaygroundProps> = props => {
  const { ...restProps } = props;
  return (
    <Stack {...restProps}>
      <SVG />
      <Toolbar {...absXCenter({ top: 0 })} />
      <Sidebar {...absYCenter({ left: 0 })} />
      <Prtybar {...absYCenter({ right: 0 })} />
    </Stack>
  );
};
export default Playground;
