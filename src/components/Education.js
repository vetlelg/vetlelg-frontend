import EducationItem from './EducationItem';

const Education = ({education}) => (
        <div id="education" className="pt-5">
            <h6 className="pt-5">EDUCATION</h6>
            { education.map(item => <EducationItem item={item} />) }
        </div>
);

export default Education;