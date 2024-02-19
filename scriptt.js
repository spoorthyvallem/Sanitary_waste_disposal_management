function reportActivity() {
    const entityName = document.getElementById('entityName').value;
    const compliance = document.getElementById('compliance').value;

    if (!entityName) {
        alert('Please enter an entity name.');
        return;
    }

    const activities = JSON.parse(localStorage.getItem('activities')) || [];
    activities.push({ entityName, compliance });
    localStorage.setItem('activities', JSON.stringify(activities));

    updateRatingsList();
}

function updateRatingsList() {
    const activities = JSON.parse(localStorage.getItem('activities')) || [];
    const ratingsList = document.getElementById('ratingsList');
    ratingsList.innerHTML = ''; // Clear current list

    activities.forEach(activity => {
        const listItem = document.createElement('li');
        listItem.textContent = `${activity.entityName}: ${activity.compliance}`;
        
        // Apply color coding based on compliance
        switch(activity.compliance) {
            case 'high':
                listItem.style.color = 'green';
                break;
            case 'medium':
                listItem.style.color = 'orange';
                break;
            case 'low':
                listItem.style.color = 'red';
                break;
        }

        ratingsList.appendChild(listItem);
    });
}

// Initialize the ratings list when the document is loaded
document.addEventListener('DOMContentLoaded', updateRatingsList);
