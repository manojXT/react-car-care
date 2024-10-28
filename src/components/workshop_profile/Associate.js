import React from 'react';
import './Associate.css';
import Access from './Access';

const Associate = () => {

    const workshopData = [];

    return (
        <div className="associate">
            <Access />
            <div className="workshop-table">
                <table>
                    <thead>
                        <tr>
                            <th>Workshop Name</th>
                            <th>Type Of Business</th>
                            <th>Created Date</th>
                            <th>Package Name</th>
                            <th>GSTIN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workshopData.length === 0 ? (
                            <tr>
                                <td colSpan="5">Showing 0 to 0 of 0 entries</td>
                            </tr>
                        ) : (
                            workshopData.map((workshop, index) => (
                                <tr key={index}>
                                    <td>{workshop.name}</td>
                                    <td>{workshop.typeOfBusiness}</td>
                                    <td>{workshop.createdDate}</td>
                                    <td>{workshop.packageName}</td>
                                    <td>{workshop.gstin}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <div><button className="next-button">Next</button></div>
        </div>
    );
};

export default Associate;
