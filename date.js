exports.getDate = function () {
    // Display the details of the day
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }; //Monday, August 17

    return today.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
    // Display the details of the day
    const today = new Date();
    const options = {
        weekday: "long",
    }; //Monday, August 17

    return today.toLocaleDateString("en-US", options);
};