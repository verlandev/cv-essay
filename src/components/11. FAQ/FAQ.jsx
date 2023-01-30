import React from "react";
import "./FAQ.scss";
import { useState } from "react";

const FAQ = (faqs) => {
  const faqInfo = faqs.faq;

  const [faqSelected, setFaqSelected] = useState(null);

  const toggle = (titleFaq) => {
    if (faqSelected === titleFaq) {
      return setFaqSelected(null);
    }

    setFaqSelected(titleFaq)
  };

  return (
    <section className="faqSection" id="faqs">

    <div className="faqTitle">
        <p className="faqTitle__p">Si has llegado hasta aquí...</p>
        <h2 className="faqTitle__h2">Te cuento algunas cosas más sobre mí</h2>
    </div>

      
        <div className="accordion">
          {faqInfo.map((faq, titleFaq) => (
            <div className="item">
              <div className="title" onClick={() => toggle(titleFaq)}>
                <h2 className="title__h2">{faq.question}</h2>
                <span className="title__span">{faqSelected === titleFaq ? '-' : '+'}</span>
              </div>
              <div className={faqSelected === titleFaq ? 'contentShow' : 'content'}>
                <p className='content__p'>{faq.answer}</p>
              </div> 
            </div>
          ))}
        </div>
      
    </section>
  );
};

export default FAQ;
