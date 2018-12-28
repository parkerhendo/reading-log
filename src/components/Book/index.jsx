import React from 'react';
import * as S from './styles';

const Book = ({ id, title, onChange, checked }) => (
  <S.BookCell id={id}>
    <S.Title>{title}</S.Title>
    <S.FlexContainer>
      <S.Title>Reading: </S.Title>
      <S.ReadingToggle
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
    </S.FlexContainer>
  </S.BookCell>
);

export default Book;
