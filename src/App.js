// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SelectionPage from './pages/SelectionPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [page, setPage] = useState("selectionPage");

  return (
    <div className="App">
      <Header subtitle="Explore probability models and visualisations" />
      <main className="container main-content">
        {page === "selectionPage" && <SelectionPage setPage={setPage}/>}
      </main>
      <Footer />
    </div>
  );
}

export default App;
