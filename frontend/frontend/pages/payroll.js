const API_URL_EMPLOYEES = 'http://localhost:3001/api/employees';
const API_URL_PAYROLL = 'http://localhost:3001/api/payroll';

let employees = [];

// Fetch employees and populate the payroll table
async function fetchEmployees() {
  try {
    const response = await fetch(API_URL_EMPLOYEES);
    employees = await response.json();
    renderPayrollTable();
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
}

// Render the payroll table
function renderPayrollTable() {
  const tableBody = document.getElementById('payrollTableBody');
  tableBody.innerHTML = '';

  employees.forEach((employee, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${employee.name}</td>
        <td>${employee.position || 'N/A'}</td>
        <td>
          <input type="number" class="form-control basic-salary" data-id="${employee.id}" value="${employee.basicSalary || 0}">
        </td>
      </tr>
    `;
    tableBody.insertAdjacentHTML('beforeend', row);
  });
}

// Save payroll data
async function savePayroll() {
  const updatedPayroll = [];

  document.querySelectorAll('.basic-salary').forEach((input) => {
    const id = parseInt(input.getAttribute('data-id'), 10);
    const basicSalary = parseFloat(input.value);

    updatedPayroll.push({ id, basicSalary });
  });

  try {
    await fetch(API_URL_PAYROLL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPayroll),
    });
    alert('Payroll saved successfully!');
    fetchEmployees(); // Refresh the table
  } catch (error) {
    console.error('Error saving payroll:', error);
  }
}

// Reset payroll for a specific employee
function resetPayroll(id) {
  const employee = employees.find((emp) => emp.id === id);
  if (employee) {
    employee.basicSalary = 0;
  }
  renderPayrollTable();
}

// Reset all payroll data
function resetAllPayroll() {
  employees.forEach((emp) => {
    emp.basicSalary = 0;
  });
  renderPayrollTable();
}

// Event Listeners
document.getElementById('savePayroll').addEventListener('click', savePayroll);
document.getElementById('resetPayroll').addEventListener('click', resetAllPayroll);

// Fetch employees on page load
fetchEmployees();
