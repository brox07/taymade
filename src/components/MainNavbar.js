import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import '../styles/MainNavbar.css';

import Home from '../pages/Home';
import About from '../pages/About';

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
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <NavDropdown title="Socials" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://tiktok.com/@taylorcoates0">
                  TikTok</NavDropdown.Item>
                <NavDropdown.Item href="https://instagram.com/taylormadeesthetics07">
                  Instagram</NavDropdown.Item>
                <NavDropdown.Item href="https://facebook.com/profile.php?id=61553691264389">
                  Facebook</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Reviews" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.google.com/maps/place/Taylor+Made+Esthetics,+LLC/@39.0511263,-95.7038793,846m/data=!3m1!1e3!4m8!3m7!1s0x87bf03c7685e495b:0xba4fc275101e345b!8m2!3d39.0511263!4d-95.7013044!9m1!1b1!16s%2Fg%2F11ld5jbxhn?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D">
                  Google Reviews</NavDropdown.Item>
                <NavDropdown.Item href="https://taylorbroxterman.glossgenius.com/about#all-reviews">
                  Gloss Genius Reviews</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Outlet/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default MainNavbar;