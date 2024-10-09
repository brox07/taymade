import Carousel from 'react-bootstrap/Carousel';
import '../styles/LandingPage.css';
import roller from '../assets/green-roller.jpg';
import carouselImage1 from '../assets/carousel-image-1.png';
import carouselImage2 from '../assets/carousel-image-2.png';
import carouselImage3 from '../assets/carousel-image-3.png';

function LandingCarousel() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img src={carouselImage1} className="carousel-image" alt="image of face roller" />
          <Carousel.Caption>
            <div>
              <p><span>Book a service with Taylor Made Esthetics today</span></p>
              <h1><a href="https://taylorbroxterman.glossgenius.com/services"><span>BOOK HERE!</span></a></h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carouselImage2} className="carousel-image" alt="image of face roller" />
          <Carousel.Caption>
            <div className="carousel-image-2">
              <p><span>"Very professional. I am a repeat customer
                <br/>for life!" - Ish</span></p>
              <p><span>"My first ever facial and it was great!
                <br/>My skin looked and felt fantastic. I cant
                <br/>wait to go back!" - Alondra</span></p>
                <div className="reviews-slide">
                  <h4>Check out more reviews:</h4>
                  <p>
                    <a href="https://www.google.com/maps/place/Taylor+Made+Esthetics,+LLC/@39.0511263,-95.7038793,846m/data=!3m1!1e3!4m8!3m7!1s0x87bf03c7685e495b:0xba4fc275101e345b!8m2!3d39.0511263!4d-95.7013044!9m1!1b1!16s%2Fg%2F11ld5jbxhn?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D">
                      Google Reviews
                    </a>
                    <br/>
                    <a href="https://taylorbroxterman.glossgenius.com/about#all-reviews">
                      Gloss Genius Reviews
                    </a>
                  </p>
                </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carouselImage3} className="carousel-image" alt="image of face roller" />
          <Carousel.Caption>
            <p><span>
              Give the gift of relaxation for a friend or partner!
            </span></p>
            <h3><a href="https://taylorbroxterman.glossgenius.com/gift-cards"><span>Gift Cards Available</span></a></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default LandingCarousel;