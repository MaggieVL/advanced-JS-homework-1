function jumpingJimmy(tower, jumpHeight) {
    let distance = 0;
    for (const floor of tower) {
        if (jumpHeight < floor) {
            return distance;
        }
        distance += floor;
    }
    return distance;
}
