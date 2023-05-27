import React, { useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import AOS from "aos";
const Equipe = () => {
  useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });
  return (
    <section className="home">
      <StaticImage
        src="../images/img/people.jpg"
        quality={95}
        className="bg-img"
        alt="Logo da equipe Mediação"
        placeholder="blurred"
      />
      <Link to="/about" className="btn bottom-left ">
        <h3>Equipe Mediação</h3>
        <p>
          Formada por um grupo de psicólogas(os) e estudantes de psicologia em
          formação.{" "}
        </p>
      </Link>
      {/* <Link
        to="/aba"
        className="btn bottom-right animate__bounceInLeft"
        data-aos="fade-left"
      >
        <h2>Intervenção ABA</h2>
      </Link> */}
    </section>
  );
};

export default Equipe;
