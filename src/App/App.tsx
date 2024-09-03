import type { FC } from 'react';
import { Typography } from 'antd';
import { TShirtCounter } from '../components/TShirtCounter';
import './style.scss';

export const App: FC = () => (
  <>
    <Typography.Title>Sprint Estimation Helper</Typography.Title>
    <TShirtCounter />
  </>
);
