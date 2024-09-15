import { InputNumber } from 'antd';
import type { FC, ReactNode } from 'react';
import styles from './CountInput.module.scss';

interface CountInputProps {
  addBefore: string;
  value?: number;
  onChange?: (value: number | null) => void;
}

export const CountInput: FC<CountInputProps> = ({
  addBefore,
  value,
  onChange,
}): ReactNode => (
  <InputNumber
    min={0}
    max={99}
    className={styles.input}
    addonBefore={addBefore}
    value={value}
    onChange={onChange}
  />
);
