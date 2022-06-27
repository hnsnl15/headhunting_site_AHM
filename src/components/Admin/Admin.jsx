import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Admin() {
  let userData = localStorage.getItem('users');
  const [users, setUsers] = useState(userData ? JSON.parse(userData) : []);

  const name = user => {
    return `${user.firstname} ${user.lastname}`;
  }

  const deleteUser = id => {
    let filteredUsers = users.filter( user => user.id !== id );
    setUsers(filteredUsers);
  }

  const isAdmin = user => {
    return user.isAdmin ? <CheckCircleIcon /> : <CancelIcon />;
  }

  useEffect( () => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])

  return (
    <div
    style = {{
      width: 'min(1600px, 80%)',
      margin: 'auto',
    }}
    >
      <table className="table table-striped table-hover table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Role</th>
            <th>Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map( user => {
              return <tr>
                <td>{name(user)}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>{user.position}</td>
                <td>{isAdmin(user)}</td>
                <td>
                  <DeleteIcon onClick={ () => deleteUser(user.id)} />
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
