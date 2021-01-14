import React from 'react';
import * as S from './style';

export interface Props {
  text?: string;
  value?: string;
  className?: string;
  titleRef?: any;
}

const App = ({
  text, value, className, titleRef, ...props
}: Props) => (
  <S.TitleInput className={className} {...props}>
    <S.Text text={text} />
    <S.Input value={value} inputRef={titleRef} placeholder={'여기에 입력하세요.'} />
  </S.TitleInput>
);

export default App;
