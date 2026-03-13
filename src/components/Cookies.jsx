import React, { useEffect } from 'react';
import './Terms.css'; // Reusing the same styles as the Terms page

const Cookies = () => {
    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <div className="container terms-container">
                <div className="terms-content">
                    <h1 className="section-title">Cookie Policy</h1>

                    <div className="terms-body">
                        <p className="terms-date"><strong>Last Updated:</strong> March 8, 2026</p>

                        <section className="terms-section">
                            <h2>Introduction</h2>
                            <p>This Cookie Policy explains how Canvas Theory uses cookies and similar technologies when you visit our website.</p>
                            <p>By continuing to browse or use our website, you agree to the use of cookies as described in this policy.</p>
                        </section>

                        <section className="terms-section">
                            <h2>What Are Cookies</h2>
                            <p>Cookies are small text files that are stored on your device when you visit a website. They help websites function properly, improve user experience, and provide insights into how visitors interact with the website.</p>
                        </section>

                        <section className="terms-section">
                            <h2>How We Use Cookies</h2>
                            <p>Canvas Theory may use cookies for the following purposes:</p>

                            <h3 style={{ marginTop: '24px' }}>Essential Cookies</h3>
                            <p>These cookies are necessary for the website to function properly. They enable basic features such as page navigation and access to secure areas of the website.</p>

                            <h3 style={{ marginTop: '24px' }}>Performance Cookies</h3>
                            <p>These cookies help us understand how visitors interact with our website by collecting information such as:</p>
                            <ul>
                                <li>Pages visited</li>
                                <li>Time spent on pages</li>
                                <li>Website performance</li>
                            </ul>
                            <p>This helps us improve the user experience.</p>

                            <h3 style={{ marginTop: '24px' }}>Analytics Cookies</h3>
                            <p>We may use analytics tools to understand visitor behavior and website traffic. These cookies help us analyze how users use our website so we can improve our services.</p>

                            <h3 style={{ marginTop: '24px' }}>Functional Cookies</h3>
                            <p>These cookies allow the website to remember certain preferences such as language or previously entered information to provide a more personalized experience.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Third-Party Cookies</h2>
                            <p>Some cookies may be placed by third-party services that appear on our website, such as analytics or embedded content providers. These third parties may collect information according to their own privacy policies.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Managing Cookies</h2>
                            <p>You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
                            <ul>
                                <li>View cookies stored on your device</li>
                                <li>Delete cookies</li>
                                <li>Block cookies from certain websites</li>
                                <li>Disable cookies entirely</li>
                            </ul>
                            <p>Please note that disabling cookies may affect the functionality of some parts of the website.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Changes to This Policy</h2>
                            <p>Canvas Theory may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Contact Us</h2>
                            <p>If you have any questions about this Cookie Policy, you may contact us at:</p>
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

export default Cookies;
