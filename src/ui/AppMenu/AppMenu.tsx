import { type FC, type ReactNode } from 'react';
import { Tabs } from 'antd';
import { AppMenuKey } from './enums';

interface MenuItem {
  key: AppMenuKey;
  label: ReactNode;
  children: ReactNode;
}

interface AppMenuProps {
  menuItems: MenuItem[];
}

export const AppMenu: FC<AppMenuProps> = ({ menuItems }) => (
  <Tabs size="large" items={menuItems} />
);
