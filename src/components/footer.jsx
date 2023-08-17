import React from "react";
import {Container, Row, Col, } from 'react-bootstrap';
import {PiHouseLineLight} from 'react-icons/pi';
import {HiOutlineMail} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import '../assets/css/footer.css';

const Footer = ()=>{
    
    
    return(
        <React.StrictMode>
            <footer className="mt-5">
                <Container fluid className="pt-5">
                    <Row>
                        <Col xs="12" lg="5" className="ps-5">
                            <Row>
                                <Col className="ps-5">
                                    <h2>Kontaktuj te nás</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="12" lg="2" className="pe-0 text-center adresaCol">
                                    <PiHouseLineLight/>
                                </Col>
                                <Col xs="12" lg="10">
                                    <p className="text-center text-lg-start mb-0">Čepí 12<br/>
                                        533 32, Čepí 
                                    </p>
                                </Col>
                            </Row>
                            <Row className="mt-2"> 
                                <Col xs="12" lg="2" className="emailCol pe-0 text-center">
                                    <HiOutlineMail/>
                                </Col>
                                <Col xs="12" lg="10" >
                                    <p className="text-center text-lg-start">cimiel@email.cz</p>
                                </Col>
                            </Row>
                            <Row>                              
                                <Col xs="12" lg="2" className="telefonCol pe-0 text-center">
                                    <BsTelephone/>
                                </Col>
                                <Col xs="12" lg="10">
                                    <p className="text-center text-lg-start"> +420 774 317 215</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="12" lg="7">
                            <form >
                                <div className="inputBox1">
                                    <input type="email" required/>
                                    <span className="email">Email</span>
                                </div>

                                <div className="inputBox">
                                    <input type="telephone" required/>
                                    <span>telefonní číslo</span>
                                </div>

                                <div className="inputBox">
                                    <textarea type="text" required/>
                                    <span>Zpráva</span>
                                </div>

                                <button className="enter">Enter</button>
                            </form>
                        </Col>                            
                    </Row>
                    <Row >
                        <Col>
                            <p className="text-center">Vytvořeno: <a href="https://stovakx.github.io/personal_webpage/">Robin Palatáš</a> <br/></p>
                        </Col>
                    </Row>
                </Container>
            </footer>        
        </React.StrictMode>
    )
}
export default Footer;