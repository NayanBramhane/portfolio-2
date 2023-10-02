import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Col, Row, Form, ListGroup } from "react-bootstrap";

const Contact = (event) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
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
            <Form noValidate validated={validated} onSubmit={handleSubmit} method="POST" data-netlify="true">
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom03">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" required placeholder="Message" />
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
