import React from 'react';

const ProjectsContainer = () => {
  
  const handleVerProjetosClick = (event) => {
    event.preventDefault(); 
    const newTab = window.open('/projects', '_blank');
  };

  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>Dê uma olhadinha nos meus projetos: </p>
      <a href="/projects" className="btn" onClick={handleVerProjetosClick}>
        Ver Projetos
      </a>
    </section>
  );
};

export default ProjectsContainer;