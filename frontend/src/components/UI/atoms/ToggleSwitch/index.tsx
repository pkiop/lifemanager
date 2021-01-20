import React from 'react';
import * as S from './style';

export interface Props {
  switchDivRef?: React.RefObject<HTMLDivElement>
  className?: string;
}

const onClickHandler = (e: any) => {
  const target = e.target.querySelector('.circle');
  if (!target) {
    const activeIndex = e.target.classList.contains('active');
    if (activeIndex) {
      e.target.classList.remove('active');
    } else {
      e.target.classList.add('active');
    }
    return;
  }
  const activeIndex = target.classList.contains('active');
  if (activeIndex) {
    target.classList.remove('active');
  } else {
    target.classList.add('active');
  }
};
function ToggleSwitch({ className, switchDivRef }: Props) {
  return (
    <S.ToggleSwitch onClick={onClickHandler} className={className}>
      <div ref={switchDivRef} className={'circle active'} />
    </S.ToggleSwitch>
  );
}

export default ToggleSwitch;
