import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { MouseTracker } from './components/renderProps';
import { MyForm } from './components/MyForm';
import { Calculator } from './components/LiftingStateUp';

function App() {
  const navItems = [{
    id: "nav0",
    name:"Home"
  }, {
    id: "nav1",
    name: "About"
  }];
  return (
    <div className="App">
        <Header navItems={navItems}/>
        <Content>
          {/* <MyForm/>
          <Calculator/> */}
          <MouseTracker/>
        </Content>
    </div>
  );
}

export default App;
