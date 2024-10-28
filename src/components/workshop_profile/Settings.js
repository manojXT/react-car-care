import React from 'react';
import './Settings.css';
import Access from './Access';

const SettingsPage = () => {
  const features = [
    { label: 'Notifications (SMS, WhatsApp, Email)', icon: 'notification-icon.png' },
    { label: 'Custom Fields', icon: 'custom-fields-icon.png' },
    { label: 'Number Pre-generation (Invoice, Credit / Debit Note)', icon: 'pregeneration-icon.png' },
    { label: 'Mobile App', icon: 'mobile-app-icon.png' },
    { label: 'Book Appointment', icon: 'appointment-icon.png' },
    { label: 'Inventory Management', icon: 'inventory-icon.png' },
    { label: 'Digital Payments', icon: 'payments-icon.png' },
    { label: 'Invoice', icon: 'invoice-icon.png' },
    { label: 'Other Features', icon: 'other-features-icon.png' },
  ];

  return (
    <div className="settings">
      <Access />
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.icon} alt={feature.label} className="feature-icon" />
            <span>{feature.label}</span>
          </div>
        ))}
      </div>
      <div><button className="next-button">Next</button></div>
    </div>
  );
};

export default SettingsPage;