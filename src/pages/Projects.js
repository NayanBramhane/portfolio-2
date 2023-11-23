import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      name: "Netflix Clone",
      imageUrl:
        "https://d33wubrfki0l68.cloudfront.net/655f7c9069eed60008cfc022/screenshot_2023-11-23-16-24-18-0000.png",
      link: "https://netflix-clone-by-nayan.netlify.app/",
    },
    {
      name: "Task Management App",
      imageUrl:
        "https://www.sweetprocess.com/wp-content/uploads/2022/10/task-management.png",
      link: "https://task-management-app-frontend-9tm4.vercel.app/",
    },
    {
      name: "BuyAll",
      imageUrl:
        "https://d33wubrfki0l68.cloudfront.net/6489e836eb9e1f00089fe0c9/screenshot_2023-06-14-16-18-34-0000.png",
      link: "https://buy-all-nb.netlify.app/",
    },
    {
      name: "Restaurant Website",
      imageUrl:
        "https://d33wubrfki0l68.cloudfront.net/64f85363aaf80900071729c5/screenshot_2023-09-06-10-25-17-0000.png",
      link: "https://restaurant-website-3ba104.netlify.app/",
    },
    {
      name: "Spotify Clone",
      imageUrl:
        "https://d33wubrfki0l68.cloudfront.net/647f1b0c27e2d500087e178c/screenshot_2023-06-06-11-40-14-0000.png",
      link: "https://www.youtube.com/watch?v=m2cbO9lIWfM",
    },
    {
      name: "Contacts App",
      imageUrl:
        "https://d33wubrfki0l68.cloudfront.net/64816d859a9aad00077b10ea/screenshot_2023-06-08-05-56-40-0000.png",
      link: "https://contacts-app-6463.netlify.app/",
    },
    {
      name: "Weather App",
      imageUrl:
        "https://d33wubrfki0l68.cloudfront.net/64758399e5192121be996941/screenshot_2023-05-30-05-03-30-0000.png",
      link: "https://vanilla-weather-app-5f8e27.netlify.app/",
    },
    {
      name: "ShoppinGlance",
      imageUrl:
        "https://user-images.githubusercontent.com/74374719/205477950-f0fbe85f-9840-4fbe-b9ba-1fb1f6f6d8e0.png",
      link: "https://github.com/NayanBramhane/ShoppingGlance",
    },
    {
      name: "Air Canvas",
      imageUrl:
        "https://techvidvan.com/tutorials/wp-content/uploads/sites/2/2021/07/with-circle.png",
      link: "https://github.com/NayanBramhane/Air-Canvas",
    },
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.name.replaceAll(" ", "-")}
            >
              <Card>
                <Card.Link href={item.link || `#`} target="_blank">
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                </Card.Link>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
