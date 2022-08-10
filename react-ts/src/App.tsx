import React from 'react';
import './App.css';
import Header from './header';

const App = () => {
  return (
    <div className="App">
      <Header color='blue' title='This app is using TypeScript' />
      <p>hello world</p>
    </div>
  );
}

export default App;
