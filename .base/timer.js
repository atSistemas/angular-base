const perfy = require('perfy');

const timers = {};

module.exports = function (timerName) {

    perfy.start(timerName);

    return (function (timerName) {
        timers[timerName] = function () {
            timers[timerName] = perfy.end(timerName);
            return timers[timerName];
        }
        return timers[timerName];
    })(timerName);



}