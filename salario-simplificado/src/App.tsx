import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImpostoForm from './components/forms/ImpostoForm/ImpostoForm';
import Header from './components/forms/HeaderFiles/Header';

function App() {
  return (
    <div className="App">  
      <Header />    
      <ImpostoForm />        
    </div>
  );
}

export default App;
