import { Typography } from 'antd';
import { convertItemsObjectToString } from './helpers/convertItemsObjectToString';
import type { ReactNode } from 'react';

const { Title, Paragraph } = Typography;

interface ResultBlockProps<T extends string> {
  maxDays: number;
  minDays: number;
  itemsCoCount: Record<T, number>;
}

export const ResultBlock = <T extends string>({
  maxDays,
  minDays,
  itemsCoCount,
}: ResultBlockProps<T>): ReactNode => {
  const allSizesString = convertItemsObjectToString(itemsCoCount);

  if (!allSizesString) {
    return null;
  }

  return (
    <>
      <Title level={2}>Result</Title>
      <Title level={5}>Task count</Title>
      <Paragraph>{allSizesString}</Paragraph>
      <Title level={5}>
        Max working days: {maxDays}
        <br />
        Min working days: {minDays}
      </Title>
    </>
  );
};
