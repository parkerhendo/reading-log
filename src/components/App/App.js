import React, { Component } from 'react';
import NavigationBar from '../NavigationBar';

import * as S from './styles';

class App extends Component {
  render() {
    return (
      <S.App>
        <NavigationBar />
      </S.App>
    );
  }
}

export default App;
