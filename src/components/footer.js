import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} - Mediação</p>
      <p style={{ fontSize: "x-small" }}>Todos os Direitos Reservados</p>
    </footer>
  );
};

export default Footer;
