const express = require('express');
const app = express();

const db = require('./src/config/database');
const healthCheckRouter = require('./src/routes/health');

app.use(express.json());

db.sequelize.authenticate().then(() => {
  console.log('Connected to the database');
}).catch(err => {
  console.log('Error: ' + err);
})

app.use('/health', healthCheckRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
});