import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send, Instagram, Twitter, Linkedin, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import MagicButton from './MagicButton';
import ScrollReveal from './ScrollReveal';
import './Contact.css';

const contactInfo = [
    { icon: <Mail size={22} />, label: 'Email', val: 'canvastheoryy@gmail.com', color: '#2C5530' },
    { icon: <MessageSquare size={22} />, label: 'Social', val: '@canvastheory', color: '#D4873F' },
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
                                            <p className="ii-val">{info.val}</p>
                                        </div>
                                        <div className="ii-arrow">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Social Links */}
                        <ScrollReveal delay={0.4} direction="up" style={{ marginTop: '3.5rem' }}>
                            <div className="social-row">
                                <span className="social-label">Follow Us</span>
                                <div className="social-icons">
                                    <a href="#" className="s-icon"><Instagram size={20} /></a>
                                    <a href="#" className="s-icon"><Twitter size={20} /></a>
                                    <a href="#" className="s-icon"><Linkedin size={20} /></a>
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
