const Decimal = require('decimal.js')

/**
 * Convert moles + volume to molarity (M)
 */
exports.mol_to_M = ({ moles, volumeL }) => new Decimal(moles).dividedBy(volumeL)
