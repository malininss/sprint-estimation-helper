import { StoryPoints } from '../enums';

export const extractStoryPointsFromText = (text: string): StoryPoints[] => {
  const sizes = Object.values(StoryPoints);
  const regex = new RegExp(
    `(?:^|\\s|[^\\w\\d])(${sizes.join('|')})(?=\\s|[^\\w\\d]|$)`,
    'gi'
  );
  const matches = text.match(regex);

  return matches
    ? matches.map((size) => size.trim().toLowerCase() as StoryPoints)
    : [];
};
