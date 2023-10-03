import React from 'react';
import { Col, Row, Container, Card, } from 'react-bootstrap';
import {GiPuzzle, GiGreekTemple} from 'react-icons/gi';
import {BsBricks, BsFillLightningFill} from 'react-icons/bs'
import Gallery from '../components/gallery';
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
                        <p className='heroText'>Profesionální pokládání kabelů a kompletní elektrické řešení pro domy, byty a průmyslové prostory.
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
                                <li>Pokládání kabelů</li>
                                <li>Celková kompletace elektroinstalací</li>
                                <li>Zásuvky a vypínače</li>
                                <li>Podlahové topení</li>
                                <li>Hromosvody</li>
                                <li>Světla</li>
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
                        Jsme tým profesionálů s dlouholetou zkušeností v oboru elektroinstalací. 
                        Naše služby zahrnují široké spektrum elektrických prací, ať už jde o domácí elektroinstalace nebo komplexní projekty pro průmyslové prostory. 
                        Společně s námi můžete mít jistotu kvalitního provedení a bezpečnosti vašich elektrických systémů.
                        </p>
                    </Col>
                    <Col xs="12" md="6" className='aboutUsImg'>

                    </Col>
                </Row>
            </Container>
            <Gallery/>
        </React.StrictMode>
    )
}
export default IndexPage;

