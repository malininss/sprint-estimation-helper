import { useEffect, useState, type FC } from 'react';
import { Input } from 'antd';
import { extractSizesFromText } from './helpers/extractSizesFromText';
import type { OnValuesChange } from '../../types';
import { convertTShirtSizeToAllSizesObject } from './helpers/convertTShirtSizeToAllSizesObject';

const { TextArea } = Input;

interface AutoCountProps {
  onValuesChange: OnValuesChange;
}

export const AutoCount: FC<AutoCountProps> = ({ onValuesChange }) => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const sizes = extractSizesFromText(value);
    const allSizes = convertTShirtSizeToAllSizesObject(sizes);

    onValuesChange(undefined, allSizes);
  }, [onValuesChange, value]);

  return (
    <>
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Paste your text with T-shirt sizes"
        rows={10}
      />
    </>
  );
};
