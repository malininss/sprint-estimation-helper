import type { SprintHistory } from '../types';

export const checkIsSprintHistoryValid = (sprintHistory: SprintHistory[]) =>
  !!sprintHistory.length &&
  sprintHistory.every(
    ({ completedStoryPoints, sprintDays }) =>
      !!completedStoryPoints && !!sprintDays
  );
