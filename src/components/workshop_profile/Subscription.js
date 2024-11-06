// import React, { useState } from 'react';
// import './Subscription.css';
// import Access from './Access';

// const SubscriptionTable = () => {
//   const [entriesPerPage, setEntriesPerPage] = useState(10);
//   const subscriptions = [
//     {
//       package: '01',
//       name: 'TRIAL',
//       activationDate: 'Oct 09 2024',
//       expiredDate: 'Oct 15 2024',
//       duration: '6 Days',
//       offer: '',
//       packagePrice: '10,000.00',
//       status: 'ACTIVE',
//     },
//   ];

//   return (
//     <div className="subscription">
//       <Access />
//       <div className="table-options">
//         <label htmlFor="entries-select">Show</label>
//         <select
//           id="entries-select"
//           value={entriesPerPage}
//           onChange={(e) => setEntriesPerPage(e.target.value)}
//         >
//           <option value={10}>10</option>
//           <option value={25}>25</option>
//           <option value={50}>50</option>
//           <option value={100}>100</option>
//         </select>
//         <span>entries</span>
//       </div>

//       <table className="subscription-table">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Packages</th>
//             <th>Activation Date</th>
//             <th>Expired Date</th>
//             <th>Duration</th>
//             <th>Offer</th>
//             <th>Package Price</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {subscriptions.map((sub, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{sub.name}</td>
//               <td>{sub.activationDate}</td>
//               <td>{sub.expiredDate}</td>
//               <td>{sub.duration}</td>
//               <td>{sub.offer}</td>
//               <td>{sub.packagePrice}</td>
//               <td>{sub.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="pagination">
//         <span>Showing 1 to 1 of 1 entries</span>
//         <div className="pagination-controls">
//           <button className="previous">Previous</button>
//           <button className="next">Next</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionTable;
