import React from 'react';
import * as S from './styles';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: 'all' };
  }
  render() {
    return (
      <S.FilterContainer>
        <S.ActiveButton>Read</S.ActiveButton>
        <S.InactiveButton>Reading</S.InactiveButton>
      </S.FilterContainer>
    );
  }
}
