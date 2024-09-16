import EducationItem from './EducationItem';

// Gets all the education from the database and creates an EducationItem for each one
const Education = ({education}) => (
        <div id="education" className="pt-5">
            <h6 className="pt-5 fw-bold">EDUCATION</h6>
            { education.map(item => <EducationItem item={item} />) }
        </div>
);

export default Education;