import React, {useState} from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/css/navbar.css';

const Header = ()=>{
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = ()=>{
        setIsOpen(!isOpen);
    };


    return(
        <React.StrictMode>
            <Navbar expand="lg" className=''>
                <Container fluid className='ps-4'>
                    <Navbar.Brand>CIMIEL s.r.o.</Navbar.Brand>
                    <Navbar.Toggle onClick={toggleNavbar} aria-controls='navbar'>
                        {isOpen ? <FiX /> : <FiMenu />}
                    </Navbar.Toggle>
                    <Navbar.Collapse id='navbar'>
                        <Nav className='me-auto '>
                            <Nav.Link href='/'>Home page</Nav.Link>
                            <Nav.Link href='/projects'>Projects</Nav.Link>
                            <Nav.Link href='/kontakt'>Kontakt</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.StrictMode>
    );
};
export default Header