import React from "react";
import { motion } from "framer-motion";
import { Button, Col, Row, Form, ListGroup } from "react-bootstrap";

const Contact = (event) => {

  const handleSubmit = (event) => {
      event.preventDefault();
      event.stopPropagation();
      alert("Please contact me on LinkedIn.\nJust copy paste the message in LinkedIn :)");
    }
  return (
    <motion.div
      className="contact"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <h2>Contact</h2>
      <Row>
        <Col>
          <div className="contact-form">
            <Form noValidate onSubmit={handleSubmit} method="POST" data-netlify="true">
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" required type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" required type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom03">
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" as="textarea" required placeholder="Message" />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </div>
        </Col>
        <Col>
          <div className="contact-data">
            <p>
              I can help designing a website, develop a new website, improving
              an existing part of your product, building a strong design system.
            </p>
            <p>
              Currently based in Mumbai, India — available for remote-friendly
              work.
            </p>
            <p>
              <ListGroup horizontal>
                <ListGroup.Item>
                  <a
                    href="https://github.com/NayanBramhane"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Github{" "}
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a
                    href="https://www.linkedin.com/in/nayan-bramhane/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </p>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;
