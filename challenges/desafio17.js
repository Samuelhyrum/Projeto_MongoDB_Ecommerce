db.resumoProdutos.insertOne({
    franquia: "McDonalds",
    totalProdutos: db.produtos.find().count(),
});

db.resumoProdutos.findOne({}, {
    _id: 0,
  franquia: 1,
  totalProdutos: 1,
});