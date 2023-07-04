"use client";

import React from "react";
import "./header.scss";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "../../../library/fonts/font.scss";

export default function Header() {
  return (
    <header>
      <Navbar expand={"lg"} className="bg-body-tertiary mb-3">
        <Container>
          <Navbar.Brand href="#">Fabrício</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Menu hamburger
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">
                  <span>~/</span> home
                </Nav.Link>
                <Nav.Link href="#action2">
                  <span>#</span> works
                </Nav.Link>
                <Nav.Link href="#action2">
                  <span>#</span> about-me
                </Nav.Link>
                <Nav.Link href="#action2">
                  <span>#</span> contacts
                </Nav.Link>
                <Nav.Link className="mobile-link" href="#action2">
                  <a href="https://github.com/fbgrigolo">
                    <i className="fa-brands fa-github fa-xl"></i>
                  </a>
                </Nav.Link>
                <Nav.Link className="mobile-link" href="#action2">
                  <a href="https://www.linkedin.com/in/fbcgrigolo/">
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                  </a>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <div className="icons">
        <span className="line"></span>
        <a href="https://github.com/fbgrigolo">
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/fbcgrigolo/">
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </a>
      </div>
    </header>
  );
}
