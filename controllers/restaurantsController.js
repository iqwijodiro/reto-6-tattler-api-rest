const model = require('../models/Restaurant');

// create
const createRestaurant = async (req, res, next) => {
    try {
        const { name, address, cuisine, image, schedule, grades } = req.body
        const data = { name, address, cuisine, image, schedule, grades }
        const newData = await model.create(data)
        
        return res.status(200).json({
            success: true,
            message: 'Create success',
            data: newData
        });
    } catch (error) {
        next(error)
    }
}
// Get a single restaurant
    //by Id
const getRestaurantById = async (req, res, next) => {
    try {
        const restId = req.params.id;
        const singleRest = await model.findById(restId);
        return res.status(200).json({
            success: true,
            message: 'Restaurant finded',
            data: singleRest
        })
    } catch (error) {
        next(error)
    }
}
// by name
const getRestaurantByName = async (req, res, next) => {
    try {
        const search = req.query.search || '';
        const query = { 
            name: {
                $regex: search, 
                $options: "i"
            }
        } 
        const restaurant = await model.find(query);
        return res.status(200).json({
            success: true,
            message: 'Restaurant ' +  restaurant,
            data: restaurant
        })
    } catch (error) {
        next(error)
    }
}
// by cuisine
const getRestaurantByFood = async (req, res, next) => {
    try {
        const search = req.query.search || '';
        const query = { 
            cuisine: {
                $regex: search, 
                $options: "i"
            }
        } 
        const cuisineType = await model.find(query);
        return res.status(200).json({
            success: true,
            message: 'Cuisine ' +  cuisineType,
            data: cuisineType
        })
    } catch (error) {
        next(error)
    }
}
    // by name and food type
const getRestaurantByNameAndFood = async (req, res, next) => {
    const name = req.query.name;
    const cuisine = req.query.cuisine;

    const nameQuery = {
        name: {
            $regex: name, 
            $options: "i"
        }
    }
    const cuisineQuery = { 
        cuisine: {
            $regex: cuisine, 
            $options: "i"
        }
    } 
    const query = {$or: [nameQuery, cuisineQuery]}
    const queryResult = await model.find(query);
    return res.status(200).json({
        success: true,
        message: 'Cuisine ' +  queryResult,
        data: queryResult
    })
}
// Get all restaurants
const getRestaurants = async (req, res, next) => {
    try {
        const data = await model.find();
        return res.status(200).json({
            success: true,
            message: 'All restaurants retrieved',
            data: data
        })
    } catch (error) {
        next(error)
    }
}
// Get all restaurants by nearest distance
const getNearRestaurants = async (req, res, next) => {
    const options = {
        location: {
            $nearSphere: {
                $geometry: {
                    type: "Point",
                    coordinates: [latitude, altitude]
                },
                $maxDistance: 5 * 1609.34 // 1609.34 mts per mile =
            }
        }
    }
    try {
        // console.log(model.name);
        const data = await model.find(options);
        return res.status(200).json({
            success: true,
            message: 'All restaurants retrieved, ordered by distance',
            data: data
        })
    } catch (error) {
        next(error)
    }
}

// update restaurants
const updateRestaurant = async (req, res, next) => {
    try {
        // const { restId } = req.body;
        const restId = req.params.id
        const update = await model.findByIdAndUpdate(
            restId,
            req.body,
            { new: true }
        );
        return res.status(200).json({
            success: true,
            message: "update Successfully",
            data: update
        });
    } catch (error) {
        next(error)
    }
}

// Delete restaurants
const deleteRestaurant = async (req, res, next) => {
    try {
        // const { restId } = req.body;
        const restId = req.params.id
        const deleteRest = await model.findByIdAndDelete(restId)
        return res.status(200).json({
            success: true,
            message: 'Restaurant deleted',
            data: deleteRest
        })

    } catch (error) {
        next(error)
    }
}

module.exports = { 
                    createRestaurant,
                    getRestaurantById,
                    getRestaurantByName,
                    getRestaurantByFood,
                    getRestaurantByNameAndFood,
                    getRestaurants,
                    getNearRestaurants,
                    updateRestaurant,
                    deleteRestaurant 
                }