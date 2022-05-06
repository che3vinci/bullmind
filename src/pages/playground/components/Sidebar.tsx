import React from 'react';
import { BaseProps, Button, Col, Row } from '@c3/uikits';

export type SidebarProps = BaseProps & {};

const Sidebar: React.FC<SidebarProps> = props => {
  const { ...restProps } = props;
  return <Row {...restProps}>sidebar</Row>;
};
export default Sidebar;
