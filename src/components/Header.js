import React from "react";
import logo from "../imgs/logo.jpg";
import {Navbar,Container,Nav,NavDropdown,Form,Button,FormControl} from "react-bootstrap";

class Header extends React.Component {
    render() {
        return(
          <Navbar bg="light" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#"><img src={logo} alt="logo" style={{width:100}}/>  </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }} 
                >
                  <Nav.Link href="#action1" className="fw-bold fs-5">Home</Nav.Link>
                  <Nav.Link href="#action2" className="fw-bold fs-5">Link</Nav.Link>
                  <NavDropdown title="Link" id="navbarScrollingDropdown" className="fw-bold fs-5">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" disabled className="fw-bold fs-5">
                    Link
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}

export default Header;