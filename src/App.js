// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './AdminPage/Page';
import Task from './TaskPage/Task'; 
import Request from './Request/Request'; 
import SignUp from './Authentication/Signup';
import Login from './Authentication/Login';

const App = () => {
  return (
   
    <Router>
      
        <Routes>
          <Route path="/Dashboard" element={<Page />} />
          <Route path="/Task" element={<Task />} />
          <Route path="/request" element={<Request />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<Login />} />
        </Routes>
      
      
    </Router>
    

  );
};

export default App;