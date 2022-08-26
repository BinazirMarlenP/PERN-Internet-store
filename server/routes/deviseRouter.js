const Router = require('express')
const deviseController = require('../controllers/deviseController')
const router = new Router()

router.post('/', deviseController.create)
router.get('/', deviseController.getAll)
router.get('/:id', deviseController.getOne)



module.exports = router