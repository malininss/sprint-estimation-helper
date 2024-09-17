import { storyPointsRegexp } from '../const';
import { StoryPoints } from '../enums';

export const extractStoryPointsFromText = (text: string): StoryPoints[] => {
  const matches = text.match(storyPointsRegexp);

  return matches
    ? matches.map((size) => size.trim().toLowerCase() as StoryPoints)
    : [];
};
