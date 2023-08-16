/**
 * Build frequency counter object from an array
 * @param { Array } arr any array
 */
function buildFrequencyCounter(arr) {
    return arr.reduce((acc, next) => {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}

/**
 * Find most frequent value in array
 * @param { Array } arr any array
 */
function findMode(arr) {
    const frequencyCount = buildFrequencyCounter(arr);
}

/**
 * Find median value in an array
 * @param { Array } arr any array
 */
function findMedian(arr) {}

/**
 * Find average in an array
 * @param { Array } arr any array
 */
function findMean(arr) {}
