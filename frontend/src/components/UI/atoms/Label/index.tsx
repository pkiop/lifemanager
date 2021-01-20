import React, { useCallback } from 'react';
import * as S from './style';

export interface LabelType {
  color?: string;
  labelName: string;
}

export interface Props extends LabelType {
  onClick?: any;
  className?: string;
}

function Label({
  color = '#C4C4C4', onClick, labelName, className,
}: Props) {
  const onClickHandler = useCallback(onClick, []);

  return (
    <>
      <S.Label color={color} onClick={onClickHandler} className={className}>
        {labelName}
      </S.Label>
    </>
  );
}

export default Label;
