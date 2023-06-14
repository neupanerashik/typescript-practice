import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Greet from './Greet';
import { Person } from './Person';
import { PersonList } from './PersonList';

function App() {
  const personName={
    first: "Rashik",
    last: "Neupane"
  }

  const nameList =[
    {
      first: "Sandesh",
      last: "Bhandari"
    },
    {
      first: "Sagar",
      last: "Bhandari"
    },
    {
      first: "Sudip",
      last: "Bhandari"
    },
  ]
  return (
    <div className="App">
      <Greet name='Rashik' messageCount={20} isLoggedIn={false} />
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
