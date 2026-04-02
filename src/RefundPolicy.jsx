import React, { useEffect } from 'react';
import './index.css';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <section className="policy-banner">
        <div className="policy-container">
          <h1>Cancellation and Refunds</h1>
          <p className="policy-subtitle">Last Updated: April 2026</p>
        </div>
      </section>

      <div className="policy-content-wrapper">
        <div className="policy-container">
          <p className="intro-text">
            At <strong>Ramesh Traders</strong>, we strive to ensure complete customer satisfaction. This policy outlines the terms and conditions for order cancellations and refunds. Please read this policy carefully before making a purchase.
          </p>

          <section className="policy-section">
            <h3>1. Order Cancellation</h3>
            <p><strong>Before Shipment:</strong> Orders can be cancelled free of charge if the request is made before the order is processed for shipping.</p>
            <p><strong>After Shipment:</strong> Once shipped, cancellation is not possible. You can choose to return the product after delivery as per our return policy.</p>
            <p>To cancel, please contact support at <strong>7550223510,11,12,13</strong>.</p>
          </section>

          <section className="policy-section">
            <h3>2. Eligibility for Refunds</h3>
            <p>Refunds are issued in the following cases:</p>
            <ul className="policy-list">
              <li>Product received is damaged, defective, or incorrect</li>
              <li>Return of the product as per our return policy</li>
              <li>Order cancellation before shipment</li>
              <li>Non-delivery due to reasons attributable to Ramesh Traders or shipping partners</li>
            </ul>
            <p>Note: Refunds are not provided for products damaged due to misuse or wear and tear.</p>
          </section>

          <section className="policy-section">
            <h3>3. Return Process</h3>
            <ol className="policy-list" style={{ listStyle: 'decimal' }}>
              <li>Contact support within 7 days of delivery</li>
              <li>Provide order number and details of the issue</li>
              <li>Verify eligibility and receive a Return Authorization Number</li>
              <li>Package the product securely in original packaging</li>
              <li>Ship to the address provided by our support team</li>
            </ol>
            <p>Refunds are processed within <strong>5-7 business days</strong> after inspection.</p>
          </section>

          <section className="policy-section">
            <h3>4. Refund Methods</h3>
            <div className="policy-table-wrapper">
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>Payment Method</th>
                    <th>Refund Processing Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Credit/Debit Card</td><td>7-10 business days</td></tr>
                  <tr><td>Net Banking</td><td>5-7 business days</td></tr>
                  <tr><td>UPI</td><td>3-5 business days</td></tr>
                  <tr><td>Wallet Payments</td><td>24-48 hours</td></tr>
                  <tr><td>Cash on Delivery (COD)</td><td>Bank transfer</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="policy-section">
            <h3>5. Non-Returnable Products</h3>
            <p>Certain products cannot be returned for hygiene and safety reasons:</p>
            <ul className="policy-list">
              <li>Perishable goods (food items, flowers, etc.)</li>
              <li>Personal care products</li>
              <li>Items marked as "Non-returnable"</li>
              <li>Digital products and software</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3>6. Partial Refunds</h3>
            <p>Partial refunds may be issued if only part of the order is returned, or if the product has minor defects or missing packaging.</p>
          </section>

          <section className="policy-section">
            <h3>7. Exchange Policy</h3>
            <p>We offer exchanges for size/color, defective products, or wrong items delivered, subject to availability.</p>
          </section>

          <section className="policy-section">
            <h3>8. Shipping Charges for Returns</h3>
            <ul className="policy-list">
              <li><strong>Free Returns:</strong> For defective, damaged, or incorrect products.</li>
              <li><strong>Customer-Paid Returns:</strong> For change of mind or wrong size/color selection.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3>9. Timeframe for Refunds</h3>
            <p>The complete process involves 1-2 business days for return processing and refund initiation within 24 hours of approval. You will receive email notifications at each stage.</p>
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

export default RefundPolicy;
