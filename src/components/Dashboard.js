import React from 'react';
import './Dashboard.css';
import Icon1 from './Icons/Icon1.png';
import Icon2 from'./Icons/Icon2.png';
import Icon3 from'./Icons/Icon3.png';
import Icon4 from'./Icons/Icon4.png';
import Icon5 from'./Icons/Icon5.png';
import Icon6 from'./Icons/Icon6.png';
import Icon7 from'./Icons/Icon7.png';
import Icon8 from'./Icons/Icon8.png';
import Icon9 from'./Icons/Icon9.png';
import Icon10 from'./Icons/Icon10.png';

const dashboardData = [
    { color: 'linear-gradient(135deg, #A80000, #000000)', title: 'Req for Estimation', count: 0, amount: 0, icon: <img src={Icon1} alt="Req for Estimation" style={{ width: '50px', height: '60px', }} /> },
    { color: 'linear-gradient(135deg, #457689, #000000)', title: 'Estimate', count: 0, amount: 0, icon: <img src={Icon2} alt="Estimate" style={{ width: '60px', height: '60px',  }}  /> },
    { color: 'linear-gradient(135deg, #2e2f5b, #000000)', title: 'Spare pending', count: 0, amount: 0, icon: <img src={Icon3} alt="Spare pending" style={{ width: '60px', height: '60px',}} /> },
    { color: 'linear-gradient(135deg, #ff6d00, #000000)', title: 'Work in progress', count: 0, amount: 0, icon: <img src={Icon4} alt="Work in progress" style={{ width: '60px', height: '60px', }}  /> },
    { color: 'linear-gradient(135deg, #ffc5d9, #000000)', title: 'Ready for delivery', count: 0, amount: 0, icon: <img src={Icon5} alt="Ready for delivery" style={{ width: '60px', height: '60px',  }}  /> },
    { color: 'linear-gradient(135deg, #018abd, #000000)', title: 'Invoice', count: 0, amount: 0, icon: <img src={Icon6} alt="Invoice" style={{ width: '60px', height: '60px', }}  /> },
    { color: 'linear-gradient(135deg, #55a6c9, #000000)', title: 'Delivered', count: 0, amount: 0, icon: <img src={Icon7} alt="Delivered" style={{ width: '60px', height: '60px',  }}  /> },
    { color: 'linear-gradient(135deg, #f4d35e, #000000)', title: 'In workshop', count: 0, amount: 0, icon: <img src={Icon8} alt="In workshop" style={{ width: '60px', height: '60px', }}  /> },
    { color: 'linear-gradient(135deg, #915a3c, #000000)', title: 'Est rejected', count: 0, amount: 0, icon: <img src={Icon9} alt="Est rejected" style={{ width: '40px', height: '60px', }} /> },
    { color: 'linear-gradient(135deg, #e1c7a5, #000000)', title: 'Approval pending', count: 0, amount: 0, icon: <img src={Icon10} alt="Approval pending" style={{ width: '60px', height: '60px',  }}  /> },
];

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-cards">
                {dashboardData.map((item, index) => (
                    <div key={index} className="dashboard-card" style={{ background: item.color }}>
                        <div className="card-left">
                            <div className="card-icon">{item.icon}</div> {/* Fixed the key from 'icons' to 'icon' */}
                        </div>
                        <div className="card-right">
                            <div className="card-title">{item.title}</div>
                            <div className="card-info">
                                <span>{item.count}</span>
                            </div>
                            <div>
                                <span>₹{item.amount}</span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
