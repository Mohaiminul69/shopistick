import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ContactUs.css';
const ContactUs = () => {
    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="contact-info-wrap">
                        <div className="single-contact-info">
                            <div className="contact-icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="contact-description">
                                <p>+012 345 678 102</p>
                                <p>+012 345 678 102</p>
                            </div>
                        </div>
                        <div className="single-contact-info">
                            <div className="contact-icon">
                                <i className="fas fa-globe-asia"></i>
                            </div>
                            <div className="contact-description">
                                <p>yourname@email.com</p>
                                <p>yourwebsitename@email.com</p>
                            </div>
                        </div>
                        <div className="single-contact-info">
                            <div className="contact-icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-description">
                                <p>Address goes here, </p>
                                <p>street, Crossroad 123.</p>
                            </div>
                        </div>
                        <div className="contact-social">
                            <h3>Follow Us</h3>
                            <ul>
                                <li><a href="facebook"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="pinterest"><i className="fab fa-pinterest-p"></i></a></li>
                                <li><a href="thumblr"><i className="fab fa-tumblr"></i></a></li>
                                <li><a href="vimeo"><i className="fab fa-vimeo-v"></i></a></li>
                                <li><a href="twitter"><i className="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                  </div>
                </Col>
                <Col lg={8}>
                    <div className="contact-form">
                        <div className="contact-title">
                            <h3>Get In Touch</h3>
                        </div>
                        <form className='contact-form-style'>
                            <Row>
                                <Col lg={6}>
                                    <input name='name' placeholder='Name*' type="text" />
                                </Col>
                                <Col lg={6}>
                                    <input name='email' placeholder='Email*' type="email" />
                                </Col>
                                <Col lg={12}>
                                    <input name='subject' placeholder='Subject*' type="text" />
                                </Col>
                                <Col lg={12}>
                                    <textarea name="message" placeholder='Your Message*'/>
                                    <button className='submit' type="submit">Send</button>
                                </Col>
                            </Row>
                        </form>
                  </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;