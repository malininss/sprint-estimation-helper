import type { FC } from 'react';
import { Typography } from 'antd';
import { TShirtCounter } from '../components/TShirtCounter/TShirtCounter';

export const App: FC = () => (
  <>
    <Typography.Title>T-Shirt Estimation Helper</Typography.Title>
    <TShirtCounter />
  </>
);
