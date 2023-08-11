const mongoose = require('mongoose');

const restaurantsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        building: {
            type: String
        },
        coord: {
            type: [Number]
        },
        street: {
            type: String
        },
        zipcode: {
            type: String
        }
    },
    borough: {
        type: String
    },
    cuisine: {
        type: String
    },
    image: {
        type: String
    },
    schedule: {
        type: String
    },
    grades:[{
        date: {
            type: Date
        },
        score: {
            type: Number
        }
    }],
    comments: [{
        date: {
            type: Date
        },
        comment: {
            type: String
        }
    }]
})

restaurantsSchema.index({ 
    name: 'text',
    'address.city': 'text',
    cuisine: 'text'
});

const restaurantModel = mongoose.model('Restaurant', restaurantsSchema);

module.exports = restaurantModel