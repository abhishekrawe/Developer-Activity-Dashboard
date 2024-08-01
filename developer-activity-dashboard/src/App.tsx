import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserDetail from './components/Shared/UserDetails';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:name" element={<UserDetail />} />
        </Routes>
      </Router>
    </>
    
  );
};

export default App;
