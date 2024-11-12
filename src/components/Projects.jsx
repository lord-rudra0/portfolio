import React from 'react';

const projects = [
  {
    title: 'To-Do List Web App',
    description: 'A simple yet effective Web app for managing daily tasks.',
    link: 'https://to-do-list-yehm.onrender.com'
  },
  {
    title: 'SDG Educational Tool',
    description: 'A web-based tool for high school students to learn about the UN SDGs.',
    link: 'https://sdg-expolrer.onrender.com/'
  },
  {
    title: 'Two-Pass Assembler',
    description: 'A full implementation of the two-pass assembler process.',
    link: 'https://sictwopass.vercel.app/'
  },
  {
    title: 'CircularHub',
    description: 'An online platform connecting people to recycle or donate waste materials.',
    link: '#'
  }
];

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="project-grid">
      {projects.map((project) => (
        <div  className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;