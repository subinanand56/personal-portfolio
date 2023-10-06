import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {ProjectCard} from "./ProjectCards"
import projImg1 from "../assets/img/Netflix.png";
import projImg2 from "../assets/img/portfolio.png";
import projImg3 from "../assets/img/portfolio bootstrap.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

  const projects = [
    {
      title: "Netflix Clone",
      description: "React js & Firebase &TMDB",
      imgUrl: projImg1,
    },
    {
      title: "Personal Portfolio",
      description: "Reactjs",
      imgUrl: projImg2,
    },
    {
      title: "Bootstrap Portfolio",
      description: "Bootstrap & Responsive",
      imgUrl: projImg3,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
                <h2>Projects</h2>
                <p>Something I have bulit</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-3 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"> All Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} ></img>
    </section>
  )
}
