import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoodreads } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Profile = () => (
    <div className="row pt-lg-5">
        <div className="me-md-5 col-sm-8 col-md-6 col-lg-12">
            <h1 className="fw-bold display-5 text-nowrap">Vetle L. Gundersen</h1>
            <h5 className="fw-medium">Software Developer</h5>
            <p style={{width: 305}}>B.Eng in Software Engineering</p>
            <Navbar className="pb-5">
            <Nav>
                <Nav.Link className="pt-0 ps-2 pe-3" href="https://linkedin.com/in/vetlelg">
                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </Nav.Link>
                <Nav.Link className="pt-0 pe-3" href="https://github.com/vetlelg">
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                </Nav.Link>
                <Nav.Link className="pt-0 pe-3" href="mailto:vetlelg@hotmail.com">
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                </Nav.Link>
                <Nav.Link className="pt-0 pe-3" href="https://www.goodreads.com/user/show/130873670-vetle-larsen-gundersen">
                    <FontAwesomeIcon icon={faGoodreads} size="xl" />
                </Nav.Link>
                <Nav.Link className="pt-0" href="/CV-VetleLarsenGundersen.pdf" target="_blank">
                    <FontAwesomeIcon icon={faFilePdf} size="xl" />
                </Nav.Link>
            </Nav>
            </Navbar>
        </div>
        <img className="d-none d-md-inline col-md-5 col-lg-9 rounded-circle img-fluid" src="/profile.JPEG" alt="Vetle L. Gundersen" />
    </div>
);

export default Profile;