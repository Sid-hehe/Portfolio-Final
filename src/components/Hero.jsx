import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, Code2, Globe2, Layers, Zap, Database, Layout, Smartphone, Cpu, Lightbulb, ChevronRight, CheckCircle2 } from 'lucide-react';
import MagicButton from './MagicButton';
import ScrollReveal from './ScrollReveal';
import './Hero.css';

const stackItems = [
    { name: 'React', color: '#2C5530', icon: <Layers size={13} /> },
    { name: 'Next.js', color: '#D4873F', icon: <Zap size={13} /> },
    { name: 'Three.js', color: '#C4614A', icon: <Globe2 size={13} /> },
    { name: 'Framer', color: '#5E8554', icon: <Sparkles size={13} /> },
    { name: 'Node.js', color: '#2A2720', icon: <Cpu size={13} /> },
    { name: 'TypeScript', color: '#D4873F', icon: <Code2 size={13} /> },
    { name: 'Figma', color: '#C4614A', icon: <Layout size={13} /> },
    { name: 'PostgreSQL', color: '#2C5530', icon: <Database size={13} /> },
];

const capabilities = [
    { icon: <Layout size={22} />, title: 'UI / UX Design', desc: 'Intuitive, beautiful interfaces that convert and delight.', accent: '#2C5530' },
    { icon: <Code2 size={22} />, title: 'Web Development', desc: 'High-performance, scalable web applications built to last.', accent: '#D4873F' },
    { icon: <Layers size={22} />, title: '3D and Motion', desc: 'WebGL and rich animation that sets your brand apart.', accent: '#C4614A' },
    { icon: <Smartphone size={22} />, title: 'Mobile Optimized', desc: 'Flawless, native-feeling experience on every device.', accent: '#2C5530' },
    { icon: <Cpu size={22} />, title: 'AI Integration', desc: 'Intelligent features powered by the latest language models.', accent: '#D4873F' },
    { icon: <Lightbulb size={22} />, title: 'Digital Strategy', desc: 'Technology that aligns perfectly with your business goals.', accent: '#C4614A' },
];

const philoCards = [
    { title: 'Craft-first', desc: 'Every pixel intentional, every interaction thoughtfully considered.', color: '#2C5530' },
    { title: 'Performance', desc: 'Optimised for speed so your audience never has to wait.', color: '#D4873F' },
    { title: 'Timeless', desc: 'Designed to age beautifully, not chasing trends.', color: '#C4614A' },
];

const steps = [
    { n: '01', t: 'Discover', c: 'Deep understanding of your brand, goals, and audience.' },
    { n: '02', t: 'Design', c: 'A visual system that is minimal, distinctive and memorable.' },
    { n: '03', t: 'Build', c: 'Pixel-perfect, accessible, high-performance code.' },
    { n: '04', t: 'Refine', c: 'Rigorous testing until every detail is flawless.' },
];

const testimonials = [
    { name: 'Sandeep Kumar', role: 'Founder, SK Logistics', quote: 'Very supportive team. They answered all my questions and helped me understand how to manage my website.' },
    { name: 'Arjun Mehta', role: 'Owner, Bombay Coffee House', quote: 'The design they created for my website looks modern and professional. I’m happy with the final result.' },
    { name: 'Ashif Khan', role: 'Owner, Component Fitness', quote: 'Very reliable company for website development. The process was smooth from start to finish' },
];

const statItems = [
    ['5+', 'Projects'],
    ['100%', 'Satisfaction'],
];

const FloatingShapes = ({ scrollYProgress }) => {
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const r1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const r2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

    return (
        <div className="hero-creative-shapes" aria-hidden="true">
            <motion.div className="c-shape c-sq-1" style={{ y: y1, rotate: r1 }} />
            <motion.div className="c-shape c-sq-2" style={{ y: y2, rotate: r2 }} />
            <motion.div className="c-shape c-line-1" style={{ y: y1 }} />
            <motion.div className="c-shape c-line-2" style={{ y: y2 }} />
        </div>
    );
};

