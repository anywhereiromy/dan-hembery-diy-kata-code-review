const reachDestination = (distance, speed) => {
    let arrivalTime = distance / speed;
    let roundedArrivalTime = Math.ceil(arrivalTime / 0.5) * 0.5;
    return (`I should be there in ${roundedArrivalTime} hours.`);
};

module.exports = reachDestination;
