import type { TShirtSize } from '../../enums';

export interface AllSizes {
  [TShirtSize.XS]: number;
  [TShirtSize.S]: number;
  [TShirtSize.M]: number;
  [TShirtSize.L]: number;
  [TShirtSize.XL]: number;
  [TShirtSize.XXL]: number;
}
