import { useCallback, useState, type FC } from 'react';
import { CountBlock, type OnValuesChange } from './components/CountBlock';
import { ResultBlock } from './components/ResultBlock';
import type { AllSizes } from './types';
import { initialSizes } from './const';

export const TShirtCounter: FC = () => {
  const [sizes, setAllSizes] = useState<AllSizes>(initialSizes);

  const handleValuesChange: OnValuesChange = useCallback((_, values) => {
    setAllSizes(values);
  }, []);

  return (
    <>
      <CountBlock
        initialValues={initialSizes}
        onValuesChange={handleValuesChange}
      />
      <ResultBlock allSizes={sizes} />
    </>
  );
};
