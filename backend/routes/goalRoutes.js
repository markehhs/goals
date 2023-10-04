const express = require('express')
const router = express.Router()
const {
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal,
    getGoal
} = require('../controllers/goalController')
     
router.route('/').get(getGoals).post(setGoal)
router.route('/:id').get(getGoal).delete(deleteGoal).put(updateGoal)

module.exports = router