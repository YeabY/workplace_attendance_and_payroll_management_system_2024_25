"use strict";
// main.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Select the login form and input fields
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
// Event listener for form submission
loginForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault(); // Prevent default form submission
    // Retrieve user input
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    // Validate inputs
    if (!username || !password) {
        alert('Please fill in both username and password.');
        return;
    }
    // Send login request to the backend
    try {
        const response = yield fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (!response.ok) {
            // Handle errors
            const errorData = yield response.json();
            alert(errorData.message || 'Invalid credentials. Please try again.');
            return;
        }
        // Parse response data
        const data = yield response.json();
        if (data.status === 'success') {
            localStorage.setItem('authToken', data.data.token);
            localStorage.setItem('username', data.data.username);
            if (data.data.role === 'admin') {
                window.location.href = 'dashboard.html'; // Admin dashboard
            }
            else if (data.data.role === 'employee') {
                window.location.href = 'dashboard-emp.html'; // Employee dashboard
            }
        }
        else {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Wrong Username or Password';
        }
    }
    catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again later.');
    }
}));
//# sourceMappingURL=main.js.map