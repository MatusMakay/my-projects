
/**
 * IMPORTS
 * ****************
 */
 const express = require('express');

 const { addMission, getMissions, deleteMission } = require('./missions.controller');
 
 /**
  * VARIABLES
  * ****************
  */
 const missionsRouter = express.Router();
 
 
 /**
  * ROUTES 
  * ****************
  */
 missionsRouter.post('/launches', addMission);
 missionsRouter.get('/launches', getMissions)
 missionsRouter.delete('/launches/:id', deleteMission)
 
 /**
  * EXPORT
  * ****************
  */
 module.exports = missionsRouter 