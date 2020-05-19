const tarifaXLSX = require("../reader/LeitorXLSX");
const mongoose = require("mongoose");

require("../models/Tarifa.js");
const Tarifa = mongoose.model("Tarifa");

exports.CadTarifas = async (request, response) => {
  const { data } = tarifaXLSX;
  await Tarifa.collection.insertMany(data);
  return response.json(data);
};
