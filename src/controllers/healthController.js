const axios = require('axios');

const db = require('../config/database');

exports.check = async (req, res) => {
  const { url } = req.query;
  const timestamp = new Date();
  try {
    const response = await axios.get(url);
    const status = response.status;
    const health = await db.health.create({ url, status, timestamp });
    res.status(201).json(health);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
  
exports.list = async (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    const where = {};
    if (req.query.url) {
      where.url = req.query.url;
    }
    if (req.query.timestamp) {
      where.timestamp = new Date(req.query.timestamp);
    }
    try {
      const { rows, count } = await db.health.findAndCountAll({
        where,
        limit,
        offset,
        order: [['timestamp', 'DESC']],
      });
      res.json({ rows, count });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
};