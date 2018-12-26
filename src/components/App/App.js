import React, { Component } from 'react';
import * as S from './styles';

import NavigationBar from '../NavigationBar';
import BookGrid from '../BookGrid';
import Book from '../Book';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: '',
      books: ["Hello World"]
    };
  }

  onChange = (e) => {
    this.setState({ formInput: e.target.value });
  }

  onSubmit = () => {
    const { books, formInput } = this.state;
    const newList = [formInput, ...books];
    this.setState({ 
      formInput: '',
      books: newList
    });
    console.log(newList);
  }

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      this.onSubmit();
    }
  }

  render() {
    const { onChange, onSubmit, onKeyDown } = this;
    return (
      <S.App>
        <NavigationBar value={this.state.formInput} onChange={onChange} onSubmit={onSubmit} onKeyDown={onKeyDown}/>
        <BookGrid>
          {this.state.books.map(titles => <Book title={titles} />)}
        </BookGrid>
      </S.App>
    );
  }
}

export default App;
