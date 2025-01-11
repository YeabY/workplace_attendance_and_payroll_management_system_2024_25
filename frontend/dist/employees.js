"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Backend API URL
const API_URL = 'http://localhost:3000/employee';
// Get the table body element
const employeeTableBody = document.getElementById('employeeTableBody');
// Fetch all employees from the backend and display them in the table
function fetchEmployees() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(API_URL, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Pass JWT token
                },
            });
            const result = yield response.json();
            if (result.status === 'success') {
                const employees = result.data;
                employeeTableBody.innerHTML = ''; // Clear existing rows
                console.log(employees);
                employees.forEach((employee) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
          <td>${employee.id}</td>
          <td>${employee.name}</td>
          <td>${employee.position}</td>
          <td>${employee.department}</td>
          <td>${employee.email}</td>
          <td>${employee.salary}</td>
          <td>
            <button onclick="deleteEmployee(${employee.id})">Delete</button>
          </td>
        `;
                    employeeTableBody.appendChild(row);
                });
            }
            else {
                alert(result.message);
            }
        }
        catch (error) {
            console.error('Error fetching employees:', error);
        }
    });
}
// Delete an employee
function deleteEmployee(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                },
            });
            const result = yield response.json();
            if (result.status === 'success') {
                alert(result.message);
                fetchEmployees(); // Refresh the list
            }
            else {
                alert(result.message);
            }
        }
        catch (error) {
            console.error('Error deleting employee:', error);
        }
    });
}
// Load employees on page load
document.addEventListener('DOMContentLoaded', fetchEmployees);
//# sourceMappingURL=employees.js.map