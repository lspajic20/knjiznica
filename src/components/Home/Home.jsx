import React from 'react';
import './Home.scss';
import HomeImg from '../../assets/images/books.jpg';

const Home = () => {
  return (
    <section className="home">
      <img src={HomeImg} alt="Library" className="home__img" />
      <div className="home__text">
        <h1 className="home__title">Online knjižnica</h1>
        <div className="home__search">
          <input
            type="text"
            placeholder="Pretraži knjige..."
            className="home__search-input"
          />
          <button className="home__search-button">Pretraži</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
