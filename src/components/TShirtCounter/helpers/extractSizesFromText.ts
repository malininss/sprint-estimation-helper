import { TShirtSize } from '../enums';

export const extractSizesFromText = (text: string): TShirtSize[] => {
  const sizes = Object.values(TShirtSize).map((val) => val.toUpperCase());
  const regex = new RegExp(
    `(?:^|\\s|[^\\w\\d])(${sizes.join('|')})(?=\\s|[^\\w\\d]|$)`,
    'g'
  );
  const matches = text.match(regex);

  return matches
    ? matches.map((size) => size.trim().toLowerCase() as TShirtSize)
    : [];
};
