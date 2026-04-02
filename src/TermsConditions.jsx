import React, { useEffect } from 'react';
import './index.css';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <section className="policy-banner">
        <div className="policy-container">
          <h1>Terms & Conditions</h1>
          <p className="policy-subtitle">Last Updated: April 2026</p>
        </div>
      </section>

      <div className="policy-content-wrapper">
        <div className="policy-container">
          <p className="intro-text">
            Welcome to <strong>Ramesh Traders</strong>! Thank you for visiting and using Ramesh Traders's website and services. These Terms and Conditions ("Terms") set forth the legally binding rules and guidelines that govern your access to and use of our website, platform, and services.
          </p>

          <section className="policy-section">
            <p>By accessing or using any part of our website, you signify your full acceptance and agreement to these Terms. If you do not agree with any part of these Terms, please do not use our website or services.</p>
          </section>

          <section className="policy-section">
            <h3>1. Terminology and Definitions</h3>
            <ul className="policy-list">
              <li><strong>Client, You, and Your:</strong> Refers to you, the individual or entity agreeing to these Terms.</li>
              <li><strong>The Company, We, Our, Us:</strong> Refers to Ramesh Traders and its representatives.</li>
              <li><strong>Services:</strong> Includes all products, information, or functionalities provided through our website.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3>2. Use of Website and Services</h3>
            <p>You agree to use the website solely for lawful purposes. You shall not engage in conduct that damages or impairs the functioning of the site. Automated access (robots, spiders) without written consent is strictly prohibited.</p>
          </section>

          <section className="policy-section">
            <h3>3. Products and Services</h3>
            <p>We provide a range of products for traders and businesses. Availability, descriptions, and pricing are subject to change without notice. Images are for illustrative purposes and may not exactly represent actual products.</p>
          </section>

          <section className="policy-section">
            <h3>4. Orders, Payment, and Confirmation</h3>
            <p>By placing an order, you warrant that all information provided is accurate. You authorize charges for the total order amount, including taxes and shipping. Acceptance occurs only when products are shipped.</p>
          </section>

          <section className="policy-section">
            <h3>5. Delivery and Shipping</h3>
            <p>Delivery timelines are estimates. Risk and title pass to you upon delivery. You are responsible for inspecting goods and reporting damages within the stipulated time.</p>
          </section>

          <section className="policy-section">
            <h3>6. Returns, Exchanges, and Refunds</h3>
            <p>Returns are accepted only for defective items or those materially different from descriptions. Requests must comply with our return policy and specified timeframes.</p>
          </section>

          <section className="policy-section">
            <h3>7. Intellectual Property Rights</h3>
            <p>All content inclusive of text, logos, and images is owned by Ramesh Traders or its licensors. Unauthorized reproduction or redistribution is strictly prohibited.</p>
          </section>

          <section className="policy-section">
            <h3>8. Limitation of Liability</h3>
            <p>Ramesh Traders shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our services. Use of the website is at your own risk.</p>
          </section>

          <section className="policy-section">
            <h3>9. Governing Law and Dispute Resolution</h3>
            <p>These Terms shall be governed by the laws of the jurisdiction where Ramesh Traders is registered. Disputes are subject to the exclusive jurisdiction of the courts within that region.</p>
          </section>

          <section className="policy-section">
            <h3>10. Changes to Terms</h3>
            <p>We reserve the right to modify these Terms at any time. Changes become effective immediately upon posting. Your continued use of the site constitutes acceptance of updated Terms.</p>
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

export default TermsConditions;
