import { React, useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Profile from './components/Profile';
import NavigationBar from './components/NavigationBar';
import Education from './components/Education';
import Experience from './components/Experience';
import { experienceDatabase, educationDatabase, projectDatabase } from './database/database';
import './styles/App.css';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [education, setEducation] = useState(educationDatabase);
    const [experience, setExperience] = useState(experienceDatabase);
    const [projects, setProjects] = useState(projectDatabase);

  return (
    <div>
        <div className="container-fluid fixed-lg-top z-1">
            <NavigationBar />
        </div>
        <div className="container-fluid px-4 px-sm-5" style={{ maxWidth: 1200 }}>
            <div className="row px-md-4">
                <div className="h-100 col-lg-6 sticky-lg-top pt-lg-5 pt-md-3" >
                    <Profile />
                </div>
                <div className="col-12 col-lg-6 pt-lg-5">
                    <About />
                    <Education education={education} />
                    <Experience experience={experience} />
                    <Projects projects={projects} />
                </div> 
            </div>
        </div>
    </div>
    );
};

export default App;
