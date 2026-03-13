import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import './CreativeBackground.css';

const CreativeBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 45, stiffness: 60, restDelta: 0.001 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const bgTemplate = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(245, 242, 235, 0) 0%, rgba(245, 242, 235, 0.45) 100%)`;

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="creative-bg-root">
            {/* Layer 1: Moving Aura Blobs */}
            <div className="aura-container">
                <motion.div
                    className="aura-blob aura-1"
                    animate={{
                        x: ['0vw', '15vw', '-10vw', '0vw'],
                        y: ['0vh', '10vh', '-15vh', '0vh'],
                        scale: [1, 1.4, 0.8, 1]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="aura-blob aura-2"
                    animate={{
                        x: ['0vw', '-20vw', '15vw', '0vw'],
                        y: ['0vh', '-15vh', '10vh', '0vh'],
                        scale: [1.2, 0.9, 1.3, 1.2]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="aura-blob aura-3"
                    animate={{
                        x: ['0vw', '25vw', '-20vw', '0vw'],
                        y: ['0vh', '-10vh', '15vh', '0vh'],
                        scale: [0.8, 1.2, 1, 0.8]
                    }}
                    transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Layer 2: Drafting / Blueprint Layer */}
            <div className="drafting-layer">
                <div className="grid-overlay" />
                <div className="architect-mark am-tl">+ 0.00</div>
                <div className="architect-mark am-tr">SITE_01</div>
                <div className="architect-mark am-bl">EXT_L_04</div>
                <div className="architect-mark am-br">45.000</div>
            </div>

            {/* Layer 3: Interactive Spotlight reveal */}
            <motion.div
                className="spotlight-layer"
                style={{ background: bgTemplate }}
            />
        </div>
    );
};

export default CreativeBackground;
