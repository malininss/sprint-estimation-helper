import { type FC } from 'react';
import { ClosableAlert } from '../../../../ui/ClosableAlert/ClosableAlert';

export const SprintHistoryAlert: FC = () => (
  <ClosableAlert
    localStorageKey="sprintHistoryAlertClosed"
    type="info"
    message="Enter completed Story Points per sprint to the first input,
  days in sprint to the second input."
    description="System shows you team capacity only if you enter these values."
    hasMarginBottom
  />
);
