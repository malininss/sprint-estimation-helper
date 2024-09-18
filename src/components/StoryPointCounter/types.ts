import type { StoryPoints } from './enums';

export interface StoryPointsCounter {
  [StoryPoints.XXS]: number;
  [StoryPoints.XS]: number;
  [StoryPoints.S]: number;
  [StoryPoints.M]: number;
  [StoryPoints.L]: number;
  [StoryPoints.XL]: number;
  [StoryPoints.XXL]: number;
  [StoryPoints.XXXL]: number;
}

export interface SprintHistory {
  sprintDays: number;
  completedStoryPoints: number;
}
