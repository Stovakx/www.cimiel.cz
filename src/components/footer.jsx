import React from "react";
import {Container, Row, Col, } from 'react-bootstrap';
import {PiHouseLineLight} from 'react-icons/pi';
import {HiOutlineMail} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import '../assets/css/footer.css';

const Footer = ()=>{
    
    
    return(
        <React.StrictMode>
            <footer>
                <Container fluid className="mt-5">
                    <Row>
                        <Col xs="12" md="4" className="">
                            <Row>
                                <Col>
                                    <h2 className="text-center text-md-start">Kontaktuj te nás</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="2" className="pe-0 text-center adresaCol">
                                    <PiHouseLineLight/>
                                </Col>
                                <Col xs="10">
                                    <p className="mb-0">Husova 8<br/>
                                        602 00 BRNO 
                                    </p>
                                </Col>
                            </Row>
                            <Row className="mt-2"> 
                                <Col xs="2" className="emailCol pe-0 text-center">
                                    <HiOutlineMail/>
                                </Col>
                                <Col xs="10" >
                                    <p>example@example.com</p>
                                </Col>
                            </Row>
                            <Row>                              
                                <Col xs="2" className="telefonCol pe-0 text-center">
                                    <BsTelephone/>
                                </Col>
                                <Col xs="10">
                                    <p> +420 654 123 657</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="d-flex align-items-end justify-content-end">
                            <Row >
                                <Col>
                                   <p>Vytvořeno: <a href="https://stovakx.github.io/personal_webpage/">Robin Palatáš</a> <br/></p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>        
        </React.StrictMode>
    )
}
export default Footer;