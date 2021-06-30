const {Router} = require('express');
const authMiddleware = require('../middlewares/verifyToken');

const router = Router();

router.use(authMiddleware);

router.get('/', (request, response) => {
    response.send({ok: true, user: request.userId});
});

module.exports = app => app.use('/authenticate', router);