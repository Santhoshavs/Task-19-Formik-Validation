import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();

  return (
    <>
      {/* Sticky navigation bar  */}
      <div
        style={{
          position: "sticky",
          zIndex: 1,
          top: 0,
          backgroundColor:"bisque",
        }}
      >
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Brand>
              <b>LIBRARY MANAGEMENT</b>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="text-center">
                <Nav className="mx-auto">
                  <Nav.Link onClick={() => navigate("/dashboard")}>
                    <b className="btn btn-outline-dark fw-bold text-info">
                      Book Records
                    </b>
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate("/add-book")}>
                    <b className="btn btn-outline-dark fw-bold text-info">
                      Add Book
                    </b>
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate("/author-records")}>
                    <b className="btn btn-outline-dark fw-bold text-info">
                      Author Records
                    </b>
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate("/add-author")}>
                    <b className="btn btn-outline-dark fw-bold text-info">
                      Add Author
                    </b>
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;