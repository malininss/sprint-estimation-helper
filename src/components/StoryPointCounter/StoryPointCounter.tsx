import { type FC, useCallback, useEffect, useState } from 'react';
import type { OnValuesChange } from '../../types';
import { CountBlock } from '../../ui/CountBlock';
import { ResultBlock } from '../../ui/ResultBlock';
import { StoryPointsPerSprintForm } from './components/StoryPointsPerSprintForm';
import { initialCount, notStoryPointsRegexp, storyPointsTuple } from './const';
import { StoryPoints } from './enums';
import { calculateCapacity } from './helpers/calculateCapacity';
import { checkIsSprintHistoryValid } from './helpers/checkIsSprintHistoryValid';
import { extractStoryPointsFromText } from './helpers/extractStoryPointsFromText';
import { sumStoryPoints } from './helpers/sumStoryPoints';
import type { SprintHistory, StoryPointsCounter } from './types';
import { ClosableAlert } from '../../ui/ClosableAlert/ClosableAlert';

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
        badWordsConfig={{
          regExp: notStoryPointsRegexp,
          warningMessage: 'Invalid story points',
          warningDescription: `Accepts only Fibonacci numbers from ${StoryPoints.XXS} to ${StoryPoints.L}`,
        }}
        extractorFn={extractStoryPointsFromText}
        autoCountPlaceholder={`Enter a text with Story Points: ${Object.values(StoryPoints).join(', ')}`}
        beforeAutoCount={
          <ClosableAlert
            localStorageKey="autoCountAlert"
            type="info"
            message="Enter any text with Story Points in any format"
            description='Story Points in the text should be in format "1sp"'
            hasMarginBottom
          />
        }
      />
      <ResultBlock
        itemsToCount={storyPointsCount}
        calculateCapacity={isSprintHistoryValid}
        extraData={`Total story points: ${totalStoryPoints}sp`}
        maxDays={daysToFinish.maxDays}
        minDays={daysToFinish.minDays}
      />
    </>
  );
};
