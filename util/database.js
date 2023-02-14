const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'full_stack_booking_appointment_app', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize