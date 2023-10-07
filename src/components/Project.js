import React from "react";
import { Container, Row, Col, Tab, Nav, Card } from "react-bootstrap"; // Import React Bootstrap components

import projImg1 from "../assets/img/Netflix.png";
import projImg2 from "../assets/img/portfolio.png";
import projImg3 from "../assets/img/portfolio bootstrap.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
export const Projects = () => {
  const projects = [
    {
      title: "Netflix Clone",
      description: "React js & Firebase & TMDB",
      imgUrl: projImg1,
      gitUrl: "https://github.com/subinanand56/portfolio", 
    },
    {
      title: "Personal Portfolio",
      description: "React & Animate Css ",
      imgUrl: projImg2,
      gitUrl: "https://github.com/subinanand56/portfolio", 
    },
    {
      title: "Bootstrap Portfolio",
      description: "Bootstrap & Responsive",
      imgUrl: projImg3,
      gitUrl: "https://github.com/your-username/bootstrap-portfolio", 
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Something I have built</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-3 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first"> All Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <Col key={index} sm={6} md={4}>
                        <Card className="proj-imgbx" >
                          <Card.Img src={project.imgUrl} alt={project.title} />
                          <Card.Body>
                            <Card.Title style={{ color: "black" }}>{project.title}</Card.Title>
                            <Card.Text style={{ color: "black" }}>{project.description}</Card.Text>
                            <Card.Link
                              href={project.gitUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View
                            </Card.Link>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
     <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
