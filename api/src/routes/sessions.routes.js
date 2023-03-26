const { Router } = require('express');

const SessionsController = require('../controllers/SessionsController');
const sessionsController = new SessionController();

const sessionsRoutes = Router();

sessionsRoutes.post('/', sessionsController.create);


module.exports = sessionsRoutes;