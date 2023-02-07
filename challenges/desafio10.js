db.produtos.find({
    "valoresNutricionais.3.percentual": {
      $lte: 40,
      $gte: 30,
    },
  
  }, {
    nome: 1,
    _id: 0,
  });