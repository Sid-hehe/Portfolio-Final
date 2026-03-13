import React, { useEffect } from 'react';
import './Terms.css';

const Terms = () => {
    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <div className="container terms-container">
                <div className="terms-content">
                    <h1 className="section-title">Terms & Conditions</h1>

                    <div className="terms-body">
                        <p className="terms-date"><strong>Last Updated:</strong> March 8, 2026</p>

                        <section className="terms-section">
                            <h2>Introduction</h2>
                            <p>Welcome to Canvas Theory. These Terms &amp; Conditions govern your use of our website and services. By accessing our website or working with us, you agree to comply with and be bound by these terms.</p>
                            <p>If you do not agree with any part of these terms, please do not use our services.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Services</h2>
                            <p>Canvas Theory provides digital design and development services, including but not limited to:</p>
                            <ul>
                                <li>Website design</li>
                                <li>Website development</li>
                                <li>UI/UX design</li>
                                <li>Digital branding and creative services</li>
                            </ul>
                            <p>The scope of work for each project will be clearly defined and agreed upon before the project begins.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Project Process</h2>
                            <p>For all projects:</p>
                            <ul>
                                <li>A project proposal or agreement will outline the scope, timeline, and deliverables.</li>
                                <li>Clients are expected to provide required materials (content, images, branding assets) in a timely manner.</li>
                                <li>Delays in providing required materials may affect the project timeline.</li>
                            </ul>
                        </section>

                        <section className="terms-section">
                            <h2>Payments</h2>
                            <p>Payment terms will be communicated before the project begins.</p>
                            <p>Typically:</p>
                            <ul>
                                <li>A deposit is required before work begins.</li>
                                <li>The remaining balance must be paid before final delivery or website launch.</li>
                            </ul>
                            <p>Canvas Theory reserves the right to pause work if payments are delayed.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Revisions</h2>
                            <ul>
                                <li>Projects may include a limited number of revisions as specified in the project agreement.</li>
                                <li>Additional revisions or changes beyond the agreed scope may incur additional charges.</li>
                            </ul>
                        </section>

                        <section className="terms-section">
                            <h2>Intellectual Property</h2>
                            <p>Upon full payment:</p>
                            <ul>
                                <li>The client receives rights to the final delivered website design and assets created specifically for the project.</li>
                            </ul>
                            <p>However:</p>
                            <ul>
                                <li>Canvas Theory retains the right to showcase the work in its portfolio, marketing materials, and case studies.</li>
                            </ul>
                        </section>

                        <section className="terms-section">
                            <h2>Client Responsibilities</h2>
                            <p>Clients agree to:</p>
                            <ul>
                                <li>Provide accurate information and materials required for the project</li>
                                <li>Respond to communication in a timely manner</li>
                                <li>Ensure that any content provided does not violate copyright or legal regulations</li>
                            </ul>
                        </section>

                        <section className="terms-section">
                            <h2>Limitation of Liability</h2>
                            <p>Canvas Theory will not be held responsible for:</p>
                            <ul>
                                <li>Loss of business or revenue</li>
                                <li>Website downtime caused by third-party services</li>
                                <li>Issues arising from hosting providers, plugins, or external tools</li>
                            </ul>
                        </section>

                        <section className="terms-section">
                            <h2>Termination</h2>
                            <p>Either party may terminate a project agreement if necessary.</p>
                            <p>In such cases:</p>
                            <ul>
                                <li>Payments for work already completed are non-refundable.</li>
                                <li>Any completed work may be delivered to the client.</li>
                            </ul>
                        </section>

                        <section className="terms-section">
                            <h2>Changes to Terms</h2>
                            <p>Canvas Theory reserves the right to update these Terms &amp; Conditions at any time. Updates will be reflected on this page with a revised date.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Contact Information</h2>
                            <p>If you have questions regarding these Terms &amp; Conditions, you may contact us at:</p>
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

export default Terms;
