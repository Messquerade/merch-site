import React from 'react';
import Header from './Header';
import KiltControl from './KiltControl';
import '../App.css';

function App() {
  return (
    <div className="container">
      <React.Fragment>
        <Header />
        <KiltControl />
      </React.Fragment>
    </div>
  );
}

export default App;