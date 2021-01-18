import React from 'react';
import { IDropdownContent } from 'components/UI/molecules/Dropdown';
import * as S from './style';

export interface Props {
  visible?: boolean;
  toggleVisible?: any;
  dropdownList?: IDropdownContent[];
  className?: string;
}

function Modal({
  visible, toggleVisible, className, dropdownList,
}: Props) {
  const modalToggleHandler = () => {
    toggleVisible();
  };

  return (
    <S.Modal className={`${className} ${visible ? 'active' : ''}`}>
      <S.Dropdown contentList={dropdownList} className={`${visible ? 'active' : ''}`} />
      <S.ModalOutside className={visible ? 'active' : ''} onClick={modalToggleHandler} />
    </S.Modal>
  );
}
export default Modal;
