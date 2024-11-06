import React, { useState } from 'react';
import './Access.css'; 
import Access from './Access';

const Users = () => {
  const [users, setUsers] = useState([
    {
      userName: 'axtest',
      email: 'swathir@autorox.co',
      mobile: '8247089593',
      role: 'WORKSHOPADMIN',
      status: {
        userDisable: false,
        reportsAccess: true,
        reportsDownload: true,
        estimationPriceEdit: true,
        paymentsCollection: true,
        invoiceAccess: true,
      },
    },
    {
      userName: 'sparesax',
      email: 'miraggogi.tsk@gmail.com',
      mobile: '9999999999',
      role: 'SERVICEADVISOR',
      status: {
        userDisable: false,
        reportsAccess: true,
        reportsDownload: true,
        estimationPriceEdit: false,
        paymentsCollection: false,
        invoiceAccess: true,
      },
    },
  ]);

  const toggleStatus = (index, key) => {
    const updatedUsers = [...users];
    updatedUsers[index].status[key] = !updatedUsers[index].status[key];
    setUsers(updatedUsers);
  };

  return (
    <div className="users-page">
      <Access />
      <form className="user-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="Enter Username" required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter Password" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter Email" required />
        </div>

        <div className="form-group">
          <label>Mobile No.</label>
          <div className="mobile-group">
            
            <input type="tel" placeholder="+91 Mobile No." required />
          </div>
        </div>

        <div className="form-group">
          <label>Select User Role</label>
          <select required>
            <option>Select User Role</option>
            <option>WORKSHOPADMIN</option>
            <option>SERVICEADVISOR</option>
            {/* Add more roles as necessary */}
          </select>
        </div>

        
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <table className="user-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email ID</th>
            <th>Mobile No.</th>
            <th>Role</th>
            <th>User Disable</th>
            <th>Reports Access</th>
            <th>Reports Download</th>
            <th>Estimation Price Edit</th>
            <th>Payments & Collection</th>
            <th>Invoice Access</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.role}</td>
              <td>
                <input
                  type="checkbox"
                  checked={user.status.userDisable}
                  onChange={() => toggleStatus(index, 'userDisable')}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={user.status.reportsAccess}
                  onChange={() => toggleStatus(index, 'reportsAccess')}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={user.status.reportsDownload}
                  onChange={() => toggleStatus(index, 'reportsDownload')}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={user.status.estimationPriceEdit}
                  onChange={() => toggleStatus(index, 'estimationPriceEdit')}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={user.status.paymentsCollection}
                  onChange={() => toggleStatus(index, 'paymentsCollection')}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={user.status.invoiceAccess}
                  onChange={() => toggleStatus(index, 'invoiceAccess')}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
