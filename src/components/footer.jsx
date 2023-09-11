import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import {Container, Row, Col, } from 'react-bootstrap';
import {PiHouseLineLight} from 'react-icons/pi';
import {HiOutlineMail} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import '../assets/css/footer.css';

const Footer = ()=>{
    const form = useRef()
    const sendEmail = (e)=>{
        e.preventDefault();
        //change email to client
        emailjs.sendForm('service_m4jnha7', 'template_m0pmdgr', form.current, 'BMEa4fAyy2FLRT6bH')
        .then((result)=>{
            console.log(result.text);
            e.target.reset();
        }, (error) =>{
            console.log(error.text);
        })
    }
    
    return(
        <React.StrictMode>
            <footer className="mt-5">
                <Container fluid className="pt-5">
                    <Row>
                        <Col xs="12" lg="5" className="ps-5 my-4 my-lg-0">
                            <Row>
                                <Col className="ps-lg-4">
                                    <h2 className="text-center text-lg-start">Kontaktuj te nás</h2>
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
                        <Col xs="12" lg="7" className="d-flex justify-content-center ">
                            <form ref={form} onSubmit={sendEmail} >
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
                            <p className="text-center">Vytvořeno: <a href="https://www.linkedin.com/in/robin-palat%C3%A1%C5%A1-8b28ba133/">Robin Palatáš</a> <br/></p>
                        </Col>
                    </Row>
                </Container>
            </footer>        
        </React.StrictMode>
    )
}
export default Footer;