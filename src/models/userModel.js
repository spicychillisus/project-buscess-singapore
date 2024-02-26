const pool = require('../services/db');

module.exports.createUser = (data) => {
    const SQLSTATEMENT = `
    INSERT INTO users (user_code, username, email, password, role, points, rank)
    VALUES (?, ?, ?, ?, ?, ?, ?);
    `;
    const values = [data.user_code, data.username, data.email, data.password, data.role, data.points, data.rank];
    pool.query(SQLSTATEMENT, values, (error, results) => {
        if (error) {
            throw error;
        } else {
            return results;
        }
    });
}

module.exports.editUser = (data) => {
    const SQLSTATEMENT = `
    UPDATE users
    SET username = ?, email = ?, password = ?
    WHERE user_code = ?;
    `;
    const values = [data.username, data.email, data.password, data.user_code];
    pool.query(SQLSTATEMENT, values, (error, results) => {
        if (error) {
            throw error;
        } else {
            return results;
        }
    });
}

module.exports.getUser = (data) => {
    const SQLSTATEMENT = `
    SELECT * FROM users
    WHERE user_id = ?;
    `;
    const values = [data.user_id];
    pool.query(SQLSTATEMENT, values, (error, results) => {
        if (error) {
            throw error;
        } else {
            return results;
        }
    });
}

