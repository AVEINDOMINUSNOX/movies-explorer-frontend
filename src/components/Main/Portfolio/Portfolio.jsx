import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <Link
        to="#"
        className="portfolio__link"
      >
        Статичный сайт
      </Link>
      <Link
        to="#"
        className="portfolio__link"
      >
        Адаптивный сайт
      </Link>
      <Link
        to="#"
        className="portfolio__link"
      >
        Одностраничное приложение
      </Link>
    </section>
  );
};

export default Portfolio;