/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/eco-craft.png";

const imageAltText = "Eco Craft Photo";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Eco Craft | A e-commerce platform dedicated to craft enthusiasts 🎉",
    description:
      "Eco Craft is an e-commerce platform dedicated to art and craft enthusiasts. It allows users to explore, add, manage, and purchase various art and craft items.",
    url: "https://eco-craft-beta.web.app",
  },
  {
    title: "Neighbourly | Bridging Residents and Reliable Service Providers",
    description:
      "Neighbourly connects residents with skilled workers for home services, making it easy to hire trusted professionals in your community.",
    url: "https://neighbourly-beta.web.app",
  },
  {
    title: "Learnic | Collaborative study platform",
    description:
      "A collaborative study platform designed to connect students, tutors, and administrators for streamlined study session scheduling, resource sharing, and user management.",
    url: "https://learnic-live.web.app",
  },
  {
    title: "Recylo | A hassle-free buying and selling of recyclable materials",
    description:
      "Enjoy hassle-free buying and selling of recyclable materials. Join our community today and make a positive impact on the environment.",
    url: "https://recyclo-beta.web.app",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
