import type { TShirtSize } from './enums';

export interface TShirtSizesCounter {
  [TShirtSize.XS]: number;
  [TShirtSize.S]: number;
  [TShirtSize.M]: number;
  [TShirtSize.L]: number;
  [TShirtSize.XL]: number;
  [TShirtSize.XXL]: number;
}
