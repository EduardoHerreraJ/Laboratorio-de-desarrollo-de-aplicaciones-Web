/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = function(knex) {
    return knex('bicicletas').del()
      .then(function () {
        return knex('bicicletas').insert([
          { id: '1', color: 'azul',modelo: 'Sanchez', lat: 19.284770993267343, lon: -99.13729069203746 },
          { id: '2', color: 'negra',modelo: 'Italika', lat: 19.284770943039578, lon: -99.13729060409386 }
        ]);
      });
  };