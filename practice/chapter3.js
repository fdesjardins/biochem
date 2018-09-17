const Decimal = require('decimal.js')

/**
 * Change in entropy of the environment/surroundings
 * @param {number} deltaH_system Enthalpy
 * @param {number} tempK
 */
const deltaS_surround = ({ deltaH_system, tempK }) =>
  -1 * new Decimal(deltaH_system).dividedBy(tempK)

/**
 * Change in free energy in terms of temp and change in universe entropy
 */
const deltaG = ({ tempK, deltaS_universe }) =>
  -1 * new Decimal(tempK).times(deltaS_universe)

/**
 * Change in free energy in terms of enthalpy, temp, and entropy
 */
const deltaG_enthalpy = ({ deltaH, tempK, deltaS }) =>
  new Decimal(deltaH).minus(new Decimal(tempK).times(deltaS))

const deltaGStandardPrime = ({}) => {}

const ex4 = () => {
  const deltaH_system = 1
  const tempK = 1000
  console.log(deltaS_surround({ deltaH_system, tempK }))
}

const ex5 = () => {
  const tempK = 263
  const deltaH = 5630 // J/mol
  const deltaS = 20.6 // J/K*mol
  console.log(deltaG_enthalpy({ tempK, deltaH, deltaS }).toExponential(1))
}

if (!module.parent) {
  ex4()
  ex5()
}
