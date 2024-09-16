import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Profile = () => (
    <div className="row pt-lg-5">
        <div className="me-md-5 col-sm-8 col-md-6 col-lg-12">
            <h1 className="fw-bold display-5 text-nowrap">Vetle L. Gundersen</h1>
            <h5 className="fw-medium">Software Engineering Student</h5>
            <p style={{width: 300}}>Looking for new opportunities to gain more experience and learn new things.</p>
            <Navbar className="pb-5">
            <Nav>
                <Nav.Link className="pt-0 ps-0 pe-3" href="https://linkedin.com/in/vetlelg">LINKEDIN</Nav.Link>
                <Nav.Link className="pt-0 pe-3" href="https://github.com/vetlelg">GITHUB</Nav.Link>
                <Nav.Link className="pt-0 pe-3" href="mailto:vetlelg@hotmail.com">EMAIL</Nav.Link>
                <Nav.Link className="pt-0" href="#">RESUME</Nav.Link>
            </Nav>
            </Navbar>
        </div>
        <img className="d-none d-md-inline col-md-5 col-lg-9 rounded-circle" src={require("../assets/images/profile.JPEG")} alt="Vetle L. Gundersen" />
    </div>
);

export default Profile;