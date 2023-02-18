const express = require('express')

/**
 * Import controller 
 */
const {GET_home,  DELETE_user} = require('../controllers/controler.js')

router = express.Router()

//router.get('/home/:', GET_home)
router.get('/home', GET_home)



//2 moznosti poslat meno v body ako json alebo ako string v url
router.delete('/home', DELETE_user)


module.exports = {
    router
}