import React from 'react';
import * as S from './styles';

export default ({ value, onChange, onSubmit, onKeyDown, readingCount }) => (
  <S.Container>
    <S.Title>Reading Log</S.Title>
    <S.Input
      placeholder="Enter a book title"
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onKeyDown={onKeyDown}
    />
    <S.FlexContainer>
      <S.Stat>
        Reading:
        {readingCount}
      </S.Stat>
      <S.Stat>Read: 5</S.Stat>
    </S.FlexContainer>
  </S.Container>
);
