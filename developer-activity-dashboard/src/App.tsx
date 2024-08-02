import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserDetail from './components/Shared/UserDetails';
import Header from './components/Shared/Header';
import { Provider } from 'react-redux';
import store from './store/store';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:name" element={<UserDetail />} />
        </Routes>
        {/* <Card/> */} 
      </Router>
      </Provider>
    </>
    
  );
};

export default App;
