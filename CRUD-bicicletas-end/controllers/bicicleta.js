const Bicicleta = require('../models/bicicleta')

exports.bicicleta_list = function(req, res){
    Bicicleta.allBicis()
        .then((data)=>{
            let bicis = data;
            res.render('bicicletas/index', {bicis: bicis});
        })
    
}

exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create')
}

exports.bicicleta_create_post = function(req, res){
    let bici = {
        id: req.body.id,
        color: req.body.color,
        modelo: req.body.modelo,
        lat: req.body.lat,
        lon: req.body.lon
      };
    Bicicleta.create(bici)
      .then((id)=>{
        res.redirect('/bicicletas')
      })
    
} 

exports.delete = function(req, res){
  let id = req.params.id;
  Bicicleta.find(id).then((bici) => {
    if (bici == null) {
      res.status(404).send('Not found');
      return;
    }
    Bicicleta.delete(bici.id)
      .then((id) => {
        res.redirect('/bicicletas')
      });
  });
}

exports.bicicleta_update_get = function(req, res){
    let id = req.params.id;
    Bicicleta.find(id).then((bici) =>{
        if(bici == null){
            res.status(404).send('Not found');
            return;
        }
        res.render('bicicletas/update', {bici: bici})
    })
    
}

exports.bicicleta_update_post = function(req, res){
    let id = req.params.id;
    Bicicleta.find(id).then((bici) => {
        if (bici == null) {
            res.status(404).send('Not found');
            return;
        }
        let biciUpdate = {
            id: req.body.id,
            color: req.body.color,
            modelo: req.body.modelo,
            lat: req.body.lat,
            lon: req.body.lon
        };
    Bicicleta.update(bici.id, biciUpdate)
        .then((id) => {
            res.redirect('/bicicletas')
        });
    });
}