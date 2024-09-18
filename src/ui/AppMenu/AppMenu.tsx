import { Tabs } from 'antd';
import { type FC, type ReactNode } from 'react';
import { AppMenuKey } from './enums';

interface MenuItem {
  key: AppMenuKey;
  label: ReactNode;
  children: ReactNode;
}

interface AppMenuProps {
  menuItems: MenuItem[];
  className?: string;
}

export const AppMenu: FC<AppMenuProps> = ({ menuItems, className }) => (
  <Tabs className={className} size="large" items={menuItems} />
);
