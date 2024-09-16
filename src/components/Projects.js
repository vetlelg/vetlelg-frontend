import ProjectItem from './ProjectItem';

const Projects = ({projects}) => (
    <div id="projects" className="pt-5">
        <h6 className="pt-5 fw-bold">PROJECTS</h6>
        { projects.map(item => <ProjectItem item={item} />) }
    </div>
);

export default Projects;
