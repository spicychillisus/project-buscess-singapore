
const { error } = require('console');
const pool = require('../services/db');

module.exports.createUser = (data, callback) => {
    const SQL = `
    INSERT INTO users (username, email, password, role, points, ranks)
    VALUES (?, ?, ?, 'user', 0, 'newbie')
    `;

    const values = [data.username, data.email, data.password, data.role, data.points, data.ranks];
    pool.query(SQL, values, callback);
}

module.exports.editUsername = (data, callback) => {
    const SQL = `
    UPDATE users SET username = ? WHERE user_id = ?
    `;

    const values = [data.username, data.user_id];
    pool.query(SQL, values, callback);
}

module.exports.getUser = (data, callback) => {
    const SQL = `
    SELECT * FROM users WHERE user_id = ?
    `;

    const values = [data.user_id]
    pool.query(SQL, values, callback)
} 
