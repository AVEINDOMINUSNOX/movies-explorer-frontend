import React from "react";
import './AboutProject.scss';

const AboutProject = () => {
  return (
    <section className="about-project">
      <h2 className="section-title section-title_type_about-project">О проекте</h2>
      <div className="about-diploma">
        <h3 className="about-diploma__title">
          Дипломный проект включал 5 этапов
        </h3>
        <h3 className="about-diploma__title">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-diploma__description">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="about-diploma__description">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="scale-diploma">
        <div className="scale-diploma__backend">
          <p className="scale-diploma__title">1 неделя</p>
          <p className="scale-diploma__description">Back-end</p>
        </div>
        <div className="scale-diploma__frontend">
          <p className="scale-diploma__title scale-diploma__title_type_dark">
            4 недели
          </p>
          <p className="scale-diploma__description">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;