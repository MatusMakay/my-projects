class Mission{
    constructor(launchDate, mission , rocket, target, flightNumber, upcoming, success){
        this.launchDate = launchDate;
        this.mission = mission;
        this.rocket = rocket;
        this.target = target;
        this.flightNumber = flightNumber;
        this.upcoming = upcoming;
        this.success = success;
        this.customer = ['ZTM', 'NASA']
    }
    
}

module.exports = Mission;