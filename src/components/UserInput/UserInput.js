import React, { useState } from 'react';
import PopupError from '../PopupError/PopupError'; 
import './UserInput.css';

const UserInput = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(null);

  const nameInputChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError('Please enter a valid name and age!');
      return;
    }

    if ( +age < 0 || isNaN(+age)) {
      setError('Please enter age > 0.');
      return;
    }

    props.onUserInput({ name, age: +age });
    setName('');
    setAge('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div className="form-container">
      {error && <PopupError onClose={errorHandler} message={error} />}
      <form className="user-form" onSubmit={formSubmitHandler}>
        <div className="user-input-control">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={nameInputChangeHandler}
          />
        </div>
        <div className="user-input-control">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={ageInputChangeHandler}
          />
        </div>
        <button type="submit">ADD USER</button>
      </form>
    </div>
  );
};

export default UserInput;
