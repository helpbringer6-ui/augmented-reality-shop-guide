document.getElementById('start-btn').addEventListener('click', function() {
    const location = document.getElementById('location-input').value;
    if (location) {
        startARNavigation(location);
    } else {
        alert('Bitte geben Sie einen Standort ein.');
    }
});

function startARNavigation(location) {
    console.log('Starte AR-Navigation für:', location);
    // Hier könnte der Code zum Starten der Augmented-Reality-Navigation implementiert werden.
}

document.getElementById('location-input').setAttribute('placeholder', 'Standort eingeben');