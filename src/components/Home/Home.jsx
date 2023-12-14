import React from 'react';
import './Home.scss';
import HomeImg from '../../assets/images/books.jpg';
import BookSearch from '../BookSearch'; // Promijenite putanju prema lokaciji BookSearch.jsx

const Home = () => {
  return (
    <section className="home">
      <img src={HomeImg} alt="Library" className="home__img" />
      <div className="home__text">
        <h1 className="home__title">Online knjižnica</h1>
        <div className="home__search">
          <BookSearch />
        </div>
      </div>
    </section>
  );
};

export default Home;
