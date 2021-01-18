import React from 'react';
import * as S from './style';

export interface IDropdownContent{
  title: string;
  onClick: any;
}

export interface Props {
  className?: string;
  contentList?: IDropdownContent[];
}

function Dropdown({
  className, contentList,
}: Props) {
  const contents = contentList?.map((content:IDropdownContent) => (
    <S.Contents
      key={content.title}
      className={className}
      onClick={content.onClick}>
      <div>
        {content.title}
      </div>
    </S.Contents>
  ));

  return (
    <S.Dropdown className={className}>
      {contents}
    </S.Dropdown>
  );
}

export default Dropdown;
