const Decimal = require('decimal.js')

exports.tempC_to_tempK = tempC => new Decimal(tempC).add(273.15)
