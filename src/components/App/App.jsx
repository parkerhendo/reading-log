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
      books: [],
      id: 0,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onChange(e) {
    this.setState({ formInput: e.target.value });
  }

  onSubmit() {
    const { books, formInput, id } = this.state;
    console.log('state :', this.state);
    const newEntry = { title: formInput, reading: false, id };
    console.log(newEntry);
    this.setState({
      formInput: '',
      books: [newEntry, ...books],
    });
    this.setState(prevState => ({
      id: prevState.id + 1,
    }));
  }

  onKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      this.onSubmit();
    }
  }

  handleChange(e) {
    // checkbox state
    console.log('Checkbox clicked: ', e.target.checked);

    const { books } = this.state;
    // book element id
    const index = e.target.parentNode.parentNode.id;
    console.log(index);
    const clickedEl = books[index];
    console.log(books, clickedEl);
  }

  render() {
    console.log('new state: ', this.state);
    const {
      read, readingCount, books, formInput, id,
    } = this.state;

    return (
      <S.App>
        <NavigationBar
          value={formInput}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          onKeyDown={this.onKeyDown}
          readingCount={readingCount}
        />
        <BookGrid>
          {books.map(book => (
            <Book
              key={book.title}
              id={id}
              title={book.title}
              onChange={this.handleChange}
              checked={read}
            />
          ))}
        </BookGrid>
      </S.App>
    );
  }
}

export default App;
