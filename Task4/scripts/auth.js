document.addEventListener('DOMContentLoaded', () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const saveUsers = () => {
        localStorage.setItem('users', JSON.stringify(users));
    };

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const userExists = users.find(user => user.email === email);
            if (userExists) {
                alert('User already exists.');
            } else {
                users.push({ email, password });
                saveUsers();
                alert('Sign up successful!');
                window.location.href = 'login.html';
            }
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                localStorage.setItem('loggedInUser', email);
                alert('Login successful!');
                window.location.href = 'index.html';
            } else {
                alert('Invalid email or password.');
            }
        });
    }

    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
            alert('Logged out successfully.');
            window.location.href = 'login.html';
        });
    }

    const checkAuth = () => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (!loggedInUser && window.location.pathname !== '/login.html' && window.location.pathname !== '/signup.html') {
            window.location.href = 'login.html';
        }
    };

    checkAuth();
});
