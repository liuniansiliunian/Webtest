// Check if user is logged in
function checkAuth() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (!currentUser) {
        alert('Please login first!');
        window.location.href = 'signin.html';
        return false;
    }
    return true;
}

// Logout
function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = 'signin.html';
} 