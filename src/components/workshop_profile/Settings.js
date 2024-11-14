import React from 'react';
import './Settings.css';
import Access from './Access';

const SettingsPage = () => {
  const features = [
    { label: 'Notifications (SMS, WhatsApp, Email)', },
    { label: 'Custom Fields',  },
    { label: 'Number Pre-generation (Invoice, Credit / Debit Note)',  },
    { label: 'Mobile App',},
    { label: 'Book Appointment',  },
    { label: 'Inventory Management', },
    { label: 'Digital Payments',  },
    { label: 'Invoice',  },
    { label: 'Other Features',  },
  ];

  return (
    <div className="settings">
      <p className='title'>Settings</p>
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