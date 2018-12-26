import React from 'react';
import * as S from './styles';

export default ({ title, onChange, checkboxValue }) => (
  <S.BookCell>
    <S.Title>{title}</S.Title>
    <S.FlexContainer>
      <S.Title>Reading: </S.Title>
      <S.ReadingToggle type="checkbox" onChange={onChange} value={checkboxValue}/>
    </S.FlexContainer>
  </S.BookCell>
);