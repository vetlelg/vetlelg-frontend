const About = () => (
        <div id="about" className="row pt-5">
            <h6 className="fw-bold">ABOUT</h6>
            <p>
                I'm a current software engineering student, with a background as an IT technician. After working for several years, I decided to go to university to pursue a career in software engineering.
            </p>
            <p>
                I have experience with the following relevant technologies and tools through my studies, projects I've worked with and courses/certifications:
                <br/>Languages: Java, C#, Python, JavaScript, SQL, CSS, HTML
                <br/>Frameworks/Libraries: React, Bootstrap, Spring Boot, ASP.NET
                <br/>Other: Git, Docker, Linux, Azure, Bash, Powershell, Scrum, Kanban, CI/CD
            </p>
            <p>
                While working as an IT technician I gained extensive experience with IT support, operations, monitoring and incident handling of networks, servers and a wide range of business applications and services.
                I gained experience with troubleshooting a wide range of IT systems as well as communicating effectively under stressful and business-critical incidents.
            </p>
            <p>
                I'm currently looking for new opportunities to gain more experience and learn new things. Feel free to contact me if you have any opportunities or questions.
            </p>
            <img className="mt-5 d-md-none col-10 col-sm-8 mx-auto rounded-circle" src={require("../assets/images/profile.JPEG")} alt="Vetle L. Gundersen" />
        </div>
 
);

export default About;
