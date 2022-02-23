import React, { useEffect } from "react";
import { Link } from "gatsby";
import video from "../images/video.mp4";
import AOS from "aos";
const Avaliacao = () => {
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
      <video
        className="video-player"
        height="100%"
        width="100%"
        loop
        muted
        autoPlay
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* <StaticImage
        src="../images/pessoas/pessoas5.jpg"
        quality={95}
        className="bg-img"
        alt="Logo da equipe Mediação"
        placeholder="blurred"
      /> */}
      <Link to="/avaliacao" className="btn bottom-left">
        <h2>Avaliação</h2>
      </Link>
      <Link to="/carga-horaria" className="btn bottom-right">
        <h2>Carga-horária</h2>
      </Link>
    </section>
  );
};

export default Avaliacao;
