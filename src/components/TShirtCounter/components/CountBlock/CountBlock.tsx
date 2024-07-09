import type { FC } from 'react';
import { TShirtCountInput } from '../../../TShirtCountInput';
import { Button, Flex, Form, Typography } from 'antd';
import type { AllSizes } from '../../types';
import type { OnValuesChange } from './types';
import { sizesTuple } from '../../const';

interface CountBlockProps {
  onValuesChange: OnValuesChange;
  initialValues: AllSizes;
}

export const CountBlock: FC<CountBlockProps> = ({
  onValuesChange,
  initialValues,
}) => (
  <>
    <Typography.Title level={2}>Count your T-Shirts</Typography.Title>
    <Form
      onValuesChange={onValuesChange}
      onReset={() => onValuesChange(undefined, initialValues)}
      name="basic"
      initialValues={initialValues}
    >
      <Flex gap={12} wrap>
        {sizesTuple.map((size) => (
          <Form.Item<AllSizes> key={size} name={size}>
            <TShirtCountInput size={size} />
          </Form.Item>
        ))}
      </Flex>
      <Button htmlType="reset">Reset</Button>
    </Form>
  </>
);
