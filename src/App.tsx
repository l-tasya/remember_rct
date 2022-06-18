import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app-wrapper">
          <Header title={'Fox Network'} />
          <Navbar />
          <div className={'content'}>
              <div className='some'>some text</div>
          </div>
    </div>
  );
}

export default App;
