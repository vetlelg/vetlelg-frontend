import ProjectItem from './ProjectItem';

// Gets all the projects from the database and creates a ProjectItem for each one
const Projects = ({projects}) => (
    <div id="projects" className="pt-5">
        <h6 className="pt-5 fw-bold">PROJECTS</h6>
        { projects.map(item => <ProjectItem item={item} />) }
    </div>
);

export default Projects;
