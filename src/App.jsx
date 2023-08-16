import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/index';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<IndexPage />} /> {/* Use "element" prop */}
          {/* Add more routes using the same pattern */}
        </Routes>
        <Footer/>
      </Router>
    </React.StrictMode>
  );
}

export default App;
