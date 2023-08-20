import React from 'react';

import Promo from '../Main/Promo/Promo';
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from '../Main/Techs/Techs';

import './Main.scss';

const Main = () => {
  return (
    <>
      <Promo />
      <AboutProject />
      <Techs />
    </>
  );
};

export default Main;