import React, { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import Userslist from './components/Userslist/Userslist';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleUserInput = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
  };

  return (
    <div className="App">
      <UserInput onUserInput={handleUserInput} />
      <Userslist users={users} />
    </div>
  );
};

export default App;
