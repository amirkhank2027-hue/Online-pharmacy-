// Google Maps API Integration
function initMap() {
    const location = { lat: 37.7749, lng: -122.4194 }; // Replace with your actual coordinates (e.g., from Google Maps)
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Appointment Form Submission
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Appointment booked! We will contact you soon.');
    // In a real app, send data to a backend API (e.g., via fetch() to your server)
});

// Simple Mock Account API (for login/register - replace with real backend like Firebase)
let users = []; // Mock database

function showLogin() {
    const modal = new bootstrap.Modal(document.getElementById('loginModal'));
    modal.show();
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert('Login successful!');
    } else {
        alert('Invalid credentials.');
    }
});

function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        users.push({ username, password });
        alert('Registration successful! You can now log in.');
    } else {
        alert('Please fill in all fields.');
    }
}