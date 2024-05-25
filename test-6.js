function countRepetitions(arr) {
    const counts = {};

    arr.forEach(item => {
        if (counts[item] !== undefined) {
            counts[item]++;
        } else {
            counts[item] = 1;
        }
    });

    const result = Object.entries(counts).map(([value, count]) => [value, count]);

    return result;
}