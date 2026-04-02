import React, { useEffect } from 'react';
import './index.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <section className="policy-banner">
        <div className="policy-container">
          <h1>Privacy Policy</h1>
          <p className="policy-subtitle">Last Updated: April 2026</p>
        </div>
      </section>

      <div className="policy-content-wrapper">
        <div className="policy-container">
          <p className="intro-text">
            This Privacy Policy outlines in detail how <strong>Ramesh Traders</strong> (“we”, “us”, or “our”), a trader and commerce-focused business, collects, utilizes, discloses, and protects your personal information when you visit or interact with our services.
          </p>

          <section className="policy-section">
            <h3>Changes to This Privacy Policy</h3>
            <p>We reserve the right to update this policy periodically. Changes will be posted on our Site with a new effective date. Continued use of the Services indicates acceptance of those changes.</p>
          </section>

          <section className="policy-section">
            <h3>How We Collect and Use Information</h3>
            <p>We collect data from direct interactions, automated technologies, and third-party platforms to fulfill orders, communicate updates, and improve our services.</p>
          </section>

          <section className="policy-section">
            <h3>Disclosure of Personal Information</h3>
            <div className="policy-table-wrapper">
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>Category of Data</th>
                    <th>Recipients</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Identifiers (name, contact info)</td><td>Service providers, shipping, marketing</td></tr>
                  <tr><td>Order history and shopping data</td><td>Advertising networks, analytics providers</td></tr>
                  <tr><td>Technical interaction data</td><td>Web analytics and platforms</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="policy-section">
            <h3>User-Generated Content</h3>
            <p>Any product reviews or comments you submit may be publicly visible. Please avoid sharing sensitive or private data in such areas.</p>
          </section>

          <section className="policy-section">
            <h3>Third-Party Websites</h3>
            <p>Once you leave our Site via external links, you are subject to the third party's privacy practices, which may differ from ours.</p>
          </section>

          <section className="policy-section">
            <h3>Children's Privacy</h3>
            <p>Our services are not intended for individuals under 16. If we detect minor data submitted without consent, it will be deleted promptly.</p>
          </section>

          <section className="policy-section">
            <h3>Security and Retention</h3>
            <p>We employ administrative and technical security measures to protect your data. Information is retained only as long as necessary for business purposes or legal compliance.</p>
          </section>

          <section className="policy-section">
            <h3>Your Rights and Choices</h3>
            <p>Depending on jurisdiction, you may have rights to Access, Correction, Deletion, Portability, Opt-Out, and Restrict Processing. Contact us to exercise these rights.</p>
          </section>

          <section className="policy-section">
            <h3>International Data Transfers</h3>
            <p>Your information may be processed in countries like the United States or India. We ensure appropriate safeguards are in place for international transfers.</p>
          </section>

          <section className="policy-section contact-block">
            <h3>Contact Us</h3>
            <p><strong>RAMESH TRADERS</strong></p>
            <p>442, A.V.G. COMPLEX, RANGAI GOWDER STREET, COIMBATORE - 641001</p>
            <p><strong>Email:</strong> support@rameshtrader.com</p>
            <p><strong>Phone:</strong> 7550223510,11,12,13</p>
            <p><strong>Hours:</strong> Mon–Sun, 9:00 AM to 9:00 PM IST (Open 7 Days)</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
