import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Services = () => {
  const serviceList = [
    {
      name: "SEO",
      imageUrl: "https://blog.webhopers.com/wp-content/uploads/2022/05/Top-SEO-Company-in-Nashik.jpg",
    },
    {
      name: "Web Application Development",
      imageUrl: "https://blitzmobileapps.com/blog/uploads/posts/1694773104.jpg",
    },
  ];

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <div className="services">
        <h2>Services</h2>
        <div className="wrapper">
          {serviceList.map((item) => {
            return (
              <motion.div
                key={item.name.replaceAll(" ", "-")}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <Card>
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
