
function login() {
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    
    // Get user list from sessionStorage
    const users = JSON.parse(sessionStorage.getItem('users') || '[]');
    
    // Validate user
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Login successful, set login status
        sessionStorage.setItem('currentUser', username);
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password!');
    }
}