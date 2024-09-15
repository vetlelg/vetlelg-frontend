const ProjectItem = ({ item }) => (
    <div className="row pt-4">
        <div className="col-12 col-md-3 small">
            <span>{item.year}</span>
        </div>
        <div className="col-12 col-md-9 pb-4">
            <h6 className="mb-1">{item.title} | <a className="text-decoration-none text-color" href={item.github}>GitHub</a></h6>
            <h6 className="small">{item.organization}</h6>
            <p className="mb-1">{item.description}</p>
            <div>{item.technologies.map(t => <span className="py-1 badge text-bg-secondary rounded-pill me-1">{t}</span>)}</div>
        </div>
    </div>
);

export default ProjectItem;