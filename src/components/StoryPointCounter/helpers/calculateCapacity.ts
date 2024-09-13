import type { SprintHistory } from '../types';

interface CalculateCapacityParams {
  sprintHistory: SprintHistory[];
  storyPointsToComplete: number;
}

interface CapacityResult {
  minDays: number;
  maxDays: number;
}

export const calculateCapacity = ({
  sprintHistory,
  storyPointsToComplete,
}: CalculateCapacityParams): CapacityResult => {
  const storyPointsPerDayList = sprintHistory.map(
    ({ completedStoryPoints, sprintDays }) => completedStoryPoints / sprintDays
  );

  const minStoryPointsPerDay = Math.min(...storyPointsPerDayList);
  const maxStoryPointsPerDay = Math.max(...storyPointsPerDayList);

  const maxDays = Math.ceil(storyPointsToComplete / minStoryPointsPerDay);
  const minDays = Math.ceil(storyPointsToComplete / maxStoryPointsPerDay);

  return {
    minDays,
    maxDays,
  };
};
