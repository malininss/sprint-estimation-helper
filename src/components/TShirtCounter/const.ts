import { TShirtSize } from '../../enums';
import type { AllSizes } from './types';

export const sizesTuple = [
  TShirtSize.XS,
  TShirtSize.S,
  TShirtSize.M,
  TShirtSize.L,
  TShirtSize.XL,
  TShirtSize.XXL,
] as const;

export const initialSizes: AllSizes = {
  [TShirtSize.XS]: 0,
  [TShirtSize.S]: 0,
  [TShirtSize.M]: 0,
  [TShirtSize.L]: 0,
  [TShirtSize.XL]: 0,
  [TShirtSize.XXL]: 0,
};
