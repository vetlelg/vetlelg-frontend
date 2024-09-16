
// Creates an EducationItem with the data from the database
const EducationItem = ({ item }) => (
    <div className="row pt-4">
        <div className="col-12 col-md-3 col-lg-3 small">
            <span>{item.year}</span>
        </div>
        <div className="col-12 col-md-9 col-lg-9">
            <h6 className="mb-1 fw-bold">{item.title} | {item.degree}</h6>
            <h6 className="small fw-bold">{item.school}</h6>
            <p>{item.description}</p>
        </div>
    </div>
);

export default EducationItem;