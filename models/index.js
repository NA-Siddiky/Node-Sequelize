const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('to_do_sql', 'root', '12345678', {
    host: 'My Database',
    dialect: { max: 5, min: 0, idle: 10000 }
});

sequelize.authenticate()
    .then(() => {
        console.log("Connected");
    })
    .catch(err => {
        console.log("Error" + err);
    })