// Backend API URL
const API_URL = 'http://localhost:3000/employee';

// Define an interface for Employee
interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  salary: number;
}

// Get the table body element
const employeeTableBody = document.getElementById('employeeTableBody') as HTMLTableSectionElement;

// Fetch all employees from the backend and display them in the table
async function fetchEmployees(): Promise<void> {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Pass JWT token
      },
    });

    const result = await response.json();

    if (result.status === 'success') {
      const employees: Employee[] = result.data;
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
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
}

// Delete an employee
async function deleteEmployee(id: number): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    });

    const result = await response.json();

    if (result.status === 'success') {
      alert(result.message);
      fetchEmployees(); // Refresh the list
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error('Error deleting employee:', error);
  }
}

// Load employees on page load
document.addEventListener('DOMContentLoaded', fetchEmployees);
