import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavigationBar = () => {
    const [darkTheme, setDarkTheme] = useState(true); // Set initial theme
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
        document.body.setAttribute('data-bs-theme', darkTheme ? 'light' : 'dark'); // Apply the theme to the body
    };

    return (
        /**
         * On lg screens:
         * Navbar is fixed to the top of the screen.
         * 
         * On md and smaller screens:
         * Navbar with offcanvas
         * 
         * Change the background color of the navbar based on the theme. This is so that the navbar is "on top" of the body when scrolling
         * Changes the theme when clicking the switch
         */
        <Navbar collapseOnSelect expand={'lg'} className={"bg-" + (darkTheme ? 'dark' : 'white')}>
            <Navbar.Toggle 
                className="ms-auto border-0"
                onClick={e => e.currentTarget.blur()} // Prevents the button from staying focused, which affects the scrolling behaviour
            />
            <Navbar.Offcanvas placement="end">
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                    <Nav className="ms-auto">
                        <Nav.Link className="px-3" href="/">ABOUT</Nav.Link>
                        <Nav.Link className="px-3" href="/#projects">PROJECTS</Nav.Link>
                        <Nav.Link className="px-3" href="/#education">EDUCATION</Nav.Link>
                        <Nav.Link className="px-3" href="/#experience">EXPERIENCE</Nav.Link>
                        <Form.Check className="p-2 ps-5" type="switch" label={darkTheme ? 'Dark' : 'Light'} onClick={toggleTheme}></Form.Check>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    );
};

export default NavigationBar;
