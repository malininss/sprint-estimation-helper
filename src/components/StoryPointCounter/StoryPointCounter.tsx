import { useCallback, useEffect, useState, type FC } from 'react';
import type { SprintHistory, StoryPointsCounter } from './types';
import { initialCount, storyPointsTuple } from './const';
import { ResultBlock } from '../../ui/ResultBlock';
import type { OnValuesChange } from '../../types';
import type { StoryPoints } from './enums';
import { CountBlock } from '../../ui/CountBlock';
import { extractStoryPointsFromText } from './helpers/extractStoryPointsFromText';
import { calculateCapacity } from './helpers/calculateCapacity';
import { sumStoryPoints } from './helpers/sumStoryPoints';
import { StoryPointsPerSprintForm } from './components/StoryPointsPerSprintForm';
import { checkIsSprintHistoryValid } from './helpers/checkIsSprintHistoryValid';

export const StoryPointCounter: FC = () => {
  const [storyPointsCount, setStoryPointCount] =
    useState<StoryPointsCounter>(initialCount);

  const [sprintHistory, setSprintHistory] = useState<SprintHistory[]>(() => {
    const saved = localStorage.getItem('sprintHistory');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('sprintHistory', JSON.stringify(sprintHistory));
  }, [sprintHistory]);

  const handleValuesChange: OnValuesChange<StoryPoints> = useCallback(
    (values) => {
      setStoryPointCount(values);
    },
    []
  );

  const totalStoryPoints = sumStoryPoints(storyPointsCount);

  const daysToFinish = calculateCapacity({
    sprintHistory,
    storyPointsToComplete: totalStoryPoints,
  });

  const isSprintHistoryValid = checkIsSprintHistoryValid(sprintHistory);

  return (
    <>
      <StoryPointsPerSprintForm
        defaultValues={sprintHistory}
        onValuesChange={setSprintHistory}
      />
      <CountBlock
        itemsCoCount={storyPointsTuple}
        initialValues={initialCount}
        onValuesChange={handleValuesChange}
        extractorFn={extractStoryPointsFromText}
      />
      <ResultBlock
        itemsCoCount={storyPointsCount}
        calculateCapacity={isSprintHistoryValid}
        extraData={`Total story points: ${totalStoryPoints}sp`}
        maxDays={daysToFinish.maxDays}
        minDays={daysToFinish.minDays}
      />
    </>
  );
};
