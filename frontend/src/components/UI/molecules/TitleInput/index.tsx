import React from 'react';
import * as S from './style';

export interface Props {
  text?: string;
  value?: string;
  errorMsg?: string;
  className?: string;
  titleRef?: any;
}

function TitleInput({
  text, value, errorMsg, className, titleRef, ...props
}: Props) {
  return (
    <S.TitleInput className={className} {...props}>
      <S.Title>
        <S.Text text={text} />
        <S.ErrorMessage text={errorMsg} />
      </S.Title>
      <S.Input value={value} inputRef={titleRef} placeholder={'여기에 입력하세요.'} />
    </S.TitleInput>
  );
}

export default TitleInput;
