import React, { useEffect, useRef } from 'react';
import css from './index.module.less';

export default function ErrorToast(props) {
  const {
    errorMsg,
    appAction: { clearError }
  } = props;

  const timerRef = useRef();

  // todo: use ref to keep timer
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      clearError();
    }, 3000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className={css['error-toast-wrapper']}>
      <div className={css['error-toast-text']}>{errorMsg}</div>
    </div>
  );
}
