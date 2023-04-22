import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sale from "../../Assets/Projects/sale-removebg-preview.png";
import skill from "../../Assets/Projects/skill-removebg-preview.png";
import tutor from "../../Assets/Projects/tutor-removebg-preview.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sale}
              isBlog={false}
              title="Used Book Sale"
              description="This website is a used for used book sale. Where anyone can buy and sell secoand hand books. There is three different user login system Admin, Seller & Buyer. I have made using some latest technologies like React, Firebase, Tailwind Css, TanstackQuary. Also this site has a realtime backend."
              ghLink="https://github.com/Ikramul-Mahin/used-book-sale-client-side"
              demoLink="https://assignment-client-12.web.app/"
            />
          </Col>
          <link rel="stylesheet" href="" />
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tutor}
              isBlog={false}
              title="Super Tutor"
              description="My personal tution review website build with React.js and Tailwind Css which takes the content from makdown files and renders it using React.js.Here is a good authentication system using firebase.For UI TaliwindCss liberary Daisy UI is used. A student can review a subject and aslo can delete his/her comment. "
              ghLink="https://github.com/Ikramul-Mahin/service-review-client-side"
              demoLink="https://assignment-11-325fb.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skill}
              isBlog={false}
              title="Skill Developer"
              description="An IT related course website made for developing self skills. This site is designed with Bootsrap and React JS.This is a Full Stack website. Authentication of Firebase and React pdf is used. You can downlode any course outline  "
              ghLink="https://github.com/Ikramul-Mahin/learing-platform-client-side"
              demoLink="https://practice-all-task.web.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
