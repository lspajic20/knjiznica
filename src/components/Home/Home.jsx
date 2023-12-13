import "./Home.scss";
import "../../index.scss";
import HomeImg from "../../assets/images/books.jpg";

const Home = () => {
  return (
    <section className="home">
      <div className="home__content">
        <img src={HomeImg} alt="Library" className="home__img" />
        <div className="home__text">
          <h1 className="home__title">Online knjižnica</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
