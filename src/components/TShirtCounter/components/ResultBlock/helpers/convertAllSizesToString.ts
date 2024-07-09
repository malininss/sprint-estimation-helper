import { mapTShirtToString } from '../../../../../helpers/mapTShirtToString';
import { sizesTuple } from '../../../const';
import type { AllSizes } from '../../../types';

export const convertAllSizesToString = (allSizes: AllSizes): string =>
  sizesTuple
    .filter((size) => allSizes[size])
    .map((size) => `${mapTShirtToString[size]}: ${allSizes[size]}`)
    .join(', ');
