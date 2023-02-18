
const { parse } = require('csv-parse');
const fs = require('fs');
const path = require('path');

const planets = require('./planets.mongo')
const habPlanet = []


function loadPlanetsData(){
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', 'data', 'kepler_data.csv')).pipe(parse(
            {
                comment: "#",
                columns: true
            }
        ))
        .on('data', async (planet) => {
            if(isHabitable(planet)){
                //habPlanet.push(planet)
                savePlanet(planet)
            }
        })
        .on('error', (error) => {
            reject(error)
        })
        .on('end', async () => {
            const countPlanetsFound = (await getAllPlanets()).length
            console.log(`found ${countPlanetsFound} habitable planets`)
            resolve()            
        })
    })
}

function isHabitable(planet){
   return planet.koi_disposition === 'CONFIRMED' 
   && (planet.koi_insol > 0.36 && planet.koi_insol < 1.11)
   && (planet.koi_prad < 1.6) 
}

async function getAllPlanets(){
    //return habPlanet
    //return every documents in collection
    return await planets.find({}, {
        '_id' : 0, '__v': 0 
    })
}

async function savePlanet(planet) {
    try{
        await planets.updateOne({
            kepler_name: planet.kepler_name,
        },
        {
            kepler_name: planet.kepler_name,
        },
        {
            upsert: true,
        }
        )
    }
    catch(err){
        console.log(err)
    }
    
}

module.exports = {
    loadPlanetsData,
    getAllPlanets,
}


