
const pool = require('../services/db');

module.exports.createUser = (data, callback) => {

    const userCode = Math.floor(1000 + Math.random() * 9000);
    const SQL = `
    
    INSERT INTO users (user_code, username, email, password, role, points, ranks)
    VALUES (${userCode}, ?, ?, ?, 'user', 0, 'newbie')
    `;

    const values = [data.username, data.email, data.password, data.role, data.points, data.ranks];
    pool.query(SQL, values, callback);
}

