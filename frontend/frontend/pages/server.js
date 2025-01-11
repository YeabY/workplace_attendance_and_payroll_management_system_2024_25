const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Paths to the JSON files
const employeesFilePath = path.join(__dirname, 'employees.json');
const attendanceFilePath = path.join(__dirname, 'attendance.json');

// Helper function to read data from a JSON file
function readData(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

// Helper function to write data to a JSON file
function writeData(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// API to get all employees
app.get('/api/employees', (req, res) => {
  const employees = readData(employeesFilePath);
  res.json(employees);
});

// API to save employees
app.post('/api/employees', (req, res) => {
  const employees = req.body;
  writeData(employeesFilePath, employees);
  res.status(200).json({ message: 'Employees saved successfully!' });
});

// API to get attendance data
app.get('/api/attendance', (req, res) => {
  const attendance = readData(attendanceFilePath);
  res.json(attendance);
});

// API to save attendance data
app.post('/api/attendance', (req, res) => {
  const attendance = req.body;
  writeData(attendanceFilePath, attendance);
  res.status(200).json({ message: 'Attendance saved successfully!' });
});

// --- Payroll API ---
// API to update payroll data
app.post('/api/payroll', (req, res) => {
  const updatedPayroll = req.body; // Array of updated payroll data
  const employees = readData(employeesFilePath);

  // Update employee basicSalary in employees.json
  updatedPayroll.forEach((update) => {
    const employee = employees.find((emp) => emp.id === update.id);
    if (employee) {
      employee.basicSalary = update.basicSalary;
    }
  });

  writeData(employeesFilePath, employees);
  res.status(200).json({ message: 'Payroll updated successfully!' });
});

// API to fetch payroll data
app.get('/api/payroll', (req, res) => {
  const employees = readData(employeesFilePath);
  const payrollData = employees.map((emp) => ({
    id: emp.id,
    name: emp.name,
    position: emp.position,
    basicSalary: emp.basicSalary || 0,
    totalHours: emp.totalHours || 0,
    totalSalary: (emp.basicSalary || 0) * (emp.totalHours || 0),
  }));

  res.json(payrollData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
