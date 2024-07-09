import type { TShirtSize } from '../../../../../enums';
import {
  mapTShirtToMaxWorkingDay,
  mapTShirtToMinWorkingDay,
} from '../../../../../helpers/mapTShirtToWorkingDay';
import type { AllSizes } from '../../../types';

interface ConvertAllSizesToDaysResult {
  max: number;
  min: number;
}

export const convertAllSizesToDays = (
  allSizes: AllSizes
): ConvertAllSizesToDaysResult => {
  const result: ConvertAllSizesToDaysResult = {
    max: 0,
    min: 0,
  };

  for (const allSizesKey of Object.keys(allSizes)) {
    const size = allSizesKey as TShirtSize;
    const count = allSizes[size];

    const daysMax = mapTShirtToMaxWorkingDay[size] * count;
    const daysMin = mapTShirtToMinWorkingDay[size] * count;

    result.max = result.max + daysMax;
    result.min = result.min + daysMin;
  }

  return result;
};
