import React from 'react';
import './Userslist.css'
const Userslist = ({ users }) => {
  return (
    <div className='list-container'>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>{user.name} ({user.age} years old)</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Userslist;
