import { Container , Col , Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/mongodb-icon.svg";
import meter2 from "../assets/img/react.svg";
import meter3 from "../assets/img/nodejs-.svg";
import meter4 from "../assets/img/expressjs_logo.png";
import meter5 from "../assets/img/html.svg";
import meter6 from "../assets/img/css.svg";
import meter7 from "../assets/img/javascript-.svg";
import meter8 from "../assets/img/bootstrap.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                            About
                            </h2>
                            <p>
                            An enthusiastic fresher with highly motivated and leadership skills.Having bachelors of engineering degree in information Science and Engineering.
                            </p>
                            <h3>Languages</h3>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                              <img src={meter1} alt='image'></img>
                              <h5>MongoDB</h5>
                            </div>
                            <div className='item'>
                              <img src={meter2} alt='image'></img>
                              <h5>React Js</h5>
                            </div>
                            <div className='item'>
                              <img src={meter3} alt='image'></img>
                              <h5>Nodejs</h5>
                            </div>
                            <div className='item'>
                              <img src={meter4} alt='image'></img>
                              <h5>Expressjs</h5>
                            </div>
                            <div className='item'>
                              <img src={meter5} alt='image'></img>
                              <h5>HTML</h5>
                            </div>
                            <div className='item'>
                              <img src={meter7} alt='image'></img>
                              <h5>Javascript</h5>
                            </div>
                            <div className='item'>
                              <img src={meter6} alt='image'></img>
                              <h5>CSS</h5> 
                            </div>
                            <div className='item'>
                              <img src={meter8} alt='image'></img>
                              <h5>Bootstrap</h5>
                            </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} />
        </section>
      )
}