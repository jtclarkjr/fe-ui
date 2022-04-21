import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './views/Home/Home';
import Album from './views/Album/Album';
import Sidebar from './components/Sidebar/Sidebar';
import './styles/App.css';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Sidebar />
          <main className="main">
            <Routes>
              <Route path="/album/:id" element={<Album />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
