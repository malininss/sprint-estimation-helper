import { Button, Flex, Form } from 'antd';
import type { NamePath } from 'antd/es/form/interface';
import { CountInput } from '../CountInput/CountInput';
import type { OnValuesChange } from '../../types';
import type { ReactNode } from 'react';
import { useForm } from 'antd/es/form/Form';
import styles from './ManualCount.module.scss';

interface ManualProps<T extends string> {
  onValuesChange: OnValuesChange<T>;
  itemsCoCount: readonly T[];
  initialValues: Record<T, number>;
}

export const ManualCount = <T extends string>({
  onValuesChange,
  initialValues,
  itemsCoCount,
}: ManualProps<T>): ReactNode => {
  const [form] = useForm();
  const isDirty = form.isFieldsTouched();

  return (
    <Form
      form={form}
      onValuesChange={(_, values) => onValuesChange(values)}
      onReset={() => onValuesChange(initialValues)}
      initialValues={initialValues}
    >
      <Flex className={styles.inputsBlock} gap={12} wrap>
        {itemsCoCount.map((item) => (
          <Form.Item<T> noStyle key={item} name={item as NamePath}>
            <CountInput addBefore={item.toUpperCase()} />
          </Form.Item>
        ))}
      </Flex>
      {isDirty && <Button htmlType="reset">Reset</Button>}
    </Form>
  );
};
