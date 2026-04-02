import React, { useEffect } from 'react';
import './index.css';

const ShippingPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <section className="policy-banner">
        <div className="policy-container">
          <h1>Shipping Policy</h1>
          <p className="policy-subtitle">Last Updated: April 2026</p>
        </div>
      </section>

      <div className="policy-content-wrapper">
        <div className="policy-container">
          <p className="intro-text">
            At <strong>Ramesh Traders</strong>, we are committed to delivering your orders in a timely and efficient manner. This Shipping Policy outlines our processes, timelines, and responsibilities regarding order fulfillment and delivery.
          </p>

          <section className="policy-section">
            <h3>1. Order Processing</h3>
            <p>All orders are processed within <strong>1-2 business days</strong> (Monday to Friday, excluding public holidays) after payment verification. Orders placed after 2:00 PM IST or on weekends will be processed on the next business day.</p>
            <p>Once processed, you will receive a confirmation email with your order details and tracking information when available.</p>
          </section>

          <section className="policy-section">
            <h3>2. Shipping Methods & Carriers</h3>
            <p>We partner with reputable shipping carriers to ensure your orders are delivered safely. Our primary partners include:</p>
            <ul className="policy-list">
              <li>India Post</li>
              <li>Delhivery</li>
              <li>Blue Dart</li>
              <li>DTDC</li>
              <li>Ecom Express</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3>3. Shipping Destinations</h3>
            <p>We currently ship to all major cities and towns across India. We are also expanding our services to include international shipping to select countries. Please contact our customer service for international shipping inquiries.</p>
          </section>

          <section className="policy-section">
            <h3>4. Shipping Timeframes</h3>
            <p>Estimated delivery times vary based on your location:</p>
            <div className="policy-table-wrapper">
              <table className="policy-table">
                <thead>
                  <tr>
                    <th>Destination</th>
                    <th>Estimated Delivery Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Metro Cities (Delhi, Mumbai, Bangalore, etc.)</td>
                    <td>3-5 business days</td>
                  </tr>
                  <tr>
                    <td>Tier 2 Cities</td>
                    <td>5-7 business days</td>
                  </tr>
                  <tr>
                    <td>Tier 3 Cities & Towns</td>
                    <td>7-10 business days</td>
                  </tr>
                  <tr>
                    <td>Remote Areas</td>
                    <td>10-14 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Note: These are estimates; actual delivery may vary due to weather, transportation delays, or customs clearance.</p>
          </section>

          <section className="policy-section">
            <h3>5. Shipping Costs</h3>
            <p>Shipping costs are calculated based on destination, weight, and dimensions. <strong>Free shipping</strong> is available on orders above <strong>₹999</strong>.</p>
          </section>

          <section className="policy-section">
            <h3>6. Order Tracking</h3>
            <p>Once shipped, you will receive a confirmation email with a tracking number and a link to track your package. You can also track your order via your website account.</p>
          </section>

          <section className="policy-section">
            <h3>7. Delivery Issues</h3>
            <ul className="policy-list">
              <li><strong>Failed Attempts:</strong> Carriers will typically try again or leave a notification.</li>
              <li><strong>Incorrect Address:</strong> We are not responsible for orders shipped to incorrect addresses provided by customers.</li>
              <li><strong>Refused Delivery:</strong> Customers will be responsible for return shipping and restocking fees if delivery is refused.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h3>8. International Shipping</h3>
            <p>For international orders, additional customs fees, import duties, or taxes are the responsibility of the recipient. International delivery times vary significantly based on destination.</p>
          </section>

          <section className="policy-section">
            <h3>9. Shipping Restrictions</h3>
            <p>Certain items like fragile, perishable, or high-value goods may have special shipping requirements or require signature confirmation.</p>
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

export default ShippingPolicy;
