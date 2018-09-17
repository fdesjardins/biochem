const Decimal = require('decimal.js')

/**
 * K_c of H2O at 25C
 * @param {[type]} [tempC=25 }] [description]
 */
exports.K_w = ({ tempC = 25 }) => new Decimal(1.0e-7).times(1.0e-7)
