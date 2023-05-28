import React, { useEffect } from "react";
import { Link } from "gatsby";
// import video from "../images/video.mp4";
import { StaticImage } from "gatsby-plugin-image";

import AOS from "aos";
const Acompanhante = () => {
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
        src="../images/img/video-replace.jpeg"
        quality={95}
        className="bg-img"
        alt="Logo da equipe Mediação"
        placeholder="blurred"
      />
      {/* <video
        className="video-player"
        height="100%"
        width="100%"
        loop
        muted
        autoPlay
      >
        <source src={video} type="video/mp4" />
      </video> */}
      {/* <StaticImage
        src="../images/pessoas/pessoas5.jpg"
        quality={95}
        className="bg-img"
        alt="Logo da equipe Mediação"
        placeholder="blurred"
      /> */}
      <Link to="/acompanhante" className="btn bottom-left">
        <h3>Acompanhante</h3>
        <p>
          Além do acompanhamento domiciliar, também temos a possibilidade do
          acompanhamento terapêutico no ambiente escolar{" "}
        </p>
      </Link>
    </section>
  );
};

export default Acompanhante;
