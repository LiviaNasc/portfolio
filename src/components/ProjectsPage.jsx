import '../styles/components/projectspage.sass'

const projects = [
  {
    name: 'Formulário de Pesquisa',
    imageSrc: '/src/img/projetoforms.png',
    githubLink: 'https://github.com/LiviaNasc/formulario_pesquisa',
  },
  {
    name: 'Página de Produto',
    imageSrc: '/src/img/projetopaginaproduto.png',
    githubLink: 'https://github.com/LiviaNasc/pagina_produto',
  },
  {
    name: 'Portfolio em grupo',
    imageSrc: '/src/img/projetoportfoliogrupo.png',
    githubLink: 'https://github.com/LiviaNasc/portfolio_pessoal',
  },
];

const ProjectsPage = () => {
  return (
    <section className="projects">
      <h2>Meus Projetos</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <img src={project.imageSrc} alt={project.name} />
              <p>{project.name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
    );
};

export default ProjectsPage;
