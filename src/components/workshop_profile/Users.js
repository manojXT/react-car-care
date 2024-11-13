import React, { useState } from 'react';
import './Access.css'; 
import Access from './Access';

const Users = () => {
  const [users, setUsers] = useState([
    {
      userName: '',
      email: '',
      mobile: '',
      role: '',
      status: {
        userDisable: false,
        reportsAccess: true,
        reportsDownload: true,
        estimationPriceEdit: true,
        paymentsCollection: true,
        invoiceAccess: true,
      },
    },
  ]);

  const [newUser, setNewUser] = useState({
    userName: '',
    email: '',
    mobile: '',
    role: '',
    status: {
      userDisable: false,
      reportsAccess: false,
      reportsDownload: false,
      estimationPriceEdit: false,
      paymentsCollection: false,
      invoiceAccess: false,
    },
  });

  const toggleStatus = (index, key) => {
    const updatedUsers = [...users];
    updatedUsers[index].status[key] = !updatedUsers[index].status[key];
    setUsers(updatedUsers);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, newUser]);
    setNewUser({
      userName: '',
      email: '',
      mobile: '',
      role: '',
      status: {
        userDisable: false,
        reportsAccess: false,
        reportsDownload: false,
        estimationPriceEdit: false,
        paymentsCollection: false,
        invoiceAccess: false,
      },
    });
  };

  return (
    <div className="users-page">
      <p className="title">Users</p>
      <Access />
      <form className="user-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="userName"
            placeholder="Enter Username"
            value={newUser.userName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={newUser.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile No.</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile No."
            value={newUser.mobile}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Select User Role</label>
          <select
            name="role"
            value={newUser.role}
            onChange={handleInputChange}
            required
          >
            <option value="">Select User Role</option>
            <option value="WORKSHOPADMIN">WORKSHOPADMIN</option>
            <option value="SERVICEADVISOR">SERVICEADVISOR</option>
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
              <td>{user.date}</td>
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
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
