import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Admin() {
  let userData = localStorage.getItem('users');
  const [users, setUsers] = useState(userData ? JSON.parse(userData) : []);
  let currUserData = localStorage.getItem('CurrentUser');
  const [currUser, setCurrUser] = useState( currUserData ? JSON.parse(currUserData) : null);

  const name = user => {
    return `${user.firstname} ${user.lastname}`;
  }

  const deleteUser = id => {
    if (id === props.currUser.id) return null;
    let filteredUsers = users.filter( user => user.id !== id );
    setUsers(filteredUsers);
  }

  const isAdmin = user => {
    return user.isAdmin ? <CheckCircleIcon /> : <CancelIcon />;
  }

  const toggleAdmin = id => {
    let newUsers = users.map( user => {
      if (user.id == id) { user.isAdmin = !user.isAdmin; }
      if (user.id == currUser.id) { setCurrUser(user) }
      return user;
    })
    setUsers(newUsers);
  }

  useEffect( () => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])

  useEffect( () => {
    localStorage.setItem('CurrentUser', JSON.stringify(currUser));
  }, [currUser])

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
                <td onClick={() => toggleAdmin(user.id)} style={{cursor:'pointer'}}>{isAdmin(user)}</td>
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
