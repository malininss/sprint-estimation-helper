import { Typography } from 'antd';
import type { FC } from 'react';
import type { AllSizes } from '../../types';
import { convertAllSizesToString } from './helpers/convertAllSizesToString';
import { convertAllSizesToDays } from './helpers/convertAllSizesToDays';

const { Title, Paragraph } = Typography;

interface ResultBlockProps {
  allSizes: AllSizes;
}

export const ResultBlock: FC<ResultBlockProps> = ({ allSizes }) => {
  const allSizesString = convertAllSizesToString(allSizes);

  if (!allSizesString) {
    return null;
  }

  return (
    <>
      <Title level={2}>Result</Title>
      <Title level={5}>Task count</Title>
      <Paragraph>{allSizesString}</Paragraph>
      <Title level={5}>
        Max working days: {convertAllSizesToDays(allSizes).max}
        <br />
        Min working days: {convertAllSizesToDays(allSizes).min}
      </Title>
    </>
  );
};
