import type { TShirtSize } from '../enums';
import type { TShirtSizesCounter } from '../types';
import {
  mapTShirtToMaxWorkingDay,
  mapTShirtToMinWorkingDay,
} from './mapTShirtToWorkingDay';

interface ConvertAllSizesToDaysResult {
  max: number;
  min: number;
}

export const convertAllSizesToDays = (
  allSizes: TShirtSizesCounter
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
