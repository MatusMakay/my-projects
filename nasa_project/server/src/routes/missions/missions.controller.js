/**
 * IMPORTS
 * ********************************
 */
const MissionModel = require('../../models/missions.model.js')
const { checkParams_inMissionAdd, checkParams_inMissionDelete} = require('../../classes/mission.validation')

/**
 * CONST
 * ********************************
 */
const missionModel = new MissionModel()


/**
 * FUNCTIONS
 * ********************************
 */
async function httpAddMission(req, res){

    const err = checkParams_inMissionAdd(req.body)
    if(err.toString() == "none"){
        //const mission = missionModel.createMission(req) /*missionModel.saveMission(missionModel.createMission(req))*/
        missionModel.saveMission(await missionModel.createMission(req))
        missionModel.add_mission(missionModel.last_addedMission)
        res.status(201).json(missionModel.last_addedMission)
    }
    else{
        return res.status(400).json(err)
    }
}

async function httpGetMissions(req, res){
    await res.status(200).json(await missionModel.sortedMissions())
}

async function httpDeleteMission(req, res){
    const flightNumber = Number(req.params.id)

    const err = checkParams_inMissionDelete(flightNumber)

    if(err == "none"){
        const deletedMission = await missionModel.find_missionById(flightNumber)
        if(!deletedMission){
            return res.status(400).json({error: 'mission not found'})
        }
        missionModel.deleteMission(flightNumber)
        res.status(200).json(deletedMission)
    }
    else{
        res.status(400).json(err)
    }
}


/**
 * EXPORT
 * ********************************
 */
module.exports = {
    addMission: httpAddMission, 
    getMissions: httpGetMissions,
    deleteMission: httpDeleteMission,

}

