import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Taylor Made Esthetics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://taylorbroxterman.glossgenius.com">Book Here!</Nav.Link>
            <Nav.Link href="#about-me">About Me</Nav.Link>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;