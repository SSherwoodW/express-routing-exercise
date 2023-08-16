const { StatisticalMeasurer } = require("../class");

describe("StatisticalMeasurer", () => {
    it("should correctly calculate the mode of an array", () => {
        const arr = [1, 2, 3, 4, 5, 6, 2, 3];
        const statisticalMeasurer = new StatisticalMeasurer(arr);
        const mode = statisticalMeasurer.findMode();
        expect(mode).toEqual(["2", "3"]);
    });

    it("should correctly calculate the median of an array with odd length", () => {
        const arr = [1, 2, 3, 4, 5];
        const statisticalMeasurer = new StatisticalMeasurer(arr);
        const median = statisticalMeasurer.findMedian();
        expect(median).toEqual(3);
    });

    it("should correctly calculate the median of an array with even length", () => {
        const arr = [1, 2, 3, 4];
        const statisticalMeasurer = new StatisticalMeasurer(arr);
        const median = statisticalMeasurer.findMedian();
        expect(median).toEqual(2.5);
    });

    it("should correctly calculate the mean of an array", () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const statisticalMeasurer = new StatisticalMeasurer(arr);
        const mean = statisticalMeasurer.findMean();
        expect(mean).toEqual(3.5);
    });
});
