import React from "react";
import "./Skills.scss";
import image from "../../assets/checklist.png";

const Skills = ({ skills, languages, services }) => {
  console.log(services)
  return (
    <section className="habilities" id="skills">
      <div className="habilities__title">
        <p className="habilities__p">Principales habilidades</p>
        <h2 className="habilities__h2">Mis "armas" del día a día</h2>
      </div>

      <div className="habilitiesContainer">
        <div className="skills">
          <h3 className="skills__h3">Skills</h3>
          <div className="skills__container">
            <ul className="skills__ul">
              {skills.map((skill, index) => (
                <li className="skills__li" key={index}>
                  <span>
                    <img
                      className="skills__img"
                      src={image}
                      alt="skills"
                    />
                  </span>
                  <p className="skills__p">{skill}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="skills">
          <h3 className="skills__h3">Idiomas</h3>
          <div className="skills__container">
            <ul className="skills__ul">
              {languages.map((language, index) => (
                <li className="skills__li" key={index}>
                  <span>
                    <img
                      className="skills__img"
                      src={image}
                      alt="skills"
                    />
                  </span>
                  <p className="skills__p">{language.language}:</p>
                  <p className="skills__p--level">{language.level}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="professionContainer">
      {services.map((service, index) => {
        
        return(
        <div className="skills" key={index}>
          <h3 className="skills__h3">{service.profession}</h3>
          <div className='skills__container'>
            <ul className="skills__ul">
              {service.details.map((detail, index) => (
                <li className="skills__li" key={index}>
                  <span>
                    <img
                      className="skills__img"
                      src={detail.logo}
                      alt='skills'
                    />
                  </span>
                  <p className="skills__p">{detail.speciality}</p>
                </li>
              ))}
            </ul>
          </div> 

        </div>
      )})}
      </div>
    </section>
  );
};

export default Skills;
