import React, { useEffect } from 'react';
import './Terms.css'; // Reusing the same styles as the Terms page

const AboutUs = () => {
    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <div className="container terms-container">
                <div className="terms-content">
                    <h1 className="section-title">About Us</h1>

                    <div className="terms-body">
                        <section className="terms-section">
                            <p>At Canvas Theory, we believe every idea deserves a space on the internet. Just like an artist needs a canvas to express creativity, businesses, creators, and professionals need a website to showcase their work to the world. Our mission is to provide that digital canvas.</p>
                            <p>Canvas Theory is a small but passionate team of three creators who share a common goal: helping people bring their work online through clean, modern, and effective websites. We understand that many talented individuals and businesses struggle to present their work digitally, and that’s where we come in.</p>
                            <p>We focus on building websites that are simple, visually appealing, and functional. Whether you are a freelancer, a small business owner, an artist, or a startup, we help you create a website that represents your work and tells your story.</p>
                            <p>Even though we are a small team, we believe that great ideas don’t need big teams—just dedication, creativity, and attention to detail. We work closely with our clients to understand their vision and turn it into a website they can proudly share.</p>
                            <p>At Canvas Theory, we are not just building websites—we are helping people create their online presence and grow their ideas.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Our Vision</h2>
                            <p>To make it easy for anyone to showcase their work online with a website that truly represents them.</p>
                        </section>

                        <section className="terms-section">
                            <h2>What We Do</h2>
                            <ul>
                                <li>Custom website creation</li>
                                <li>Portfolio and business websites</li>
                                <li>Clean and modern web design</li>
                                <li>Helping individuals and businesses establish their online presence</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
