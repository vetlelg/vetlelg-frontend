import ExperienceItem from './ExperienceItem';

const Experience = ({experience}) => (
    <div id="experience" className="pt-5 pb-4">
        <h6 className="pt-5 fw-bold">EXPERIENCE</h6>
        { experience.map(item => <ExperienceItem item={item} />) }
    </div>
);

export default Experience;