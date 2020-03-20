import React from 'react';

import './App.css';

import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName = "Wan"
        lastName = "Sheng"
        age = {20}
        hairColor = "black"
      />
      <PersonCard
        firstName = "Michael"
        lastName = "Chen"
        age = {22}
        hairColor = "black"
      />
      <PersonCard
        firstName = "Stephen"
        lastName = "Belisario"
        age = {25}
        hairColor = "black"
      />   
      <PersonCard/>         
    </div>
  );
}

export default App;
