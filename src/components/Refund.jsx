import React, { useEffect } from 'react';
import './Terms.css'; // Reusing the same styles as the Terms page

const Refund = () => {
    // Scroll to top when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <div className="container terms-container">
                <div className="terms-content">
                    <h1 className="section-title">Refund Policy</h1>

                    <div className="terms-body">
                        <p className="terms-date"><strong>Last Updated:</strong> March 8, 2026</p>

                        <section className="terms-section">
                            <h2>Introduction</h2>
                            <p>At Canvas Theory, we strive to provide high-quality design and development services to every client. This Refund Policy outlines the conditions under which refunds may or may not be provided.</p>
                            <p>By purchasing our services, you agree to the terms described in this policy.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Project Deposits</h2>
                            <ul>
                                <li>All projects require an initial deposit before work begins.</li>
                                <li>This deposit secures your project slot and covers initial research, strategy, and design work.</li>
                                <li>Deposits are non-refundable.</li>
                            </ul>
                        </section>

                        <section className="terms-section">
                            <h2>Payments and Refunds</h2>
                            <p>Due to the nature of digital services and the time invested in each project:</p>
                            <ul>
                                <li>Payments made for completed work are non-refundable.</li>
                                <li>If a project is canceled by the client after work has started, any payments made will cover the work already completed.</li>
                            </ul>
                            <p>Refunds will not be issued for:</p>
                            <ul>
                                <li>Change of mind</li>
                                <li>Delays caused by the client</li>
                                <li>Failure to provide required project materials</li>
                                <li>Lack of communication from the client</li>
                            </ul>
                        </section>

                        <section className="terms-section">
                            <h2>Project Cancellation</h2>
                            <p>If a client decides to cancel the project:</p>
                            <ul>
                                <li>Any work completed up to that point will be delivered where applicable.</li>
                                <li>Payments already made will not be refunded.</li>
                            </ul>
                        </section>

                        <section className="terms-section">
                            <h2>Service Issues</h2>
                            <p>If you believe there is an issue with the service provided, please contact us. We are committed to resolving concerns and may offer revisions where appropriate according to the agreed project scope.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Chargebacks</h2>
                            <p>Clients agree not to initiate chargebacks or payment disputes without first contacting Canvas Theory to resolve the issue.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Policy Updates</h2>
                            <p>Canvas Theory reserves the right to modify this Refund Policy at any time. Updates will be posted on this page with the revised date.</p>
                        </section>

                        <section className="terms-section">
                            <h2>Contact</h2>
                            <p>For questions regarding this Refund Policy, please contact:</p>
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

export default Refund;
