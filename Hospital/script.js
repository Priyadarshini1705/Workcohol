document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/services')
        .then(response => response.json())
        .then(data => {
            const servicesList = document.getElementById('services-list');
            data.forEach(service => {
                const li = document.createElement('li');
                li.textContent = service.name;
                servicesList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching services:', error));
});
