import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Monitor, Smartphone, Rocket } from 'lucide-react';
import './About.css';

const services = [
    {
        icon: <MonitorType size={32} />,
        title: 'Frontend Development',
        description: 'Building responsive, accessible, and performant user interfaces using modern React and Vue ecosystems.'
    },
    {
        icon: <Code2 size={32} />,
        title: 'Backend Systems',
        description: 'Designing scalable APIs, database architectures, and robust server-side logic.'
    },
    {
        icon: <Rocket size={32} />,
        title: '3D Web Experiences',
        description: 'Creating immersive web applications using WebGL, Three.js, and complex animations.'
    },
    {
        icon: <Smartphone size={32} />,
        title: 'Responsive Design',
        description: 'Ensuring your application looks and functions flawlessly across all device sizes.'
    }
];

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="section-header"
                >
                    <h2 className="section-title">About Me & <span className="text-gradient">Services</span></h2>
                    <p className="section-subtitle">
                        I am a passionate Full-Stack Web Developer dedicated to building scalable,
                        high-quality digital solutions. Here is what I can do for you.
                    </p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="service-card glass-panel"
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
