const router = require('express').Router();

router.get('/', async (req, res, next) => {
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