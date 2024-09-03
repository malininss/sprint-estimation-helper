import { useCallback, useState, type FC } from 'react';
import type { TShirtSizesCounter } from './types';
import { initialSizes, sizesTuple } from './const';
import { ResultBlock } from '../../ui/ResultBlock';
import { convertAllSizesToDays } from './helpers/convertAllSizesToDays';
import type { OnValuesChange } from '../../types';
import type { TShirtSize } from './enums';
import { CountBlock } from '../../ui/CountBlock';
import { extractSizesFromText } from './helpers/extractSizesFromText';

export const TShirtCounter: FC = () => {
  const [sizes, setAllSizes] = useState<TShirtSizesCounter>(initialSizes);

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
        itemsCoCount={sizesTuple}
        initialValues={initialSizes}
        onValuesChange={handleValuesChange}
        extractorFn={extractSizesFromText}
      />
      <ResultBlock
        itemsCoCount={sizes}
        maxDays={workingDays.max}
        minDays={workingDays.min}
      />
    </>
  );
};
