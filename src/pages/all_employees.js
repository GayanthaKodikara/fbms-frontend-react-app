import React, { useState, useEffect } from 'react';

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/employees') // to env file
            .then((response) => response.json())
            .then((data) => setEmployees(data))
            .catch((error) => console.error('Error fetching employees:', error));
    }, []);


    return (
        <div className="container">
            <div className="row">

                <div className="list-group list-group-flush col-md-2 col-lg-2 vstack gap-4">
                    <a className="list-group-item list-group-item-action active" href="/employee_list" >Employee List</a>
                    <a className="list-group-item list-group-item-action" href="/add_employee" >Add Employee</a>
                    <a className="list-group-item list-group-item-action" href="/update_employee" >Update Employee</a>
                    <a className="list-group-item list-group-item-action" href="/remove_permission" >Remove Permission</a>
                </div>


                <div className='col-md-9 ms-sm-auto col-lg-10'>
                    <h2>Employee List</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>NIC</th>
                                <th>Birth Day</th>
                                <th>Role</th>
                                <th>Workshop Name</th>
                                <th>Design Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.emp_id}>
                                    <td>{employee.emp_id}</td>
                                    <td>{employee.first_name}</td>
                                    <td>{employee.last_name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.address}</td>
                                    <td>{employee.nic}</td>
                                    <td>{employee.birth_day}</td>
                                    <td>{employee.role}</td>
                                    <td>{employee.workshop_name}</td>
                                    <td>{employee.design_category}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmployeeList;