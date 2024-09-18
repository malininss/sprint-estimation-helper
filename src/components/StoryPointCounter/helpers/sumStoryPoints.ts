import { StoryPoints } from '../enums';
import type { StoryPointsCounter } from '../types';

export const sumStoryPoints = (counter: StoryPointsCounter): number => {
  const pointsMap: Record<StoryPoints, number> = {
    [StoryPoints.XXS]: 1,
    [StoryPoints.XS]: 2,
    [StoryPoints.S]: 3,
    [StoryPoints.M]: 5,
    [StoryPoints.L]: 8,
    [StoryPoints.XL]: 13,
    [StoryPoints.XXL]: 21,
    [StoryPoints.XXXL]: 34,
  };

  return Object.entries(counter).reduce((total, [key, count]) => {
    const storyPoint = pointsMap[key as StoryPoints];
    return total + storyPoint * count;
  }, 0);
};
