import React, { useState } from 'react';
import './BookSearch.scss';
import axios from 'axios';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error('Greška prilikom pretrage knjiga:', error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="book-search-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Unesite naziv knjige, autora ili ISBN"
        className="book-search-input"
      />
      <button onClick={handleSearch} className="btn-search">
        Pretraži
      </button>
      <div className="books-list">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
              className="book-thumbnail"
            />
            <div className="book-details">
              <h3>{book.volumeInfo.title}</h3>
              <p>Autor: {book.volumeInfo.authors}</p>
              <p>Žanr: {book.volumeInfo.categories}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
