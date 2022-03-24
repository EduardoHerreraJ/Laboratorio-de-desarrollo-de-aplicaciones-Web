let express = require('express')
let router = express.Router()
let bicicletaControllerAPI = require('../../controllers/bicicletasControllerAPI')

router.get('/',bicicletaControllerAPI.bicicleta_list)
router.post('/create',bicicletaControllerAPI.bicicleta_create);


module.exports = router