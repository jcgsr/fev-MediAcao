import React, { useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import AOS from "aos";
const Aba = () => {
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
        src="../images/pessoas/pessoas5.jpg"
        quality={95}
        className="bg-img"
        alt="Logo da equipe Mediação"
        placeholder="blurred"
      />
      <Link to="/about" className="btn bottom-left " data-aos="fade-right">
        <h2>Quem Somos</h2>
      </Link>
      <Link
        to="/aba"
        className="btn bottom-right animate__bounceInLeft"
        data-aos="fade-left"
      >
        <h2>Intervenção ABA</h2>
      </Link>
    </section>
  );
};

export default Aba;
