const db = require('../db');

module.exports = {
    findById: (id) => {
        return new Promise((acepted, rejected) => {
            db.query('SELECT * FROM carros WHERE id = ?', [id], (error, results) => {
                if (error) {
                    rejected(error);
                    return;
                }

                if (results.length > 0) {
                    acepted(results[0]);
                } else {
                    acepted(false);
                }
            });
        });
    },

    findAll: () => {
        return new Promise((acepted, rejected) => {
            db.query('SELECT * FROM carros', (error, result) => {
                if (error) {
                    rejected(error);
                    return;
                }

                acepted(result);
            });
        });
    }
};