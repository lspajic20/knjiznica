import React, { useState } from 'react';
import axios from 'axios';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );

      // Ukoliko je zahtjev uspješan, postavljamo rezultate pretrage u stanje komponente
      setBooks(response.data.items);
    } catch (error) {
      console.error('Greška prilikom pretrage knjiga:', error);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Unesite naziv knjige, autora ili ISBN"
      />
      <button onClick={handleSearch}>Pretraži</button>
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>Autor: {book.volumeInfo.authors}</p>
            {/* Dodajte ostale informacije o knjizi koje želite prikazati */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
