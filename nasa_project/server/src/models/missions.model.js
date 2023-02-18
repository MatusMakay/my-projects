
const missions = require('./mission.mongo')
const planets = require('./planets.mongo')

const Mission = require('../classes/mission.class');

/**
 * handle all operation with the mission.model
 */
class MissionModel{

    constructor(){
        this.list_missions = [];
        this.last_addedMission;        
    }

    isUpcomming(date, curDate){
        return curDate < date ? true : false
    }

    async createMission(req){

        const date = new Date(req.body.launchDate)
        const curDate = new Date()
        //map by length of database colection
        const length = (await missions.find({})).length

        //sort list and return the document at the top of the list -> which is the mission with the highest flightNumber
        //const mission = await missions.findOne().sort('-flightNumber')
        //if (!mission) flightNumber=default_num
        return new Mission(date , req.body.mission, req.body.rocket, 
            req.body.target, length, 
            this.isUpcomming(date, curDate), false
        )
    }
    saveMission(mission){
        this.last_addedMission = mission
        return mission
    }

    //add to database working
    async add_mission(mission){

        const planet = await planets.findOne({
            kepler_name: mission.target
        })

        if(!planet){
            throw new Error('Not a valid kepler_name')
        }

        await missions.updateOne({
            flightNumber: mission.flightNumber,
        }, mission, {
            upsert: true
        }) 
    }

    async find_missionById(id){
        const mission = await missions.find({
            flightNumber: id
        })
        console.log(mission)
        return mission
        // return await missions.find({
        //     flightNumber: id,
        // })
    }

    async deleteMission(id){
        await missions.deleteOne({
            flightNumber: id,
        })
        //this.list_missions = this.list_missions.filter(mision => mision.flightNumber != id)
    }

    async sortedMissions(){
        const list = await missions.find({}, {
            '_id':0 , '__v':0
        })
        console.log(list)
        return list
    }

    get allMissions(){
        return this.list_missions
    }

}

module.exports = MissionModel