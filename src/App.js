import React from 'react';


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import Footers from './components/Footers';
import Home from './components/Home';

import Sidebar from './components/Sidebar';
import AdminDashboard from './components/Admin/AdminDashboard';
import EmployeeLogin from './components/Employee/EmployeeLogin';
import EmployeeDashboard from './components/Employee/EmployeeDashboard';
import UpdateEmployeeDetails from './components/Admin/UpdateEmployeeDetails';





function App() {
  return (

    <div>
      <Router>
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path = "/home" element = {< Home />}></Route>
           <Route path = "/admin" element = {< AdminDashboard />}></Route>
           <Route path = "/employee-login" element = {< EmployeeLogin />}></Route>
           <Route path = "/employee-home" element = {< EmployeeDashboard />}></Route>
           <Route path = "/update-details" element = {< UpdateEmployeeDetails/>}></Route>
           <Route path = "/hi" element = {< Sidebar/>}></Route>
        </Routes>
        </div>
        <Footers />
      </Router>



</div>


  );
}

export default App;