import type { TShirtSize } from '../../../../../../../enums';
import { initialSizes } from '../../../../../const';
import type { AllSizes } from '../../../../../types';

export const convertTShirtSizeToAllSizesObject = (
  sizes: TShirtSize[]
): AllSizes => {
  const result: AllSizes = { ...initialSizes };

  sizes.forEach((size) => {
    result[size] = result[size] + 1;
  });

  return result;
};
