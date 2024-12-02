//Code your solution in this file!

  function distanceFromHqInBlocks(pickUpLocation) {
    const hqBlocks = 42;
    return Math.abs(hqBlocks - pickUpLocation); // Returns absolute value of the blocks
}

function distanceFromHqInFeet(pickUpLocation) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(pickUpLocation) * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(destination - start) * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);

    if (feetTravelled <= 400) {
        return 0; // Free ride for distances <= 400 feet
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        const chargeableDistance = feetTravelled - 400;
        return chargeableDistance * 0.02; // $0.02 per foot
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25; // Flat rate for distances between 2001 and 2500 feet
    } else {
        return 'cannot travel that far'; // Exceeds 2500 feet
    }
}

// calling the functions
console.log("Distance in blocks is: " + distanceFromHqInBlocks(34) + " blocks");
console.log("Distance in feet is: " + distanceFromHqInFeet(34) + " feet");
console.log("Distance Travelled in feet is: " + distanceTravelledInFeet(34, 42) + " feet");
console.log("Fare price is: " + calculatesFarePrice(34, 42));


