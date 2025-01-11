// attendance.ts

import axios from 'axios';

// Select elements from the DOM
const attendanceDateInput = document.getElementById('attendanceDate') as HTMLInputElement;
const employeeListTable = document.getElementById('employeeListTable');
const saveButton = document.getElementById('saveButton');
const resetButton = document.getElementById('resetButton');

interface EmployeeAttendance {
  id: number;
  name: string;
  position: string;
  status: string;
  workedHours: number;
  clockInTime?: Date;
  clockOutTime?: Date;
}

let attendanceData: EmployeeAttendance[] = [];

// Fetch attendance data from the server for the selected date
const fetchAttendanceData = async (date: string) => {
  try {
    const response = await axios.get(`/api/attendance?date=${date}`);
    attendanceData = response.data;
    renderEmployeeTable();
  } catch (error) {
    console.error('Error fetching attendance data:', error);
  }
};

// Render the employee attendance table
const renderEmployeeTable = () => {
  if (employeeListTable) {
    employeeListTable.innerHTML = '';
    attendanceData.forEach((employee) => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.position}</td>
        <td>${employee.status}</td>
        <td>${employee.workedHours}</td>
        <td>
          <button class="btn btn-success clock-in-btn" data-id="${employee.id}">Clock In</button>
          <button class="btn btn-danger clock-out-btn" data-id="${employee.id}" disabled>Clock Out</button>
          <button class="btn btn-warning reset-btn" data-id="${employee.id}">Reset</button>
        </td>
      `;

      employeeListTable.appendChild(row);
    });

    addEventListeners();
  }
};

// Add event listeners to buttons
const addEventListeners = () => {
  const clockInButtons = document.querySelectorAll('.clock-in-btn');
  const clockOutButtons = document.querySelectorAll('.clock-out-btn');
  const resetButtons = document.querySelectorAll('.reset-btn');

  clockInButtons.forEach((button) => {
    button.addEventListener('click', handleClockIn);
  });

  clockOutButtons.forEach((button) => {
    button.addEventListener('click', handleClockOut);
  });

  resetButtons.forEach((button) => {
    button.addEventListener('click', handleReset);
  });
};

// Handle Clock In
const handleClockIn = (event: Event) => {
  const button = event.target as HTMLButtonElement;
  const employeeId = parseInt(button.getAttribute('data-id')!);
  const employee = attendanceData.find((emp) => emp.id === employeeId);

  if (employee) {
    employee.clockInTime = new Date();
    employee.status = 'Present';
    button.disabled = true;
    document.querySelector(`.clock-out-btn[data-id="${employeeId}"]`)!.removeAttribute('disabled');
  }

  renderEmployeeTable();
};

// Handle Clock Out
const handleClockOut = (event: Event) => {
  const button = event.target as HTMLButtonElement;
  const employeeId = parseInt(button.getAttribute('data-id')!);
  const employee = attendanceData.find((emp) => emp.id === employeeId);

  if (employee && employee.clockInTime) {
    employee.clockOutTime = new Date();
    const workedHours = (employee.clockOutTime.getTime() - employee.clockInTime.getTime()) / (1000 * 60 * 60);
    employee.workedHours = parseFloat(workedHours.toFixed(2));
    button.disabled = true;
  }

  renderEmployeeTable();
};

// Handle Reset
const handleReset = (event: Event) => {
  const button = event.target as HTMLButtonElement;
  const employeeId = parseInt(button.getAttribute('data-id')!);
  const employee = attendanceData.find((emp) => emp.id === employeeId);

  if (employee) {
    employee.status = 'Absent';
    employee.workedHours = 0;
    employee.clockInTime = undefined;
    employee.clockOutTime = undefined;
  }

  renderEmployeeTable();
};

// Handle Save Attendance
const handleSaveAttendance = async () => {
  try {
    const date = attendanceDateInput.value;
    if (!date) {
      alert('Please select a date.');
      return;
    }

    await axios.post('/api/attendance', { date, attendanceData });
    alert('Attendance saved successfully!');
  } catch (error) {
    console.error('Error saving attendance:', error);
  }
};

// Handle Reset All Attendance
const handleResetAllAttendance = async () => {
  try {
    const date = attendanceDateInput.value;
    if (!date) {
      alert('Please select a date.');
      return;
    }

    await axios.delete(`/api/attendance?date=${date}`);
    alert('Attendance reset successfully!');
    attendanceData = [];
    renderEmployeeTable();
  } catch (error) {
    console.error('Error resetting attendance:', error);
  }
};

// Event Listeners
attendanceDateInput.addEventListener('change', () => {
  const date = attendanceDateInput.value;
  if (date) {
    fetchAttendanceData(date);
  }
});

saveButton?.addEventListener('click', handleSaveAttendance);
resetButton?.addEventListener('click', handleResetAllAttendance);
