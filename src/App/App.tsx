import { Typography } from 'antd';
import { type FC } from 'react';
import { StoryPointCounter } from '../components/StoryPointCounter';
import { TShirtCounter } from '../components/TShirtCounter';
import { AppMenu, AppMenuKey } from '../ui/AppMenu';
import './style.scss';

export const App: FC = () => (
  <>
    <Typography.Title>Sprint Estimation Helper</Typography.Title>
    <AppMenu
      menuItems={[
        {
          key: AppMenuKey.StoryPoints,
          label: <Typography.Title level={2}>Story Points</Typography.Title>,
          children: <StoryPointCounter />,
        },
        {
          key: AppMenuKey.TShirt,
          label: <Typography.Title level={2}>T-Shirt</Typography.Title>,
          children: <TShirtCounter />,
        },
      ]}
    />
  </>
);
