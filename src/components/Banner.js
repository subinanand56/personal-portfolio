import { Container,Row ,Col  } from "react-bootstrap"

import headerImg from "../assets/img/header-img.png";
import { useState, useEffect } from "react";
import'animate.css';
import TrackVisibility from "react-on-screen";
import resume from '../assets/img/r.pdf';


export const Banner = () => {
    const [loopNum,setloopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["Web Developer ", "Mern Stack Developer" ,];
    const [text , setText]=useState('');
    const [delta , setDelta ] = useState(300 - Math.random() * 100);
    const period =2000;


    useEffect(()=> {
        let ticker =setInterval(() => {
            tick();
        },delta)

        return() => { clearInterval(ticker)};
    },[text])

    const tick =() => {
        let i =loopNum % toRotate.length;
        let fullText =toRotate[i];
        let updatedText =isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0 , text.length +1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText ===fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setloopNum(loopNum + 1);
            setDelta(500);
        }

    }

    return (
        <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7} >
                <TrackVisibility>
                {({isVisible}) => 
                <div className={isVisible ? "animated__animated animate__fadeIn " : ""}>
                    <span className="tagline">
                        Welcome to my Portfolio
                    </span>
                    <h1>{`Hi I'm Subin `}<span className="wrap">{text}</span></h1>
                    <p>An enthusiastic fresher with highly motivated and leadership skills having bachelors of engineering degree in information Science and Engineering.</p>
                    <a  href="mailto:subinanand8078@gmail.com"> <button  onClick={() => console.log('connect')}><span>Contact me</span></button></a>
                    <a href={resume}> <button  onClick={() => console.log('connect')}><span>Resume</span></button></a>
                    
                </div> }
                </TrackVisibility>
                </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
            </Row>
        </Container>
        </section>
    )
}