import React from 'react';
import { Col, Row, Container, Card, } from 'react-bootstrap';
import {GiPuzzle, GiGreekTemple} from 'react-icons/gi';
import {BsBricks, BsFillLightningFill} from 'react-icons/bs'
import IMG4 from '../assets/images/img4.webp';
import '../assets/css/index.css';


const IndexPage = ()=>{
    return(
        <React.StrictMode>
            <Container fluid className='pt-4 heroContainer d-flex align-items-center justify-content-center flex-column'>
                <Row className='mx-4'>
                    <Col>
                        <h1 className='heroNadpis'>Cimiel s.r.o.</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='mt-3 mx-4'>
                        <p className='heroText'>Lorem ipsum dolor sit amet, consectetur adipiscing eli.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container className='mainTextContainer mt-5 '>
                <Row className='rowServices'>
                    <Col xs="12" md="6" className='mainTextImg p-0'>

                    </Col>
                        <Col xs="12" md="6" className='ps-5 mt-3'>
                            <h3 className='ps-2'>
                                Naše služby
                            </h3>
                            <ul>
                                <li>první</li>
                                <li>ipsum</li>
                                <li>Loren</li>
                                <li>dolor</li>
                                <li>consectetur</li>
                                <li>adipiscin consectetur eli</li>
                            </ul>
                        </Col>
                </Row>
                <Row className='rowSkills'>
                    <Col xs="12" md="6" lg="3" className='colSkills'>
                        <div>
                            <BsFillLightningFill/>
                        </div>
                        <div className='mt-2'>
                            <p>
                                Velké zkušenosti
                            </p>
                        </div>
                    </Col>
                    <Col xs="12" md="6" lg="3" className='colSkills'>
                        <div>
                            <GiPuzzle/>
                        </div>
                        <div className='mt-2'>
                            <p>Profesionální tým</p>
                        </div>
                    </Col>
                    <Col xs="12" md="6" lg="3" className='colSkills'>
                        <div>
                            <BsBricks/>
                        </div>
                        <div className='mt-2'>
                            <p>
                                Držení termínů
                            </p>
                        </div>
                    </Col>
                    <Col xs="12" md="6" lg="3" className='colSkills'>
                        <div>
                            <GiGreekTemple />
                        </div>
                        <div className='mt-2'>
                            <p>
                            Zodpovědný přístup
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className='aboutUs'>
                    <Col xs="12" md="6" className='mt-3 px-4'>
                        <h2>
                            O nás
                        </h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Col>
                    <Col xs="12" md="6" className='aboutUsImg'>

                    </Col>
                </Row>
            </Container>
            <Container className='mt-5 technologyContainer'>
                <Row>
                    <Col>
                        <h2 className='text-center'>Používané technologie</h2>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-center mt-2  gy-3'>
                    <Col xs="12" md="6" lg="4" className='cardCol'>
                        <Card>
                            <Card.Img variant='top' src={IMG4}/>
                            <Card.Body>
                                <Card.Title>Jméno technologi</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="12" md="6" lg="4" className='cardCol'>
                        <Card>
                            <Card.Img variant='top' src={IMG4}/>
                            <Card.Body>
                                <Card.Title>Jméno technologi</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="12" md="6" lg="4" className='cardCol'>
                        <Card>
                            <Card.Img variant='top' src={IMG4}/>
                            <Card.Body>
                                <Card.Title>Jméno technologi</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="12" md="6" lg="4" className='cardCol'>
                        <Card>
                            <Card.Img variant='top' src={IMG4}/>
                            <Card.Body>
                                <Card.Title>Jméno technologi</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </React.StrictMode>
    )
}
export default IndexPage;

