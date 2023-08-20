import './Promo.scss';
import promoLogo from '../../../images/text__COLOR_landing-logo.png';

import React from 'react';

const Promo = () => {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img
        className="promo__image"
        src={promoLogo}
        alt="Каракули"
      />
    </section>
  );
};

export default Promo;