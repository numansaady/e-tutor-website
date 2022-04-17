import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className=" bg-secondary">
      <Container className="text-center py-3">
        <p>Copyright &copy; E-Tutor {year} </p>
      </Container>
    </div>
  );
};

export default Footer;
