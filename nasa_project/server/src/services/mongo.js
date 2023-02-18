variables = require('../../env/variables.js')


const MONGO_URL = variables.MONGO_URL

const mongoose = require('mongoose');

mongoose.connection.once('open', () => {
    console.log('MongoDb connection opened')
})
mongoose.connection.on('error', err => console.log(err))


async function mongoConnect(){
    await mongoose.connect(MONGO_URL)
}

async function mongoDisconnect(){
    await mongoose.disconnect();
}


module.exports = {
    mongoConnect,
    mongoDisconnect,
}