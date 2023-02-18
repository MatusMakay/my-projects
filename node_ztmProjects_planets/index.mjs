import { parse } from "csv-parse";
import fs from 'fs';

//const csv = require('csv-parse')
//const fs = require('fs')
var habPlanet = []

function isHabitable(data){
   return data.koi_disposition === 'CONFIRMED' 
   && (data.koi_insol > 0.36 && data.koi_insol < 1.11)
   && (data.koi_prad < 1.6) 
}

fs.createReadStream('kepler_data.csv').pipe(parse(
    {
        comment: "#",
        columns: true
    }
))
.on('data', (data) => {
    if(isHabitable(data)){
        habPlanet.push(data)
    }
})
.on('error', (error) => {
    console.log(error)
})
.on('end', () => {
    var names_habPlanets = habPlanet.map((planet)=>{
        return planet.kepler_name
    })

    console.log(names_habPlanets)
})




