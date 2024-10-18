
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TermekFelulet from './TermekFelulet.js';



function App() {
  
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <h1>Könyváruház</h1>
      </header>

      <main className="App-main">
      <Routes>
            <Route
              path="/"
              element={
                <div className="fokep">
                  <h2>Minden oldal új kezdet, de merre lapozol?</h2>
                  <img src="./kepek/konyvkep.jpg" alt="every page is a new beginning." />
                  <div className="navigacio">
                    <Link to="/termekfelulet" className="btn btn-primary mt-4">Termékek</Link>
                  </div>
                </div>
              }
            />
            <Route path="/termekfelulet" element={<TermekFelulet />} />
          </Routes>
          
        </main>
        <footer>Baksa Bence</footer>
    </div>
    </Router>
  );
}

export default App;
