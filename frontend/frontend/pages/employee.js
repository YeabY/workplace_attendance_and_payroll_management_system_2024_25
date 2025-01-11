// employees.js

let employees = [];
const employeeTableBody = document.getElementById("employeeTableBody");
const addEmployeeForm = document.getElementById("addEmployeeForm");

const API_URL = 'http://localhost:3001/api/employees';

// Fetch employees from the backend
async function fetchEmployees() {
  try {
    const response = await fetch(API_URL);
    employees = await response.json();
    renderEmployees();
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
}

async function saveEmployees() {
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employees),
      });
      alert("Employees saved successfully!");
      fetchEmployees(); // Refresh the list after saving
    } catch (error) {
      console.error("Error saving employees:", error);
    }
  }
  

// Render employees in the table
function renderEmployees() {
  employeeTableBody.innerHTML = "";
  employees.forEach((employee, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${employee.id}</td>
      <td>${employee.name}</td>
      <td>${employee.dob}</td>
      <td>${employee.age}</td>
      <td>${employee.position}</td>
      <td>${employee.phone}</td>
      <td>${employee.email}</td>
      <td>${employee.shift}</td>
      <td>
        <button class="btn btn-warning btn-sm" onclick="editEmployee(${index})">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteEmployee(${index})">Delete</button>
      </td>
    `;
    employeeTableBody.appendChild(row);
  });
}

// Add a new employee
addEmployeeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newEmployee = {
    id: Date.now(),
    name: document.getElementById("employeeName").value,
    dob: document.getElementById("employeeDOB").value,
    age: calculateAge(document.getElementById("employeeDOB").value),
    position: document.getElementById("employeePosition").value,
    phone: document.getElementById("employeePhoneNo").value,
    email: document.getElementById("employeeEmail").value,
    shift: document.querySelector('input[name="shift"]:checked').value,
  };
  employees.push(newEmployee);
  renderEmployees();
  addEmployeeForm.reset();
});

// Edit an employee
function editEmployee(index) {
  const employee = employees[index];
  const name = prompt("Edit Name:", employee.name);
  const position = prompt("Edit Position:", employee.position);
  if (name && position) {
    employee.name = name;
    employee.position = position;
    renderEmployees();
  }
}

// Delete an employee
function deleteEmployee(index) {
  if (confirm("Are you sure you want to delete this employee?")) {
    employees.splice(index, 1);
    renderEmployees();
  }
}

// Calculate age from date of birth
function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// Event listeners for Save button
document.getElementById("saveButton").addEventListener("click", saveEmployees);

// Fetch employees on page load
fetchEmployees();
