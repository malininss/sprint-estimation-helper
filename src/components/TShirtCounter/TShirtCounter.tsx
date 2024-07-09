import { useState, type FC } from 'react';
import { CountBlock, type OnValuesChange } from './components/CountBlock';
import { ResultBlock } from './components/ResultBlock';
import type { AllSizes } from './types';
import { TShirtSize } from '../../enums';

const initialSizes: AllSizes = {
  [TShirtSize.XS]: 0,
  [TShirtSize.S]: 0,
  [TShirtSize.M]: 0,
  [TShirtSize.L]: 0,
  [TShirtSize.XL]: 0,
  [TShirtSize.XXL]: 0,
};

export const TShirtCounter: FC = () => {
  const [sizes, setAllSizes] = useState<AllSizes>(initialSizes);

  const handleValuesChange: OnValuesChange = (_, values) => {
    setAllSizes(values);
  };

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
