import { Tabs, type TabsProps } from 'antd';
import type { ReactNode } from 'react';
import type { OnValuesChange } from '../../types';
import { AutoCount } from '../AutoCount';
import { ManualCount } from '../ManualCount';

interface CountBlockProps<T extends string> {
  onValuesChange: OnValuesChange<T>;
  itemsCoCount: readonly T[];
  initialValues: Record<T, number>;
  extractorFn: (text: string) => T[];
  badWordsConfig?: {
    regExp: RegExp;
    warningMessage: string;
    warningDescription?: string;
  };
  autoCountPlaceholder: string;
  beforeAutoCount?: ReactNode;
}

export const CountBlock = <T extends string>({
  onValuesChange,
  itemsCoCount,
  initialValues,
  extractorFn,
  badWordsConfig,
  autoCountPlaceholder,
  beforeAutoCount,
}: CountBlockProps<T>): ReactNode => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Paste text',
      children: (
        <AutoCount
          onValuesChange={onValuesChange}
          extractorFn={extractorFn}
          placeholder={autoCountPlaceholder}
          badWordsConfig={badWordsConfig}
          before={beforeAutoCount}
        />
      ),
    },
    {
      key: '2',
      label: 'Count manually',
      children: (
        <ManualCount
          itemsCoCount={itemsCoCount}
          initialValues={initialValues}
          onValuesChange={onValuesChange}
        />
      ),
    },
  ];

  const resetValues = () => {
    onValuesChange(initialValues);
  };

  const handleTabChange = () => {
    resetValues();
  };

  return (
    <Tabs
      destroyInactiveTabPane
      onChange={handleTabChange}
      defaultActiveKey="1"
      items={items}
    />
  );
};
