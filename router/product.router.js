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
        const productId = req.params.productId;
        const sql = "SELECT * FROM Products WHERE id=?";
        db.query(sql, [productId], (err, results) => {
            if (err) {
                console.log('Erreur lors du get du produit');
                res.status(500).json({ message : err })
            } else {
                res.status(200).json(results);
            }
        }
        )
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const { title, price, description } = req.body;
        
        console.log(req.body);
    
        const sql = "INSERT INTO Movies(imdbID, title, year, poster) VALUES(?, ?, ?, ?)";
    
        db.query(sql, [imdbID, title, year, poster], (err, results) => {
            if (err) {
                console.log('Erreur lors de l\'ajout d\'un film');
                res.status(500).json({ message : err })
            } else {
                res.status(200).json(results);
            }
        })
    })
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