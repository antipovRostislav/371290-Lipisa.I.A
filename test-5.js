function findMostFrequentCharacters(N) {
    const apiUrl = 'https://swapi.dev/api/people/';

    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                return [];
            }
            return response.json();
        })
        .then(data => {
            const characters = data.results.filter(character => character.films.length >= N);
            const characterNames = characters.map(character => character.name);
            return characterNames;
        })
        .catch(error => {
            console.error('Network error:', error);
            return [];
        });
}