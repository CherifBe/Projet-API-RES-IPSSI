const router = require('express').Router();
const db = require('../database/db');

router.get('/', async (req, res, next) => {
    try {
        const sql = "SELECT * FROM Products";
        db.query(sql, (err, results) => {
            if (err) {
                console.log('Erreur lors de l\'affichage des produits');
                res.status(500).json({ message : err })
            } else {
                res.status(200).json(results);
            }
        });
    } catch (error) {
        next(error);
    }
});

router.get('/:productId', async (req, res, next) => {
    try {
        // CODE ICI
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        // CODE ICI
    } catch (error) {
        next(error);
    }
});

router.put(
    '/:productId',
    async (req, res, next) => {
        try {
            // CODE ICI
        } catch (error) {
            next(error);
        }
    }
);

router.delete(
    '/:productId',
    async (req, res, next) => {
        try {
            // CODE ICI
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;