import React from 'react';
import 'weui'
import Header from './components/Header/index'
import Search from './components/Search/index'
import Panel from './components/Panel/index'
function App() {
  return (
    <div className="App">
    <Header/>
    <Search/>
    <Panel/>
    </div>
  );
}

export default App;
