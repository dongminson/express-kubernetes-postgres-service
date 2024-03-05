const { Sequelize } = require('sequelize');
const Health = require('../models/health');

const sequelize = new Sequelize('health', null, null,{
  dialect: 'postgres',
  port: 5432,
  replication: {
    read: [
      {
        host: 'release-postgresql-read.default.svc.cluster.local', 
        username: process.env.DB_USER || 'pguser',
        password: process.env.DB_PASSWORD || 'pass123'
      },
    ],
    write: {
      host: 'release-postgresql-primary.default.svc.cluster.local', 
      username: process.env.DB_USER || 'pguser', 
      password: process.env.DB_PASSWORD || 'pass123'
    }
  },
  pool: {
    max: 20,
    idle: 30000
  },
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.health = Health(sequelize, Sequelize)

module.exports = db;
