import './App.css';
import './bootstrap-5.3.3/dist/css/bootstrap.css';
import AddEmployee from './pages/add_employee';
import EmployeeList from './pages/all_employees';
import Login from './pages/login';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router'; //Link


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
              {/* <li>
                <Link to="/">Home</Link>
              </li> */}
            {/* <li>
              <Link to="/login">Login</Link>
            </li> */}
            {/* <li>
              <Link to="/employee_list">Employee List</Link>
            </li>
            <li>
              <Link to="/add_employee">Add Employee</Link>
            </li> */}
          </ul>
        </nav>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login/>} />
          <Route path="/employee_list" element={<EmployeeList/>} />
          <Route path="/add_employee" element={<AddEmployee/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
