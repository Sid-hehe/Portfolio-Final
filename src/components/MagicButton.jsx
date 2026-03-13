import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './MagicButton.css';

/**
 * MagicButton — Next-level animated button component
 * Props:
 *   variant: 'primary' | 'dark' | 'outline' | 'ghost'
 *   as: 'button' | 'link' | 'a'   (defaults to 'button')
 *   to: path for react-router Link
 *   href: path for <a> tag
 *   icon: JSX icon element
 *   iconPosition: 'left' | 'right'  (defaults to 'right')
 *   disabled: bool
 *   type: submit | button
 *   children: text label
 */
const MagicButton = ({
    children,
    variant = 'primary',
    as = 'button',
    to,
    href,
    icon,
    iconPosition = 'right',
    disabled = false,
    type = 'button',
    className = '',
    style = {},
    ...rest
}) => {
    const [ripples, setRipples] = useState([]);
    const [particles, setParticles] = useState([]);
    const btnRef = useRef(null);

    // Magnetic Position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring config
    const springConfig = { damping: 35, stiffness: 200, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        if (disabled) return;
        const { clientX, clientY } = e;
        const rect = btnRef.current?.getBoundingClientRect();
        if (rect) {
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Limit the physical "pull" to a small amount
            const deltaX = (clientX - centerX) * 0.35;
            const deltaY = (clientY - centerY) * 0.35;

            mouseX.set(deltaX);
            mouseY.set(deltaY);
        }
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const handleClick = (e) => {
        if (disabled) return;

        const btn = btnRef.current;
        const rect = btn.getBoundingClientRect();
        const rippleX = e.clientX - rect.left;
        const rippleY = e.clientY - rect.top;

        // Ripple
        const id = Date.now();
        setRipples(r => [...r, { x: rippleX, y: rippleY, id }]);
        setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 700);

        // Particle burst
        const newParticles = Array.from({ length: 6 }, (_, i) => ({
            id: id + i,
            x: rippleX,
            y: rippleY,
            angle: (i / 6) * 360,
        }));
        setParticles(p => [...p, ...newParticles]);
        setTimeout(() => setParticles(p => p.filter(pt => !newParticles.some(np => np.id === pt.id))), 600);
    };

    const content = (
        <motion.span
            className="magic-inner-wrap"
            style={{ x, y }}
        >
            {/* Shimmer overlay */}
            <span className="magic-shimmer" aria-hidden="true" />

            {/* Animated border glow */}
            <span className="magic-border-glow" aria-hidden="true" />

            {/* Button label + icon */}
            <span className="magic-inner">
                {iconPosition === 'left' && icon && (
                    <motion.span
                        className="magic-icon"
                        initial={{ x: 0 }}
                        whileHover={{ x: -3, rotate: -10 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                    >
                        {icon}
                    </motion.span>
                )}
                <span className="magic-label">{children}</span>
                {iconPosition === 'right' && icon && (
                    <motion.span
                        className="magic-icon"
                        initial={{ x: 0, rotate: 0 }}
                        animate={{ x: 0, rotate: 0 }}
                        whileHover={{ x: 5, rotate: 15 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                    >
                        {icon}
                    </motion.span>
                )}
            </span>

            {/* Click ripples */}
            {ripples.map(r => (
                <span
                    key={r.id}
                    className="magic-ripple"
                    style={{ left: r.x, top: r.y }}
                />
            ))}

            {/* Particle burst */}
            {particles.map(p => (
                <span
                    key={p.id}
                    className="magic-particle"
                    style={{
                        left: p.x,
                        top: p.y,
                        '--angle': `${p.angle}deg`,
                    }}
                />
            ))}
        </motion.span>
    );

    const motionProps = {
        whileHover: disabled ? {} : { scale: 1.05 },
        whileTap: disabled ? {} : { scale: 0.96 },
        transition: { type: 'spring', stiffness: 400, damping: 20 },
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
    };

    const classes = `magic-btn magic-btn-${variant} ${disabled ? 'magic-btn-disabled' : ''} ${className}`;

    if (as === 'link' && to) {
        return (
            <motion.div ref={btnRef} {...motionProps} onClick={handleClick} className="magic-btn-outer">
                <Link to={to} className={classes} style={style} {...rest}>
                    {content}
                </Link>
            </motion.div>
        );
    }

    if (as === 'a' && href) {
        return (
            <motion.a
                ref={btnRef}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${classes} magic-btn-outer`}
                style={style}
                onClick={handleClick}
                {...motionProps}
                {...rest}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            ref={btnRef}
            type={type}
            disabled={disabled}
            className={`${classes} magic-btn-outer`}
            style={style}
            onClick={handleClick}
            {...motionProps}
            {...rest}
        >
            {content}
        </motion.button>
    );
};

export default MagicButton;
