// import logo from './logo.svg';
import './App.css';
import { multipleTrials, oneMontyTrial } from './pages/functions/OneTrial';
import { useState } from 'react';
import SelectionPage from './pages/SelectionPage';

function App() {

  const [page, setPage] = useState("selectionPage");

  return (
    <div className="App">
      {page == "selectionPage" && <SelectionPage setPage={setPage}/>}
    </div>
  );
}

export default App;
