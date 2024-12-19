function register() {
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Check if username already exists
    const users = JSON.parse(sessionStorage.getItem('users') || '[]');
    if (users.some(user => user.username === username)) {
        alert('Username already exists!');
        return;
    }
    
    // Add new user
    users.push({ username, password });
    sessionStorage.setItem('users', JSON.stringify(users));
    
    alert('Registration successful!');
    // Clear input fields
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}
