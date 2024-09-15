import { Typography } from 'antd';
import type { ReactNode } from 'react';
import { convertItemsObjectToString } from './helpers/convertItemsObjectToString';

const { Title, Paragraph } = Typography;

interface ResultBlockProps<T extends string> {
  maxDays: number;
  minDays: number;
  extraData?: string;
  itemsCoCount: Record<T, number>;
  calculateCapacity: boolean;
}

export const ResultBlock = <T extends string>({
  maxDays,
  minDays,
  extraData,
  itemsCoCount,
  calculateCapacity,
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
      {extraData && <Title level={5}>{extraData}</Title>}
      {calculateCapacity ? (
        <Title level={5}>
          Max working days: {maxDays}
          <br />
          Min working days: {minDays}
        </Title>
      ) : (
        <Paragraph>Enter sprint history to calculate capacity</Paragraph>
      )}
    </>
  );
};
