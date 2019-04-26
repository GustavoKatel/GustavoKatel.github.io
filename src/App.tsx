import React from 'react';
import './App.scss';
import TermWindow from './TermWindow';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TermWindow/>
      </header>
    </div>
  );
}

export default App;
