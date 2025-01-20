// Simple auth service for testing
export default {
    isAuthenticated: false,
    token: null,

    login(username, password) {
        if (username === 'admin' && password === 'admin123#') {
            this.token = 'fake-jwt-token-for-testing-purposes';
            this.isAuthenticated = true;
            // Store in localStorage to persist across page refreshes
            localStorage.setItem('token', this.token);
            localStorage.setItem('user', username);
            return true;
        }
        // Add more test cases if needed
        if (username === '0000' && password === 'test123#') {
            this.token = 'another-fake-token-for-testing';
            this.isAuthenticated = true;
            localStorage.setItem('token', this.token);
            localStorage.setItem('user', username);
            return true;
        }
        return false;
    },

    logout() {
        this.token = null;
        this.isAuthenticated = false;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    checkAuth() {
        this.token = localStorage.getItem('token');
        this.isAuthenticated = !!this.token;
        return this.isAuthenticated;
    },

    getUser() {
        return localStorage.getItem('user');
    }
}