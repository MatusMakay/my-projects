function checkParams_inMissionAdd(request){
    if(!request.launchDate || !request.mission || 
        !request.rocket || !request.target){
            return {
                error: 'Mission required launch property'
            }
    }

    const date = new Date(request.launchDate)
    if(isNaN(date)){
        return {
            error: 'Invalid launch date'
        }
    }

    return "none"
}

function checkParams_inMissionDelete(id){
    let err = "none"
    
    if(isNaN(id)){
        err = {
            error: 'Invalid param'
        }
    }

    return err
}

module.exports = {
    checkParams_inMissionAdd,
    checkParams_inMissionDelete,
}