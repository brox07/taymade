import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import '../styles/MainNavbar.css';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

// router dependencies
import { Route, Link, Routes, Outlet } from 'react-router-dom';

// TO DO: 
// - add logos to social links
// - add about-me page
// - open links in new window

function MainNavbar() {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">Taylor Made Esthetics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://taylorbroxterman.glossgenius.com">Book Here!</Nav.Link>
              <Nav.Link as={Link} to="/about">About Me</Nav.Link>
              <NavDropdown title="Socials" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://tiktok.com/@taylorcoates0">
                  TikTok</NavDropdown.Item>
                <NavDropdown.Item href="https://instagram.com/taylormadeesthetics07">
                  Instagram</NavDropdown.Item>
                <NavDropdown.Item href="https://facebook.com/profile.php?id=61553691264389">
                  Facebook</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://search.google.com/local/writereview?placeid=ChIJW0leaMcDv4cRWzQeEHXCT7o">
                  Google Review</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Linktree</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Outlet/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default MainNavbar;