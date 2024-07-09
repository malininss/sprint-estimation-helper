import type { FC } from 'react';
import { InputNumber } from 'antd';
import type { TShirtSize } from '../../enums';
import { mapTShirtToString } from '../../helpers/mapTShirtToString';
import styles from './TShirtCountInput.module.scss';

interface TShirtCountInputProps {
  size: TShirtSize;
  value?: number;
  onChange?: (value: number | null) => void;
}

export const TShirtCountInput: FC<TShirtCountInputProps> = ({
  size,
  value,
  onChange,
}) => (
  <InputNumber
    min={0}
    max={99}
    className={styles.input}
    addonBefore={mapTShirtToString[size]}
    value={value}
    onChange={onChange}
  />
);
