import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import TeamForm from './Form'

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {

const [teamMembers, setTeamMembers] = useState([]); 
const [formValues, setFormValues] = useState(initialFormValues);
const [error, setError] = useState("");

const updateForm = (inputName, inputValue) => {
  setFormValues({ ...formValues, [inputName]: inputValue});
}

const submitForm = () => {
  const newMember = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    role: formValues.role
  }

  if (!newMember.username || !newMember.email || !newMember.role) {
    setError("All Fields Are Required")
  } else {
    setTeamMembers(teamMembers.concat(newMember));
    setFormValues(initialFormValues);
    setError("")
  }
}

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>My Team</h1>
      <h2>{error}</h2>
      <TeamForm 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        teamMembers.map((member, idx) => (
          <div key={idx}>
            {member.username} is a {member.role} their email is {member.email}
          </div>
        ))}
    </div>
  );
}

export default App;
