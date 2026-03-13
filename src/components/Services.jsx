import { motion } from 'framer-motion';
import { Layout, Code2, Layers, Smartphone, Cpu, Lightbulb, ArrowRight, CheckCircle2, Monitor, Globe, PenTool, Database } from 'lucide-react';
import MagicButton from './MagicButton';
import ScrollReveal from './ScrollReveal';
import './Services.css';

const services = [
    {
        icon: <Monitor size={28} />,
        title: 'UI & UX Design',
        subtitle: 'Visual Identity & Interfaces',
        desc: 'We create distinctive visual languages that balance aesthetic beauty with functional precision. From wireframes to high-fidelity prototypes.',
        features: ['Brand Strategy', 'Visual Identity', 'Design Systems', 'Prototyping'],
        accent: '#2C5530'
    },
    {
        icon: <Code2 size={28} />,
        title: 'Development',
        subtitle: 'Scalable Web Architectures',
        desc: 'Clean, performant, and accessible code built with modern frameworks like React and Next.js. We focus on speed and longevity.',
        features: ['React & Next.js', 'Typescript', 'Headless CMS', 'API Integrations'],
        accent: '#D4873F'
    },
    {
        icon: <Layers size={28} />,
        title: 'Creative Tech',
        subtitle: 'Immersive Experiences',
        desc: 'Pushing the boundaries of the web with Three.js, WebGL, and complex motion systems. We make the web feel alive and interactive.',
        features: ['3D Graphics', 'Motion Design', 'Interactive Art', 'Experimental UI'],
        accent: '#C4614A'
    },
    {
        icon: <Database size={28} />,
        title: 'AI Solutions',
        subtitle: 'Intelligent Automation',
        desc: 'Integrating large language models and machine learning to build smarter products that solve complex business problems.',
        features: ['LLM Integration', 'Custom Agents', 'Data Visualization', 'Process Automation'],
        accent: '#2C5530'
    }
];

const Services = () => {
    return (
        <motion.div
            className="services-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container section-pad">
                {/* Header */}
                <header className="services-header">
                    <ScrollReveal>
                        <p className="section-eyebrow">Expertise</p>
                        <h1 className="section-title">
                            Our <span className="gradient-green">Core</span> Capabilities
                        </h1>
                        <p className="body-text" style={{ maxWidth: '600px', marginTop: '1.5rem' }}>
                           Canvas Theory is a design house for brands that refuse to look ordinary.
                           We craft high-performance digital experiences that blend clarity, strategy, and refined aesthetics — built not just to impress, but to position you as a market leader.
                        </p>
                    </ScrollReveal>
                </header>

                {/* Services Grid */}
                <div className="services-main-grid">
                    {services.map((service, i) => (
                        <ScrollReveal key={i} delay={i * 0.1} direction="up">
                            <motion.div
                                className="service-card-new"
                                whileHover={{ y: -8, scale: 1.01 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                                <div className="sc-header">
                                    <div className="sc-icon-box" style={{ background: `${service.accent}14`, color: service.accent }}>
                                        {service.icon}
                                    </div>
                                    <div className="sc-num">0{i + 1}</div>
                                </div>
                                <div className="sc-content">
                                    <p className="sc-subtitle">{service.subtitle}</p>
                                    <h3 className="sc-title">{service.title}</h3>
                                    <p className="sc-desc">{service.desc}</p>

                                    <div className="sc-features">
                                        {service.features.map((f, j) => (
                                            <div key={j} className="sc-feature">
                                                <CheckCircle2 size={14} className="sc-check" style={{ color: service.accent }} />
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="sc-footer">
                                    <MagicButton as="link" to="/contact" variant="outline" size="sm" icon={<ArrowRight size={14} />}>
                                        Inquire
                                    </MagicButton>
                                </div>
                                <div className="sc-glow" style={{ background: `radial-gradient(circle at top right, ${service.accent}18, transparent 70%)` }} />
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* CTA Block */}
                <ScrollReveal direction="scale" style={{ marginTop: '8rem' }}>
                    <div className="service-cta-panel">
                        <div className="panel-content">
                            <h2 className="panel-title">Have a specific project in mind?</h2>
                            <p className="panel-desc">We love tackling complex problems and building unique digital worlds. Let's see if we're a good fit.</p>
                            <div className="panel-actions">
                                <MagicButton variant="primary" as="link" to="/contact" icon={<ArrowRight size={17} />}>
                                    Get a Proposal
                                </MagicButton>
                            </div>
                        </div>
                        <div className="panel-visual">
                            {/* Abstract visual for density */}
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <motion.div
                                    key={i}
                                    className="p-circle"
                                    animate={{
                                        y: [0, -20, 0],
                                        opacity: [0.1, 0.3, 0.1]
                                    }}
                                    transition={{
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        delay: i * 0.5
                                    }}
                                    style={{
                                        width: 40 + i * 20,
                                        height: 40 + i * 20,
                                        left: `${20 + i * 10}%`,
                                        top: `${30 + i * 5}%`
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </motion.div>
    );
};

export default Services;
