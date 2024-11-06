import React from 'react';
import './Reportsnavbar.css';

const Reportsnavbar = () => {
    return (
        <div className="nav-bar">
            <a href="/Jobcardupdate">Job card updates</a>
            <a href="#workshop">Billing updates overall</a>
            <a href="#users">Employee details</a>
        </div>
    );
};

export default Reportsnavbar;
