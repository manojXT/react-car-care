import React from 'react';
import './Integrations.css';
import Access from './Access';

const integrations = [
    {
        logo: 'Autozilla', // replace with actual image URL or component
        title: 'Autozilla',
        description: 'Buy the right spares at the right price. Delight your customers with fast service...',
        learnMoreLink: '#',
    },
    {
        logo: 'Razorpay', // replace with actual image URL or component
        title: 'Razorpay',
        description: 'Streamline your payment experience by integrating Razorpay into Autorox...',
        learnMoreLink: '#',
    },
    {
        logo: 'Location', // replace with actual image URL or component
        title: 'Location',
        description: 'Enhance your vehicle data management by seamlessly integrating Locations...',
        learnMoreLink: '#',
    },
    {
        logo: 'Stockone', // replace with actual image URL or component
        title: 'Stockone',
        description: 'Enhance your inventory management by seamlessly integrating Stockone...',
        learnMoreLink: '#',
    },
];

const Integrations = () => {
    return (
        <div className="integrations">
        <Access />
            {integrations.map((integration, index) => (
                <div key={index} className="integration-card">
                    <div className="integration-logo">
                        <img src={`${integration.logo}.png`} alt={integration.title} />
                    </div>
                    <div className="integration-info">
                        <h3>{integration.title}</h3>
                        <p>{integration.description}</p>
                        <div className="integration-actions">
                            <a href={integration.learnMoreLink} className="learn-more">Learn more</a>
                            <button className="connect-btn">Connect</button>
                        </div>
                    </div>
                </div>
            ))}
            <button className="submit-btn">Submit</button>
        </div>
    );
};


export default Integrations;