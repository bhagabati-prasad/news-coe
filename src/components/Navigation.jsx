import React, { useState } from "react"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Row, Col, Container, Form, FormControl, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function Navigation() {
  const [cat, setCat] = useState();
  let history = useHistory();
  const handleSelect = (e) => {
    console.log(e);
    // setCat(e);
    // console.log(cat);

    history.push(`/category?q=${e}`);
    window.location.reload(false);


  }

  const [search, setSearch] = useState();
  const makeChange = (event) => {
    const word = event.target.value;
    setSearch(word);
    console.log(search);
  }
  return (
    <>



      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/237/237014.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            News Feed
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/all-news">All news</Nav.Link>
              <NavDropdown title="Company" id="navbarScrollingDropdown" onSelect={handleSelect}>
                <NavDropdown.Item eventKey="Tech Mahindra">Tech Mahindra</NavDropdown.Item>
                <NavDropdown.Item eventKey="Infosys">Infosys</NavDropdown.Item>
                <NavDropdown.Item eventKey="Accenture">Accenture</NavDropdown.Item>
                <NavDropdown.Item eventKey="wipro">Wipro</NavDropdown.Item>
                <NavDropdown.Item eventKey="TCS">TCS</NavDropdown.Item>
                <NavDropdown.Item eventKey="Infy">Infy</NavDropdown.Item>

              </NavDropdown>

            
            <NavDropdown title="Technology" id="navbarScrollingDropdown" onSelect={handleSelect}>
              <NavDropdown.Item eventKey="Blockchain">Blockchain</NavDropdown.Item>
              <NavDropdown.Item eventKey="AI">AI</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Partners" id="navbarScrollingDropdown" onSelect={handleSelect}>
              <NavDropdown.Item eventKey="AWS">AWS</NavDropdown.Item>
              <NavDropdown.Item eventKey="Google">Google</NavDropdown.Item>
              <NavDropdown.Item eventKey="IBM">IBM</NavDropdown.Item>
              <NavDropdown.Item eventKey="Microsoft">Microsoft</NavDropdown.Item>
              
            </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                value={search}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={makeChange}
              />
              <Button onClick={() => {history.push(`/all-news?q=${search}`)
              window.location.reload(false);
            }} variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>




    </>
  )
}
export default Navigation