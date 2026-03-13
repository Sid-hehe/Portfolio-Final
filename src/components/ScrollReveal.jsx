import { motion } from 'framer-motion';

/**
 * ScrollReveal — reusable scroll-triggered animation wrapper
 * Props:
 *   direction: 'up' | 'left' | 'right' | 'scale' (defaults to 'up')
 *   delay: number in seconds
 *   duration: number in seconds
 *   className: string
 */
const variants = {
    up: { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } },
    left: { hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right: { hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    scale: { hidden: { scale: 0.85, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
};

const ScrollReveal = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.7,
    className = '',
    style = {},
}) => (
    <motion.div
        className={className}
        style={style}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={variants[direction]}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
        {children}
    </motion.div>
);

export default ScrollReveal;
