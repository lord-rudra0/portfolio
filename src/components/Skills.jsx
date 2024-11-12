import React from 'react';

const skills = [
  'Python', 'Java', 'C', 'C#', 'HTML & CSS', 'JavaScript', 'React',
  'Node.js', 'Express', 'MongoDB', 'Flask', 'SQL', 'Git & GitHub', 'Dart & Flutter'
];

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <div className="skills-list">
      {skills.map((skill) => 
      (<div className="skill">{skill}</div>))
      }
    </div>
  </section>
);

export default Skills;