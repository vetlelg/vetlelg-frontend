import ExperienceItem from './ExperienceItem';

const Experience = ({experience}) => (
    <div id="experience" className="pt-5">
        <h6 className="pt-5">EXPERIENCE</h6>
        { experience.map(item => <ExperienceItem item={item} />) }
    </div>
);

export default Experience;