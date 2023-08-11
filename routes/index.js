const express = require('express');
const { createRestaurant,
        getRestaurantById,
        getRestaurantByName,
        getRestaurantByFood,
        getRestaurantByNameAndFood, 
        getRestaurants,
        updateRestaurant,
        deleteRestaurant
    } = require('../controllers/restaurantsController');

const router = express.Router();

router.post('/', createRestaurant)
router.get('/restaurant/:id', getRestaurantById)
router.get('/restaurants/name', getRestaurantByName)
router.get('/restaurants/cuisine', getRestaurantByFood)
router.get('/restaurants/filterBy', getRestaurantByNameAndFood)
router.get('/restaurants', getRestaurants)
router.patch('/restaurant/update/:id', updateRestaurant)
router.delete('/restaurant/delete/:id', deleteRestaurant)

module.exports = router;