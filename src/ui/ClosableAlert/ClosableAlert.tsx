import { useState, type FC } from 'react';
import { Alert, type AlertProps } from 'antd';
import styles from './ClosableAlert.module.scss';

interface ClosableAlertProps {
  localStorageKey: string;
  message: string;
  description?: string;
  type: AlertProps['type'];
  hasMarginBottom: boolean;
}

export const ClosableAlert: FC<ClosableAlertProps> = ({
  message,
  description,
  type,
  localStorageKey,
  hasMarginBottom,
}) => {
  const [visible] = useState(
    () => localStorage.getItem(localStorageKey) !== 'true'
  );

  const handleClose = () => {
    localStorage.setItem(localStorageKey, 'true');
  };

  if (!visible) {
    return null;
  }

  return (
    <Alert
      type={type}
      message={message}
      description={description}
      showIcon
      closable
      className={`${hasMarginBottom ? styles.withMarginBottom : undefined}`}
      onClose={handleClose}
    />
  );
};
