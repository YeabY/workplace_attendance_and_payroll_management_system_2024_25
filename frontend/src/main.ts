// main.ts

// Select the login form and input fields
const loginForm = document.getElementById('loginForm') as HTMLFormElement;
const usernameInput = document.getElementById('username') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;
const errorMessage = document.getElementById('errorMessage') as HTMLDivElement;

  
// Event listener for form submission
loginForm.addEventListener('submit', async (event) => {
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
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            // Handle errors
            const errorData = await response.json();
            alert(errorData.message || 'Invalid credentials. Please try again.');
            return;
        }

        // Parse response data
        const data = await response.json();

        if(data.status === 'success'){
            localStorage.setItem('authToken', data.data.token);
            localStorage.setItem('username', data.data.username);


            if (data.data.role === 'admin') {
                window.location.href = 'dashboard.html'; // Admin dashboard
            } else if (data.data.role === 'employee') {
                window.location.href = 'dashboard-emp.html'; // Employee dashboard
            }
        }

        else {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Wrong Username or Password';            
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('An error occurred. Please try again later.');
    }
});
