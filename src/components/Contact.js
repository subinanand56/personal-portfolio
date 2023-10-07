import { Container, Row, Col } from "react-bootstrap";
export const Contact = () => {
  return(
    <section className="contact" id="contact">
      <Container className="container">
        <Row>
          <Col >
          <h2>Get in Touch</h2>
            <p>I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!

          </p>
          <a  href="mailto:subinanand8078@gmail.com"> <button  onClick={() => console.log('connect')}><span>Contact me</span></button></a>
          </Col>
          
        </Row>
      </Container>
    </section>
  )
}