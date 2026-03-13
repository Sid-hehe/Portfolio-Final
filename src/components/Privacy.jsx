import React, { useEffect } from 'react';
import './Terms.css'; // Reusing the same styles as the Terms page

const Privacy = () => {
    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <div className="container terms-container">
                <div className="terms-content">
                    <h1 className="section-title">Privacy Policy</h1>

                    <div className="terms-body">
                        <p className="terms-date"><strong>Last Updated:</strong> March 8, 2026</p>

                        <section className="terms-section">
                            <h2>Introduction</h2>
                            <p>Welcome to Canvas Theory. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide when you visit our website or interact with our services.</p>
                            <p>By using our website, you agree to the collection and use of information in accordance with this policy.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Information We Collect</h2>
                            <h3>Personal Information</h3>
                            <p>We may collect personal information that you voluntarily provide when you:</p>
                            <ul>
                                <li>Contact us through forms or email</li>
                                <li>Request a quote or consultation</li>
                                <li>Subscribe to updates or newsletters</li>
                            </ul>
                            <p>This information may include:</p>
                            <ul>
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Business information</li>
                                <li>Any additional details you choose to provide</li>
                            </ul>

                            <h3 style={{ marginTop: '24px' }}>Automatically Collected Information</h3>
                            <p>When you visit our website, certain information may be collected automatically, including:</p>
                            <ul>
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Device information</li>
                                <li>Pages visited</li>
                                <li>Time spent on the website</li>
                            </ul>
                            <p>This information helps us understand how visitors interact with our website and improve our services.</p>
                        </section>

                        <section className="terms-section">
                            <h2>How We Use Your Information</h2>
                            <p>We may use the information we collect to:</p>
                            <ul>
                                <li>Respond to inquiries and client requests</li>
                                <li>Provide and improve our services</li>
                                <li>Communicate project updates or service information</li>
                                <li>Enhance website functionality and user experience</li>
                                <li>Maintain website security and prevent misuse</li>
                            </ul>
                        </section>

                        <section className="terms-section">
                            <h2>Cookies and Tracking Technologies</h2>
                            <p>Our website may use cookies and similar technologies to enhance your browsing experience.</p>
                            <p>Cookies help us:</p>
                            <ul>
                                <li>Analyse website traffic</li>
                                <li>Understand visitor behaviour</li>
                                <li>Improve website performance</li>
                            </ul>
                            <p>You can disable cookies through your browser settings if you prefer.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Third-Party Services</h2>
                            <p>We may use trusted third-party services such as analytics providers, hosting providers, or communication tools to help operate our website and services.</p>
                            <p>These third parties may have access to limited information only to perform tasks on our behalf and are required to protect your information.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Data Security</h2>
                            <p>We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no online transmission or storage method is completely secure.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Your Privacy Rights</h2>
                            <p>Depending on your location, you may have the right to:</p>
                            <ul>
                                <li>Request access to your personal data</li>
                                <li>Request correction of inaccurate information</li>
                                <li>Request deletion of your personal data</li>
                            </ul>
                            <p>To exercise these rights, please contact us using the details below.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Changes to This Privacy Policy</h2>
                            <p>Canvas Theory may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Contact Us</h2>
                            <p>If you have any questions regarding this Privacy Policy, please contact:</p>
                            <p>
                                <strong>Canvas Theory</strong><br />
                                Email: your@email.com
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
