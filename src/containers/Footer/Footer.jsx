import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "../../assets/icons";

import "./Footer.scss";

const Footer = () => {
    return (
        <div className="Footer" id="footer">
            <div className="Footer-inner container">

                <div className="Footer-left">
                    <Link to="/"><img src={Logo} alt="footerLogo" /></Link>
                    <p className="Footer-text">Eventick is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.</p>
                    <div className="Footer-icons">
                        <Link to="https://facebook.com"><FacebookIcon /></Link>
                        <Link to="https://twitter.com"><TwitterIcon /></Link>
                        <Link to="https://linkedin.com"><LinkedinIcon /></Link>
                    </div>
                </div>

                <div className="allServices">
                    <ul className="Footer-services">
                        <li className="service-title">Plan Events</li>
                        <li><Link className="Footer-service" to="/">Create and Set Up</Link></li>
                        <li><Link className="Footer-service" to="/">Sell Tickets</Link></li>
                        <li><Link className="Footer-service" to="/">Online RSVP</Link></li>
                        <li><Link className="Footer-service" to="/">Online Events</Link></li>
                    </ul>

                    <ul className="Footer-services">
                        <li className="service-title">Eventick</li>
                        <li><Link className="Footer-service" to="/">About Us</Link></li>
                        <li><Link className="Footer-service" to="/">Press</Link></li>
                        <li><Link className="Footer-service" to="/">Contact Us</Link></li>
                        <li><Link className="Footer-service" to="/">Help Center</Link></li>
                        <li><Link className="Footer-service" to="/">How it Works</Link></li>
                        <li><Link className="Footer-service" to="/">Privacy </Link></li>
                        <li><Link className="Footer-service" to="/">Terms</Link></li>
                    </ul>

                    <div className="Footer-inputSection">
                        <h4 className="service-title">Stay in the loop</h4>
                        <p className="Footer-inputSection-text">Join our mailing list to stay in the loop with our newest for Event and concert</p>

                        <div className="inputSection-inputContent">
                            <input className="Footer-inputSection-input" type="text" placeholder="Enter your email address..." />
                            <button className="btn-secondary">Subscribe Now</button>
                        </div>

                    </div>
                </div>

            </div>
                <h4 className="copyright container">Copyright © 2023 - 2024 shbotirov227 ®. <br></br>All rights reserved</h4>
        </div>
    )
}

export default Footer;
