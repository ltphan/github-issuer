import { useEffect } from 'react';
import logo from './logo.svg';

import './App.css';
import { fetchData } from './data';
import Search from './screens/Search';


function App() {

  useEffect(() => {
    fetchData("https://api.github.com/search/issues?q=repo:ltphan/meditation-chrome-extension is:issue is:pr")
  })

  return (
    <div className="App">
      <header className="App-header">
      <Search />
      </header>
    </div>
  );
}

export default App;
