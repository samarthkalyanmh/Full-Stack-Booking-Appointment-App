const Sequelize = require('sequelize')

const sequelize = new Sequelize('full_stack_booking_appointment_app', 'root', 'samarth', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize