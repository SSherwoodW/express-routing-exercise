const express = require("express");
const { StatisticalMeasurer } = require("./class");
const ExpressError = require("./errors");

const app = express();

app.use(express.json());

app.get("/mode/:arr", (req, res, next) => {
    try {
        const arr = req.params.arr.split(",").map(Number);
        for (num of arr) {
            if (isNaN(num))
                throw new ExpressError(`${num} is not a number!`, 400);
        }
        const statisticalMeasurer = new StatisticalMeasurer(arr);
        const mode = statisticalMeasurer.findMode();
        const response = {
            operation: "mode",
            value: Number(mode[0]),
        };
        return res.json(response);
    } catch (err) {
        return next(err);
    }
});

app.get("/median/:arr", (req, res, next) => {
    try {
        const arr = req.params.arr.split(",").map(Number);
        for (num of arr) {
            if (isNaN(num))
                throw new ExpressError(`${num} is not a number!`, 400);
        }
        const statisticalMeasurer = new StatisticalMeasurer(arr);
        const median = statisticalMeasurer.findMedian();
        const response = {
            response: "median",
            value: median,
        };
        return res.json(response);
    } catch (err) {
        return next(err);
    }
});

app.get("/mean/:arr", (req, res, next) => {
    try {
        const arr = req.params.arr.split(",").map(Number);
        for (num of arr) {
            if (isNaN(num))
                throw new ExpressError(`${num} is not a number!`, 400);
        }
        const statisticalMeasurer = new StatisticalMeasurer(arr);
        const mean = statisticalMeasurer.findMean();
        const response = {
            response: "mean",
            value: mean,
        };
        return res.json(response);
    } catch (err) {
        return next(err);
    }
});

// 404 handler
app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Numbers are required, buddy!", 404);
    return next(notFoundError);
});

// generic error handler
app.use(function (err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;

    // set the status and alert the user
    return res.status(status).json({
        error: { message, status },
    });
});

app.listen(3000, function () {
    console.log("App on port 3000");
});
