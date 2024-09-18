import { Alert, Input } from 'antd';
import { type ReactNode, useEffect, useState } from 'react';
import type { OnValuesChange } from '../../types';
import { countItems } from './helpers/countItems';
import styles from './AutoCount.module.scss';

const { TextArea } = Input;
interface AutoCountProps<T extends string> {
  onValuesChange: OnValuesChange<T>;
  extractorFn: (text: string) => T[];
  badWordsConfig?: {
    regExp: RegExp;
    warningMessage: string;
    warningDescription?: string;
  };
  placeholder: string;
  before?: ReactNode;
}

export const AutoCount = <T extends string>({
  onValuesChange,
  extractorFn,
  placeholder,
  badWordsConfig,
  before,
}: AutoCountProps<T>): ReactNode => {
  const [text, setText] = useState<string>('');
  const [badWords, setBadWords] = useState<Set<string>>();

  useEffect(() => {
    const itemsArr = extractorFn(text);
    const itemsObject = countItems(itemsArr);

    onValuesChange(itemsObject);
  }, [extractorFn, onValuesChange, text]);

  useEffect(() => {
    if (!badWordsConfig) {
      return;
    }

    setBadWords(new Set(text.match(badWordsConfig.regExp)));
  }, [text, badWordsConfig]);

  return (
    <>
      {before}
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
        rows={10}
      />
      {badWordsConfig && !!badWords?.size && (
        <Alert
          className={styles.warning}
          message={
            <div>{`${badWordsConfig.warningMessage}: ${Array.from(badWords).join()}`}</div>
          }
          description={badWordsConfig.warningDescription}
          type="warning"
          showIcon
        />
      )}
    </>
  );
};
