

/**
 * IMPORTS
 * ****************
 */
const express = require('express');

const { getPlanets } = require('./planets.controller'); 




/**
 * VARIABLES
 * ****************
 */
const planetsRouter = express.Router();

/**
 * ROUTES 
 * ****************
 */
planetsRouter.get('/planets', getPlanets);


/**
 * EXPORT
 * ****************
 */
module.exports = planetsRouter

