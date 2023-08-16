/**
 * A class for statistical measurements
 */
class StatisticalMeasurer {
    constructor(arr) {
        this.counter = this.buildFrequencyCounter(arr);
        this.sorter = this.sortArray(arr);
    }

    buildFrequencyCounter(arr) {
        return arr.reduce((acc, next) => {
            acc[next] = (acc[next] || 0) + 1;
            return acc;
        }, {});
    }

    sortArray(arr) {
        return arr.sort((a, b) => a - b);
    }

    findMode() {
        let modes = [];
        let maxFrequency = 0;

        for (let key in this.counter) {
            if (this.counter[key] > maxFrequency) {
                modes.length = 0;
                modes.push(key);
                maxFrequency = this.counter[key];
            } else if (this.counter[key] === maxFrequency) {
                modes.push(key);
            }
        }
        return modes;
    }

    findMedian() {
        const middleIndex = Math.floor(this.sorter.length / 2);

        if (this.sorter.length % 2 === 0) {
            // even-numbered array
            const middleValue1 = this.sorter[middleIndex] - 1;
            const middleValue2 = this.sorter[middleIndex];
            return (middleValue1 + middleValue2) / 2;
        } else {
            // odd-numbered array
            return this.sorter[middleIndex];
        }
    }

    findMean() {
        const sum = this.sorter.reduce((acc, next) => {
            return acc + next;
        }, 0);
        const mean = sum / this.sorter.length;
        return mean;
    }
}

module.exports = { StatisticalMeasurer };
