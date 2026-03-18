import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll, useMotionValueEvent } from 'framer-motion';
import { Home, BriefcaseBusiness, FolderOpen, Mail } from 'lucide-react';
import './Navbar.css';

const navItems = [
    { to: '/', label: 'Home', icon: <Home size={18} /> },
    { to: '/services', label: 'Services', icon: <BriefcaseBusiness size={18} /> },
    { to: '/projects', label: 'Work', icon: <FolderOpen size={18} /> },
    { to: '/contact', label: 'Contact', icon: <Mail size={18} /> },
];

const NavStatus = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 60000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    };

    return (
        <div className="nav-status">
            <div className="status-item">
                <span className="status-label">Time</span>
                <span className="status-value">{formatTime(time)}</span>
            </div>
            <div className="status-sep"></div>
            <div className="status-item">
                <div className="status-pill">
                    <span className="status-dot"></span>
                    <span className="status-text">Available for Projects</span>
                </div>
            </div>
        </div>
    );
};

const MagneticIcon = ({ children, active }) => {
    const ref = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 150, mass: 0.4 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            mouseX.set((clientX - centerX) * 0.4);
            mouseY.set((clientY - centerY) * 0.4);
        }
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x, y }}
            className="magnetic-dock-item"
        >
            {children}
        </motion.div>
    );
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const location = useLocation();

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 120);
    });

    return (
        <>
            {/* ─── Top horizontal navbar (visible when NOT scrolled) ─── */}
            <AnimatePresence>
                {!scrolled && (
                    <motion.header
                        className="nav-root"
                        key="topnav"
                        initial={{ y: -80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="container nav-inner">
                            {/* Brand */}
                            <Link to="/" className="nav-brand">
                                <span className="brand-canvas">Canvas</span>
                                <span className="brand-sep">·</span>
                                <span className="brand-theory">Theory</span>
                            </Link>

                            {/* Links */}
                            <nav className="nav-links-wrap">
                                {navItems.map(({ to, label }, i) => {
                                    const active = location.pathname === to;
                                    return (
                                        <motion.div
                                            key={to}
                                            initial={{ opacity: 0, y: -8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.15 + i * 0.07 }}
                                        >
                                            <Link to={to} className={`nav-link ${active ? 'active' : ''}`}>
                                                {label}
                                                {active && <motion.span className="nav-dot" layoutId="nav-dot" />}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            {/* Status Indicator (Replaces old CTA) */}
                            <NavStatus />
                        </div>
                    </motion.header>
                )}
            </AnimatePresence>


            {/* ─── Left side icon dock (visible when scrolled) ─────── */}
            <AnimatePresence>
                {scrolled && (
                    <motion.nav
                        key="sidedock"
                        className="side-dock"
                        initial={{ x: -80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -60, opacity: 0, transition: { duration: 0.25 } }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Nav icons only */}
                        {navItems.map(({ to, label, icon }, i) => {
                            const active = location.pathname === to;
                            return (
                                <motion.div
                                    key={to}
                                    className="dock-item-wrap"
                                    initial={{ x: -30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    onHoverStart={() => setHoveredIdx(i)}
                                    onHoverEnd={() => setHoveredIdx(null)}
                                >
                                    <MagneticIcon active={active}>
                                        <Link
                                            to={to}
                                            className={`dock-icon ${active ? 'dock-active' : ''}`}
                                            aria-label={label}
                                        >
                                            {icon}
                                            {active && (
                                                <motion.div
                                                    className="dock-active-pip"
                                                    layoutId="dock-pip"
                                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                                />
                                            )}
                                        </Link>
                                    </MagneticIcon>

                                    {/* Tooltip */}
                                    <AnimatePresence>
                                        {hoveredIdx === i && (
                                            <motion.div
                                                className="dock-tooltip"
                                                initial={{ opacity: 0, x: -6, scale: 0.92 }}
                                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                                exit={{ opacity: 0, x: -4, scale: 0.94 }}
                                                transition={{ duration: 0.18 }}
                                            >
                                                {label}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
