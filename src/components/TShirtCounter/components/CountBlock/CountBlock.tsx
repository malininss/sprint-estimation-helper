import type { FC } from 'react';
import { Tabs, type TabsProps } from 'antd';
import type { AllSizes } from '../../types';
import type { OnValuesChange } from './types';
import { ManualCount } from './components/ManualCount';
import { AutoCount } from './components/AutoCount';

interface CountBlockProps {
  onValuesChange: OnValuesChange;
  initialValues: AllSizes;
}

export const CountBlock: FC<CountBlockProps> = ({
  onValuesChange,
  initialValues,
}) => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Count manually',
      children: (
        <ManualCount
          initialValues={initialValues}
          onValuesChange={onValuesChange}
        />
      ),
    },
    {
      key: '2',
      label: 'Paste text',
      children: <AutoCount onValuesChange={onValuesChange} />,
    },
  ];

  const handleTabChange = () => {
    onValuesChange(undefined, { ...initialValues });
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
