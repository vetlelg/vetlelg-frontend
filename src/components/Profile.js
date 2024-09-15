import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Profile = () => (
    <div className="pt-lg-5">
            <h1 className="fw-bold display-5">Vetle L. Gundersen</h1>
            <h5 className="fw-medium">Software Engineering Student</h5>
            <p style={{width: 300}}>Looking for new opportunities to gain more experience and learn new things.</p>
            <Navbar className="pb-4">
            <Nav>
                <Nav.Link className="pt-0 ps-0 pe-3" href="https://linkedin.com/in/vetlelg">LinkedIn</Nav.Link>
                <Nav.Link className="pt-0 pe-3" href="https://github.com/vetlelg">GitHub</Nav.Link>
                <Nav.Link className="pt-0 pe-3" href="mailto:vetlelg@hotmail.com">Email</Nav.Link>
                <Nav.Link className="pt-0" href="#">Resume</Nav.Link>
            </Nav>
            </Navbar>
            <img className="col-8 col-sm-6 col-md-5 col-lg-9 rounded-circle" src={require("../assets/images/profile.JPEG")} alt="Vetle L. Gundersen" />
    </div>
);

export default Profile;