const pool = require('../services/db');

module.exports.createUser = (data, callback) => {
    const SQLSTATEMENT = `
    INSERT INTO users (user_code, username, email, password, role, points, rank)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const VALUES = [data.user_code, data.username, data.email, data.password, data.role, data.points, data.rank];
    pool.query(SQLSTATEMENT, VALUES, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, result);
    })
};

module.exports.createAdministrator = (data, callback) => {
    const SQLSTATEMENT = `
    INSERT INTO users (user_code, username, email, password, role, points, rank)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const VALUES = [data.user_code, data.username, data.email, data.password, data.role, data.points, data.rank];
    pool.query(SQLSTATEMENT, VALUES, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, result);
    })
};