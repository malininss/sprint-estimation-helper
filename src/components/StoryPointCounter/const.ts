import { StoryPoints } from './enums';
import type { StoryPointsCounter } from './types';

export const storyPointsTuple = [
  StoryPoints.XXS,
  StoryPoints.XS,
  StoryPoints.S,
  StoryPoints.M,
  StoryPoints.L,
  StoryPoints.XL,
  StoryPoints.XXL,
] as const;

export const initialCount: StoryPointsCounter = {
  [StoryPoints.XXS]: 0,
  [StoryPoints.XS]: 0,
  [StoryPoints.S]: 0,
  [StoryPoints.M]: 0,
  [StoryPoints.L]: 0,
  [StoryPoints.XL]: 0,
  [StoryPoints.XXL]: 0,
} as const;


const storyPoints = Object.values(StoryPoints);

export const storyPointsRegexp = new RegExp(
  `(?:^|\\s|[^\\w\\d])(${storyPoints.join('|')})(?=\\s|[^\\w\\d]|$)`,
  'gi'
);

export const notStoryPointsRegexp = new RegExp(
  `(?:^|\\s|[^\\w\\d])(?!${storyPoints.join('|')})(\\d+sp)(?=\\s|[^\\w\\d]|$)`,
  'gi'
);
