import Carousel from 'react-bootstrap/Carousel';
import '../styles/LandingPage.css';
import roller from '../assets/green-roller.jpg';

function LandingCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={roller} className="carousel-image" alt="image of face roller" />
        <Carousel.Caption>
            <a href="https://taylorbroxterman.glossgenius.com"><h1>BOOK HERE!</h1></a>
            <p>Book a service with Taylor Made Esthetics today!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={roller} className="carousel-image" alt="image of face roller" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={roller} className="carousel-image" alt="image of face roller" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default LandingCarousel;