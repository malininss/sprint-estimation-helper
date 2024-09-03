import { Button, Flex, Form, Typography } from 'antd';
import styles from './ManualCount.module.scss';
import type { NamePath } from 'antd/es/form/interface';
import { CountInput } from '../CountInput/CountInput';
import type { OnValuesChange } from '../../types';
import type { ReactNode } from 'react';

interface ManualProps<T extends string> {
  onValuesChange: OnValuesChange<T>;
  itemsCoCount: readonly T[];
  initialValues: Record<T, number>;
}

export const ManualCount = <T extends string>({
  onValuesChange,
  initialValues,
  itemsCoCount,
}: ManualProps<T>): ReactNode => (
  <>
    <Typography.Title level={2}>Count your T-Shirts</Typography.Title>
    <Form
      onValuesChange={(_, values) => onValuesChange(values)}
      onReset={() => onValuesChange(initialValues)}
      name="basic"
      initialValues={initialValues}
    >
      <Flex className={styles.inputsBlock} gap={12} wrap>
        {itemsCoCount.map((item) => (
          <Form.Item<T> noStyle key={item} name={item as NamePath}>
            <CountInput addBefore={item.toUpperCase()} />
          </Form.Item>
        ))}
      </Flex>
      <Button htmlType="reset">Reset</Button>
    </Form>
  </>
);
