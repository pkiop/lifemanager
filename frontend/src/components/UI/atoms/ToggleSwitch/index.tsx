import React from 'react';
import * as S from './style';

export interface Props {
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
const App = ({ className }: Props) => (
  <S.ToggleSwitch onClick={onClickHandler} className={className}>
    <div className={'circle'} />
  </S.ToggleSwitch>
);

export default App;
