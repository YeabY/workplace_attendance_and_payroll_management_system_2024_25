(document.getElementById('logoutButton') as HTMLLinkElement).addEventListener('click', () => {
    localStorage.removeItem('authToken');
  });

  function decodeJWT(token: string): any {
    try {
      // Split the token into its parts
      const parts = token.split('.');
      if (parts.length !== 3) {
        throw new Error('Invalid token format');
      }
  
      // Decode the payload (2nd part of the token)
      const payloadBase64 = parts[1]; // Payload is the second part
      const payloadDecoded = atob(payloadBase64); // Decode Base64
      return JSON.parse(payloadDecoded); // Parse JSON
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return null;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      // Redirect to login if no token is found
      window.location.href = 'index.html'; 
    } else {
      try {
        // Decode the token to extract the role
         const decodedToken = decodeJWT(token); 
        const userRole = decodedToken.role;

        // Check if the role is allowed to access this page
        if (userRole === 'employee') { 
          // Redirect unauthorized roles to an appropriate page
          alert('Access denied! Redirecting to the login page.');
          window.location.href = 'index.html'; 
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        window.location.href = 'index.html'; 
      }
    }
  });