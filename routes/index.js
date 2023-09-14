const express = require('express');
const { createRestaurant,
        getRestaurantById,
        getRestaurantByName,
        getRestaurantByFood,
        getRestaurantByNameAndFood, 
        getRestaurants,
        getNearRestaurants,
        updateRestaurant,
        deleteRestaurant
    } = require('../controllers/restaurantsController');

const router = express.Router();

router.post('/restaurants', createRestaurant)
router.get('/restaurants/:id', getRestaurantById)
router.get('/restaurants/name', getRestaurantByName)
router.get('/restaurants/cuisine', getRestaurantByFood)
router.get('/restaurants/', getRestaurantByNameAndFood)
router.get('/restaurants', getRestaurants)
router.get('/restaurants/ordered', getNearRestaurants)
router.patch('/restaurants/:id/edit', updateRestaurant)
router.delete('/restaurants/:id', deleteRestaurant)

module.exports = router;