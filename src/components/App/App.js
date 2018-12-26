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
      readingCount: 0,
      reading: false,
      books: [],
    };
  }

  onChange = (e) => {
    this.setState({ formInput: e.target.value });
  };

  onSubmit = () => {
    const { books, formInput } = this.state;
    const newList = [{ title: formInput, reading: false }, ...books];
    this.setState({
      formInput: '',
      books: newList,
    });
    console.log(newList);
  };

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      this.onSubmit();
    }
  };

  onCheckboxChange = (e) => {
    if (e.target.checked === true) {
      this.setState({ reading: true, readingCount: this.state.readingCount + 1});
    }
    if (e.target.checked === false) {
      this.setState({ reading: false, readingCount: this.state.readingCount - 1}); 
    }
  };

  render() {
    const { onChange, onSubmit, onKeyDown, onCheckboxChange } = this;
    const {readingCount} = this.state;
    return (
      <S.App>
        <NavigationBar
          value={this.state.formInput}
          onChange={onChange}
          onSubmit={onSubmit}
          onKeyDown={onKeyDown}
          readingCount={readingCount}
        />
        <BookGrid>
          {this.state.books.map((book) => (
            <Book
              key={Math.random()}
              title={book.title}
              onChange={onCheckboxChange}
              checkboxValue={book.reading}
            />
          ))}
        </BookGrid>
      </S.App>
    );
  }
}

export default App;
