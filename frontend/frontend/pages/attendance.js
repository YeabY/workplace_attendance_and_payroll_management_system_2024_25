const API_URL_EMPLOYEES = 'http://localhost:3001/api/employees';
const API_URL_ATTENDANCE = 'http://localhost:3001/api/attendance';

let employees = [];
let attendanceData = [];

// Fetch employees from the server
async function fetchEmployees() {
  try {
    const response = await fetch(API_URL_EMPLOYEES);
    employees = await response.json();
    renderEmployeeTable();
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
}

// Fetch existing attendance data from the server
async function fetchAttendanceData() {
  try {
    const response = await fetch(API_URL_ATTENDANCE);
    attendanceData = await response.json();
    renderEmployeeTable();
  } catch (error) {
    console.error('Error fetching attendance data:', error);
  }
}

// Render employee table
function renderEmployeeTable() {
  const tableBody = document.getElementById('employeeListTable');
  tableBody.innerHTML = '';

  employees.forEach((employee, index) => {
    const attendanceEntry = attendanceData.find(
      (entry) => entry.name === employee.name
    ) || { status: '', workedHours: '' };

    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${employee.name}</td>
        <td>${employee.position || 'N/A'}</td>
        <td>
          <select class="form-select status-select" data-name="${employee.name}">
            <option value="Present" ${attendanceEntry.status === 'Present' ? 'selected' : ''}>Present</option>
            <option value="Absent" ${attendanceEntry.status === 'Absent' ? 'selected' : ''}>Absent</option>
            <option value="Leave" ${attendanceEntry.status === 'Leave' ? 'selected' : ''}>Leave</option>
          </select>
        </td>
      </tr>
    `;

    tableBody.insertAdjacentHTML('beforeend', row);
  });
}

// Save attendance data to the server
async function saveAttendance() {
  const attendance = [];
  document.querySelectorAll('#employeeListTable tr').forEach((row) => {
    const name = row.querySelector('.status-select').getAttribute('data-name');
    const status = row.querySelector('.status-select').value;
    const workedHours = row.querySelector('.worked-hours').value;

    attendance.push({ name, status, workedHours });
  });

  try {
    await fetch(API_URL_ATTENDANCE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(attendance),
    });
    alert('Attendance saved successfully!');
  } catch (error) {
    console.error('Error saving attendance:', error);
  }
}

// Reset a specific employee's attendance entry
function deleteAttendanceEntry(name) {
  attendanceData = attendanceData.filter((entry) => entry.name !== name);
  renderEmployeeTable();
}

// Reset all attendance entries
function resetAllAttendance() {
  attendanceData = [];
  renderEmployeeTable();
}

// Event Listeners
document.getElementById('saveButton').addEventListener('click', saveAttendance);
document.getElementById('resetButton').addEventListener('click', resetAllAttendance);

// Initial fetch calls
fetchEmployees();
fetchAttendanceData();
