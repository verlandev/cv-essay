import React from "react";
import { Link } from "react-router-dom";
import "./ProfessionalLife.scss";

const ProfessionalLife = (experience) => {
  const experienceInfo = experience.experience;
  

  return (
    <section className="experience">
      <div className="experience__title">
        <p className="experience__p">¿Qué he hecho?</p>
        <h2 className="experience__h2">Toda mi experiencia</h2>
      </div>

      <div className="timeline">
        <div className="timeline__items">
          {experienceInfo.map((eachExperience, index) => (
            <div className="timeline__eachItem" key={experience.description + experience.name}>
              <span className="timeline__dot" />
              <p className="timeline__date">{eachExperience.date}</p>
              <div className="timeline__content">
                <h3 className="timeline__h3">{eachExperience.name}</h3>
                <h4 className="timeline__h4">{eachExperience.where}</h4>
                <p className="timeline__p">{eachExperience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="buttonsNav">
        <Link to={'/'} className='home__link'> Atrás</Link>
        <Link to={'/education'} className='education__link'>Conoce mi formación</Link>
      </div>
    </section>
  );
};

export default ProfessionalLife;
