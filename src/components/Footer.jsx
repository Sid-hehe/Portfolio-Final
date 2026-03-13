import React from 'react';
import { Facebook, Linkedin, Instagram, Dribbble, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-grid">

                {/* Brand Column */}
                <div className="footer-brand">
                    <h2 className="footer-logo">Canvas Theory</h2>
                    <p className="footer-tagline">
                        A boutique design house crafting high-performance digital experiences where strategy meets refined aesthetics.
                    </p>
                    <div className="footer-socials">
                        <a href="#" className="social-link" aria-label="Facebook"><Facebook size={18} /></a>
                        <a href="#" className="social-link" aria-label="LinkedIn"><Linkedin size={18} /></a>
                        <a href="#" className="social-link" aria-label="Instagram"><Instagram size={18} /></a>
                    </div>
                </div>

                {/* Links Columns */}
                <div className="footer-links-wrapper">
                    <div className="footer-col footer-studio">
                        <h4 className="footer-col-title">Studio</h4>
                        <div className="footer-info-block">
                            <p className="info-label">Status</p>
                            <p className="info-value">Open for new projects</p>
                        </div>
                        <div className="footer-info-block">
                            <p className="info-label">Focus</p>
                            <p className="info-value">Global / Remote</p>
                        </div>
                        <div className="footer-info-block">
                            <p className="info-label">Motto</p>
                            <p className="info-value italic text-muted">Less, but better.</p>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col-title">Quick Links</h4>
                        <ul className="footer-links-list">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/terms" target="_blank" rel="noopener noreferrer">Terms and Conditions</Link></li>
                            <li><Link to="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link></li>
                            <li><Link to="/refund" target="_blank" rel="noopener noreferrer">Refund Policy</Link></li>
                            <li><Link to="/cookies" target="_blank" rel="noopener noreferrer">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="container footer-bottom">
                <div className="footer-copyright">
                    <p>&copy; Canvas Theory. All rights reserved 2026</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
