import Carousel from 'react-bootstrap/Carousel';
import '../styles/LandingPage.css';
import roller from '../assets/green-roller.jpg';

function LandingCarousel() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img src={roller} className="carousel-image" alt="image of face roller" />
          <Carousel.Caption>
            <div>
              <p>Book a service with Taylor Made Esthetics today!!</p>
              <a href="https://taylorbroxterman.glossgenius.com/services"><h1>BOOK HERE!</h1></a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={roller} className="carousel-image" alt="image of face roller" />
          <Carousel.Caption>
            <div>
              <p>"Very professional. I am a repeat customer
                <br/>for life!" - Ish</p>
              <p>"My first ever facial and it was great!
                <br/>My skin looked and felt fantastic. I cant
                <br/>wait to go back!" - Alondra</p>
              <h4>Check out more reviews:</h4>
              <p><a href="https://www.google.com/maps/place/Taylor+Made+Esthetics,+LLC/@39.0511263,-95.7038793,846m/data=!3m1!1e3!4m8!3m7!1s0x87bf03c7685e495b:0xba4fc275101e345b!8m2!3d39.0511263!4d-95.7013044!9m1!1b1!16s%2Fg%2F11ld5jbxhn?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D">Google Reviews</a>
                <br/><a href="https://taylorbroxterman.glossgenius.com/about#all-reviews">Gloss Genius Reviews</a></p>
            </div>
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
    </div>
  );
}

export default LandingCarousel;