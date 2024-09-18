import { type FC, useCallback, useState } from 'react';
import type { OnValuesChange } from '../../types';
import { CountBlock } from '../../ui/CountBlock';
import { ResultBlock } from '../../ui/ResultBlock';
import { initialCount, sizesInOrderTuple } from './const';
import type { TShirtSize } from './enums';
import { convertAllSizesToDays } from './helpers/convertAllSizesToDays';
import { extractSizesFromText } from './helpers/extractSizesFromText';
import type { TShirtSizesCounter } from './types';

export const TShirtCounter: FC = () => {
  const [sizes, setAllSizes] = useState<TShirtSizesCounter>(initialCount);

  const handleValuesChange: OnValuesChange<TShirtSize> = useCallback(
    (values) => {
      setAllSizes(values);
    },
    []
  );

  const workingDays = convertAllSizesToDays(sizes);

  return (
    <>
      <CountBlock
        itemsCoCount={sizesInOrderTuple}
        initialValues={initialCount}
        onValuesChange={handleValuesChange}
        extractorFn={extractSizesFromText}
        autoCountPlaceholder="Paste your text with T-shirt sizes"
      />
      <ResultBlock
        calculateCapacity
        itemsToCount={sizes}
        maxDays={workingDays.max}
        minDays={workingDays.min}
        shouldCapitalizeTaskCount
      />
    </>
  );
};