const LogoTicker = () => {
    const doubled = [...stackItems, ...stackItems, ...stackItems, ...stackItems]; // Quadruple to ensure enough length
    return (
        <div className="logo-ticker">
            <div className="logo-track">
                {doubled.map((tech, i) => (
                    <div key={i} className="logo-item">
                        <div className="logo-icon-circle" style={{ background: `${tech.color}14`, borderColor: `${tech.color}25`, color: tech.color }}>
                            {tech.icon}
                        </div>
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const VisualCard = ({ className, title, desc, tags, stats, badge, delay, rotate, fanX, fanRotate }) => {
    return (
        <motion.div
            className={`visual-card ${className}`}
            initial={{ opacity: 0, scale: 0.8, rotate: rotate - 10 }}
            animate={{ opacity: 1, scale: 1, rotate: rotate }}
            variants={{
                fanned: {
                    x: fanX,
                    rotate: fanRotate,
                    transition: { type: "spring", stiffness: 400, damping: 30 }
                },
                stacked: {
                    x: 0,
                    rotate: rotate,
                    transition: { type: "spring", stiffness: 350, damping: 25 }
                }
            }}
            whileHover={{
                y: -35,
                rotate: rotate * 0.5,
                scale: 1.1,
                zIndex: 30,
                transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 20
                }
            }}
        >
            <div className="vc-header">
                <div className="vc-dot-row">
                    <div className="vc-dot" style={{ background: '#2C5530' }}></div>
                    <div className="vc-dot" style={{ background: '#D4873F' }}></div>
                    <div className="vc-dot" style={{ background: '#C4614A' }}></div>
                </div>
            </div>

            <h4 className="vc-title">{title}</h4>
            <p className="vc-desc">{desc}</p>

            <div className="vc-tags">
                {tags.map(t => <span key={t} className="vc-tag">{t}</span>)}
            </div>

            {stats && (
                <div className="vc-stats-row">
                    {stats.map(s => (
                        <div key={s.l} className="vc-stat-box">
                            <div className="vc-stat-n">{s.n}</div>
                            <div className="vc-stat-l">{s.l}</div>
                        </div>
                    ))}
                </div>
            )}

            {badge && (
                <div className="vc-badge">
                    {badge}
                </div>
            )}
        </motion.div>
    );
};

const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <motion.div className="home-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>

            {/* ════ HERO ════════════════════════════════════ */}
            <section ref={heroRef} className="hero-wrap container">
                <FloatingShapes scrollYProgress={scrollYProgress} />
                <div className="hero-blob blob-1" aria-hidden="true" />
                <div className="hero-blob blob-2" aria-hidden="true" />

                {/* LEFT PANEL: Text & Content */}
                <motion.div className="hero-left" style={{ y }}>
                    <motion.div className="hero-pill" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <Sparkles size={13} />
                        Digital Craft Collective
                    </motion.div>

                    <div className="hero-wordmark">
                        {'Canvas'.split('').map((ch, i) => (
                            <motion.span
                                key={i}
                                className="wm-canvas"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {ch}
                            </motion.span>
                        ))}
                        <br />
                        {'Theory'.split('').map((ch, i) => (
                            <motion.span
                                key={i}
                                className="wm-theory"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {ch}
                            </motion.span>
                        ))}
                    </div>

                    <motion.p className="hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                        Every great brand begins with a blank canvas.
                    </motion.p>

                    <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                        <MagicButton as="link" to="/projects" variant="primary" icon={<ArrowRight size={17} />}>Explore Work</MagicButton>
                        <MagicButton as="link" to="/contact" variant="outline" icon={<Mail size={17} />}>Let's Talk</MagicButton>
                    </motion.div>

                    <motion.div className="hero-stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
                        {statItems.map(([n, l]) => (
                            <div key={l} className="stat-item">
                                <span className="stat-item-num">{n}</span>
                                <span className="stat-item-label">{l}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* RIGHT PANEL: Visual Stack */}
                <div className="hero-right">
                    <motion.div
                        className="hero-visual-stack"
                        initial="stacked"
                        whileHover="fanned"
                        animate="stacked"
                    >
                        {/* Background cards */}
                        <VisualCard
                            className="vc-back-2"
                            title="Immersive 3D Studio"
                            desc="Real-time WebGL environments that push engagement."
                            tags={['Three.js', 'Shader']}
                            stats={[{ n: '60', l: 'FPS' }]}
                            rotate={4}
                            fanX={160}
                            fanRotate={12}
                            delay={0.2}
                        />
                        <VisualCard
                            className="vc-back-1"
                            title="Scalable Architecture"
                            desc="Clean code patterns built for enterprise scale."
                            tags={['Next.js', 'Go']}
                            stats={[{ n: '99', l: 'SCORE' }]}
                            rotate={-8}
                            fanX={-160}
                            fanRotate={-12}
                            delay={0.5}
                        />

                        {/* Main active card */}
                        <VisualCard
                            className="vc-main"
                            title="Premium Interface Design"
                            desc="High-density layouts with tactical whitespace and editorial typography."
                            tags={['React', 'Framer', 'WebGL']}
                            stats={[{ n: '99.9', l: 'UPTIME' }, { n: 'A+', l: 'RATING' }]}
                            rotate={-3}
                            fanX={0}
                            fanRotate={0}
                            delay={0.4}
                        />
                    </motion.div>
                </div>
            </section>

            {/* ════ TICKER ══════════════════════════════════ */}
            <LogoTicker />

            {/* ════ CAPABILITIES ════════════════════════════ */}
            <section className="section-pad container">
                <ScrollReveal style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <p className="section-eyebrow">Solutions</p>
                    <h2 className="section-title">Design & <span className="gradient-green">Code</span></h2>
                </ScrollReveal>
                <div className="cap-grid">
                    {capabilities.map((cap, i) => (
                        <ScrollReveal key={i} delay={i * 0.08} direction="up">
                            <div className="cap-card">
                                <div className="cap-icon-box" style={{ background: `${cap.accent}14`, color: cap.accent, border: `1px solid ${cap.accent}25` }}>
                                    {cap.icon}
                                </div>
                                <h3 className="cap-title">{cap.title}</h3>
                                <p className="cap-desc">{cap.desc}</p>
                                <div className="cap-bar" style={{ background: `linear-gradient(90deg, ${cap.accent}, transparent)` }} />
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* ════ PHILOSOPHY ══════════════════════════════ */}
            <div className="section-pad">
                <section className="philosophy-bg container section-pad">
                    <div className="philosophy-layout" style={{ padding: '0 4rem' }}>
                        <ScrollReveal direction="left">
                            <p className="section-eyebrow" style={{ color: 'var(--color-primary-xlt)' }}>Canvas Theory</p>
                            <h2 className="section-title" style={{ maxWidth: '440px', color: '#fff' }}>
                                Precision in every<br />
                                <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-primary-xlt)' }}>pixel</em>.
                            </h2>
                            <p className="body-text" style={{ marginTop: '2.5rem', maxWidth: '420px', color: 'rgba(255,255,255,0.7)' }}>
                                We believe in digital experiences that are as durable as they are beautiful.
                                No shortcuts. No trend-chasing. Just pure craft.
                            </p>
                        </ScrollReveal>
                        <div className="philosophy-cards">
                            {philoCards.map((p, i) => (
                                <ScrollReveal key={i} delay={i * 0.12} direction="right">
                                    <div className="philo-card">
                                        <div className="philo-bar" style={{ background: p.color }} />
                                        <h3>{p.title}</h3>
                                        <p>{p.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* ════ PROCESS ═════════════════════════════════ */}
            <section className="section-pad container">
                <ScrollReveal style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                    <p className="section-eyebrow">Methodology</p>
                    <h2 className="section-title">The <span className="gradient-text">Approach</span></h2>
                </ScrollReveal>
                <div className="process-grid">
                    {steps.map((s, i) => (
                        <div key={i} className="process-step" style={{ background: 'var(--color-surface)', padding: '3.5rem' }}>
                            <div className="step-number">{s.n}</div>
                            <div className="step-content">
                                <div style={{ width: 34, height: 34, borderRadius: '6px', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 800, marginBottom: '1.8rem' }}>{s.n}</div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.9rem', letterSpacing: '-0.01em' }}>{s.t}</h3>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.94rem' }}>{s.c}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════ TESTIMONIALS ════════════════════════════ */}
            <section className="section-pad testi-section">
                <div className="container">
                    <ScrollReveal style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
                        <p className="section-eyebrow">Reputation</p>
                        <h2 className="section-title">Digital <span className="gradient-text">Feedback</span></h2>
                    </ScrollReveal>
                    <div className="testi-grid">
                        {testimonials.map((t, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} direction="scale">
                                <div className="testi-card">
                                    <div className="testi-accent" />
                                    <p className="testi-quote">&ldquo;{t.quote}&rdquo;</p>
                                    <div className="testi-author">
                                        <span className="testi-name">{t.name}</span>
                                        <span className="testi-role">{t.role}</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════ CTA ══════════════════════════════════════ */}
            <section className="section-pad container">
                <ScrollReveal direction="scale">
                    <div className="cta-wrap">
                        <div className="cta-blob" aria-hidden="true" />
                        <p className="section-eyebrow" style={{ color: 'var(--color-primary-xlt)' }}>Partnership</p>
                        <h2 className="cta-headline">
                            Let's build your next<br />
                            <span className="gradient-text">masterpiece.</span>
                        </h2>
                        <MagicButton as="link" to="/contact" variant="primary" icon={<ChevronRight size={19} />}>
                            Start Conversation
                        </MagicButton>
                    </div>
                </ScrollReveal>
            </section>

        </motion.div>
    );
};

export default Hero;
