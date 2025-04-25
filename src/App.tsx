// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';  
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'; // Import the Register component
import Plans from './pages/Plans';
// import ProtectedRoute from './routes/ProtectedRoute'; // Import the ProtectedRoute component
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        {/* <Route path="/protected" element={<ProtectedRoute component={ProtectedComponent} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;