import React, { useState, useEffect } from 'react';

function EmployeeList() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/employees') 
            .then((response) => response.json())
            .then((data) => setEmployees(data))
            .catch((error) => console.error('Error fetching employees:', error));
    }, []);


    return (
        <div>
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
    );
}

export default EmployeeList;