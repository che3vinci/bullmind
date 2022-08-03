import React from 'react';
import { BaseProps, Button, Col, Row } from '@c3/uikits';

export type AppProps = BaseProps & {};

const Toolbar: React.FC<AppProps> = props => {
  const { ...restProps } = props;
  return (
    <Row {...restProps}>
      <Button>text</Button>
      <Button>image</Button>
      <Button>note</Button>
      <Button>group</Button>
      <Button>ungroup</Button>
      <Button>image</Button>
      <Button>tree</Button>
      <Button>push</Button>
    </Row>
  );
};
export default Toolbar;
