import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send, Instagram, Linkedin, Sparkles, Clock } from 'lucide-react';
import { useState } from 'react';
import MagicButton from './MagicButton';
import ScrollReveal from './ScrollReveal';
import './Contact.css';

const contactInfo = [
    { icon: <Mail size={22} />, label: 'Email', val: 'canvastheoryy@gmail.com', color: '#2C5530' },
    { 
        icon: <MessageSquare size={22} />, 
        label: 'Social', 
        val: (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.5rem' }}>
                <a href="https://www.instagram.com/canvas._.theory/" target="_blank" rel="noopener noreferrer" className="social-pill">
                    <Instagram size={16} /> Instagram
                </a>
                <a href="https://www.linkedin.com/in/canvastheory/" target="_blank" rel="noopener noreferrer" className="social-pill">
                    <Linkedin size={16} /> LinkedIn
                </a>
            </div>
        ), 
        color: '#D4873F' 
    },
    { icon: <MapPin size={22} />, label: 'Location', val: 'Global / Remote', color: '#C4614A' },
];

const Contact = () => {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        // Replace this with your actual Web3Forms access key
        formData.append("access_key", "5f01b25b-4cd7-4878-ba20-93d209aff372");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const resData = await res.json();

            if (resData.success) {
                setSent(true);
            } else {
                console.error("Web3Forms Error:", resData);
                alert("Failed to send message: " + resData.message);
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while sending the message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            className="contact-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container section-pad">
                <header className="contact-header">
                    <ScrollReveal>
                        <p className="section-eyebrow">Contact</p>
                        <h1 className="section-title">
                            Let's Build <span className="gradient-green">Together</span>
                        </h1>
                        <p className="body-text" style={{ maxWidth: '600px', marginTop: '1.5rem' }}>
                            Ready to start a new project or just want to say hi? We're always open to new conversations.
                        </p>
                    </ScrollReveal>
                </header>

                <div className="contact-main-grid">
                    {/* Left: Info Cards */}
                    <div className="contact-info-panel">
                        <div className="info-cards-stack">
                            {contactInfo.map((info, i) => (
                                <ScrollReveal key={i} delay={i * 0.12} direction="left">
                                    <div className="info-item-card">
                                        <div className="ii-icon-box" style={{ background: `${info.color}14`, color: info.color }}>
                                            {info.icon}
                                        </div>
                                        <div className="ii-tex-wrap">
                                            <span className="ii-label">{info.label}</span>
                                            <div className="ii-val">{info.val}</div>
                                        </div>
                                        {/* Arrow removed as requested */}
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Availability Block to fill space */}
                        <ScrollReveal delay={0.4} direction="up" style={{ marginTop: '3.5rem' }}>
                            <div className="availability-card" style={{ padding: '2rem', background: 'var(--color-surface)', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                                    <div style={{ padding: '8px', background: 'rgba(44, 85, 48, 0.1)', color: '#2C5530', borderRadius: '10px' }}>
                                        <Clock size={20} />
                                    </div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Current Status</h3>
                                </div>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                                    We are currently taking on new projects. We aim to respond to all inquiries within <span style={{ color: 'var(--color-text)', fontWeight: '500' }}>24-48 hours</span>.
                                </p>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'rgba(44, 85, 48, 0.05)', border: '1px solid rgba(44, 85, 48, 0.1)', borderRadius: '99px', fontSize: '0.8rem', fontWeight: '600', color: '#2C5530' }}>
                                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2C5530', display: 'inline-block' }}></span>
                                    Available Now
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right: Form */}
                    <div className="contact-form-panel">
                        <ScrollReveal direction="right">
                            <motion.div
                                className="form-branding-box"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                <Sparkles size={18} className="branding-icon" />
                                <p className="branding-text">
                                    Crafted for brands that refuse to look ordinary
                                </p>
                            </motion.div>
                            <div className="form-glass-card">
                                {sent ? (
                                    <motion.div
                                        className="success-message-wrap"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <div className="success-icon-box">
                                            <Sparkles size={40} />
                                        </div>
                                        <h2>Message Received!</h2>
                                        <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                                        <MagicButton onClick={() => setSent(false)} variant="outline">Send Another</MagicButton>
                                    </motion.div>
                                ) : (
                                    <form className="c-form" onSubmit={handleSubmit}>
                                        <div className="form-row-2">
                                            <div className="form-group">
                                                <label className="form-label">Name</label>
                                                <input type="text" name="name" className="form-input" placeholder="Your Name" required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Email</label>
                                                <input type="email" name="email" className="form-input" placeholder="your@email.com" required />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Subject</label>
                                            <select name="subject" className="form-input">
                                                <option>New Project Inquiry</option>
                                                <option>Collaboration</option>
                                                <option>Just Saying Hi</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Message</label>
                                            <textarea name="message" className="form-input" rows="5" placeholder="Tell us about your project..." required></textarea>
                                        </div>

                                        <div className="form-footer">
                                            <p className="form-note">By clicking send, you agree to our privacy policy.</p>
                                            <MagicButton
                                                variant="primary"
                                                type="submit"
                                                icon={loading ? <div className="spinner" /> : <Send size={18} />}
                                                disabled={loading}
                                            >
                                                {loading ? 'Sending...' : 'Send Message'}
                                            </MagicButton>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
