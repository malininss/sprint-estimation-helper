import { TShirtSize } from '../enums';
import type { TShirtSizesCounter } from '../types';

export const mapTShirtToMinWorkingDay: Record<TShirtSize, number> = {
  [TShirtSize.XS]: 1,
  [TShirtSize.S]: 2,
  [TShirtSize.M]: 4,
  [TShirtSize.L]: 6,
  [TShirtSize.XL]: 8,
  [TShirtSize.XXL]: 11,
};

export const mapTShirtToMaxWorkingDay: TShirtSizesCounter = {
  [TShirtSize.XS]: 1,
  [TShirtSize.S]: 3,
  [TShirtSize.M]: 5,
  [TShirtSize.L]: 7,
  [TShirtSize.XL]: 10,
  [TShirtSize.XXL]: 16,
};
