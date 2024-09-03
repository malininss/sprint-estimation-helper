import { useEffect, useState, type ReactNode } from 'react';
import { Input } from 'antd';
import { countItems } from './helpers/countItems';
import type { OnValuesChange } from '../../types';

const { TextArea } = Input;

interface AutoCountProps<T extends string> {
  onValuesChange: OnValuesChange<T>;
  extractorFn: (text: string) => T[];
}

export const AutoCount = <T extends string>({
  onValuesChange,
  extractorFn,
}: AutoCountProps<T>): ReactNode => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const itemsArr = extractorFn(text);
    const itemsObject = countItems(itemsArr);

    onValuesChange(itemsObject);
  }, [extractorFn, onValuesChange, text]);

  return (
    <>
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text with T-shirt sizes"
        rows={10}
      />
    </>
  );
};
