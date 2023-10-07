
import React from "react";
import { Card, Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, gitUrl }) => {
  return (
    <Col sm={6} md={4}>
      <Card className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={gitUrl} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </Card>
    </Col>
  );
};

export default ProjectCard;

