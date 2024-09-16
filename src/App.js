import { React, useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Profile from './components/Profile';
import NavigationBar from './components/NavigationBar';
import Education from './components/Education';
import Experience from './components/Experience';

// Importing data from dummy database
import { experienceDatabase, educationDatabase, projectDatabase } from './database/database';
import './styles/App.css';

const App = () => {
    // Will implement log in functionality later
    const [loggedIn, setLoggedIn] = useState(false);

    // Dummy data. Will connect the app to a backend later
    const [education, setEducation] = useState(educationDatabase);
    const [experience, setExperience] = useState(experienceDatabase);
    const [projects, setProjects] = useState(projectDatabase);

    
    return (
        /**
         * On lg screens:
         * Navbar is fixed to the top of the screen.
         * Page is divided into two columns: Profile | About, Projects, Education, Experience
         * Profile is sticky top on the left side of the screen
         * 
         * On md and lg screens:
         * Image is showed in the profile section
         * 
         * On md and smaller screens:
         * Navbar is no longer fixed and profile is no longer sticky
         * The two columns are stacked on top of each other
         * Image is showed in the about section
         */
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
                        <Projects projects={projects} />
                        <Education education={education} />
                        <Experience experience={experience} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
