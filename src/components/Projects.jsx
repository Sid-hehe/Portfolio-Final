import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Monitor, Smartphone, Layout, Cpu, Code2 } from 'lucide-react';
import MagicButton from './MagicButton';
import ScrollReveal from './ScrollReveal';
import fitnessPreview from '../assets/fitness-preview.png';
import coffeePreview from '../assets/coffee-preview.png';
import logisticsPreview from '../assets/logistics-preview.png';
import './Projects.css';

const projectList = [
    {
        title: 'Component Fitness',
        category: 'HEALTH & FITNESS',
        color: '#2C5530',
        desc: 'A premium fitness club website in Malviya Nagar, featuring modern design and seamless user experience.',
        image: fitnessPreview,
        link: 'https://componentfitness.co.in/gym-malviya-nagar'
    },
    {
        title: 'Bombay Coffee House',
        category: 'HOSPITALITY',
        color: '#D4873F',
        desc: 'A heritage-inspired cafe and bakery experience with a focus on refined aesthetics and colonial charm.',
        image: coffeePreview,
        link: 'https://bombaycoffeehouse.com/'
    },
    {
        title: 'SK Logistics',
        category: 'LOGISTICS',
        color: '#C4614A',
        desc: 'A global logistics and warehousing platform optimized for operational excellence and world-class infrastructure.',
        image: logisticsPreview,
        link: 'https://sklogistics.in/'
    }
];

const StaggerText = ({ text, color }) => {
    return (
        <h2 className="p-title" style={{ color: color || 'inherit' }}>
            {text.split('').map((char, index) => (
                char === ' ' ? <span key={index}>&nbsp;</span> :
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        style={{ display: 'inline-block' }}
                    >
                        {char}
                    </motion.span>
            ))}
        </h2>
    );
};

const ProjectCard = ({ project, i }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <div key={i} ref={cardRef} className="project-entry">
            <div className="project-grid">
                {/* Text side */}
                <div className={`project-text ${i % 2 === 1 ? 'order-2' : ''}`}>
                    <ScrollReveal direction={i % 2 === 1 ? 'right' : 'left'}>
                        <div className="p-num-mark">0{i + 1}</div>
                        <span className="p-category" style={{ color: project.color }}>{project.category}</span>
                        <StaggerText text={project.title} color={project.color} />
                        <p className="p-desc">{project.desc}</p>

                        <div className="p-actions">
                            <MagicButton 
                                variant="primary" 
                                as="a" 
                                href={project.link} 
                                icon={<ExternalLink size={16} />}
                            >
                                Visit Website
                            </MagicButton>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Image side */}
                <div className={`project-visual-wrap ${i % 2 === 1 ? 'order-1' : ''}`}>
                    <ScrollReveal direction={i % 2 === 1 ? 'left' : 'right'}>
                        <motion.div
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className="project-tilt-box"
                        >
                            <div className="p-img-container">
                                <motion.div
                                    className="p-img-parallax-wrapper"
                                    style={{ y: yParallax }}
                                >
                                    <img src={project.image} alt={project.title} className="p-img" />
                                </motion.div>
                                <div className="p-img-overlay" style={{ background: `linear-gradient(135deg, ${project.color}33, transparent)` }} />
                            </div>
                        </motion.div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <motion.div
            className="projects-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container section-pad">
                <header className="projects-header">
                    <ScrollReveal>
                        <p className="section-eyebrow">Portfolio</p>
                        <h1 className="section-title">
                            Selected <span className="gradient-green">Works</span>
                        </h1>
                        <p className="body-text" style={{ maxWidth: '600px', marginTop: '1.5rem' }}>
                            A collection of our most impactful collaborations, where strategy meets digital craft.
                        </p>
                    </ScrollReveal>
                </header>

                <div className="projects-vertical-list">
                    {projectList.map((project, i) => (
                        <ProjectCard key={i} project={project} i={i} />
                    ))}
                </div>

                <ScrollReveal direction="scale" style={{ marginTop: '6rem', textAlign: 'center' }}>
                    <div className="projects-footer-cta">
                        <h3 className="p-footer-title">Ready to build your story?</h3>
                        <MagicButton as="link" to="/contact" variant="primary" icon={<ArrowRight size={18} />}>
                            Start a Project
                        </MagicButton>
                    </div>
                </ScrollReveal>
            </div>
        </motion.div>
    );
};

export default Projects;
