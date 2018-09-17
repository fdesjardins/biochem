const Decimal = require('decimal.js')

/**
 * Calculate an equilibrium constant
 * Same as K_eq, K_p, K_sp, K_a, K_b, just different types of rxns
 */
const K_c = ({ reactants, products }) => {
  const numerator = products
    .map(p => new Decimal(p.concentration).toPower(p.coefficient || 1))
    .reduce((a, b) => a.times(b), new Decimal(1))

  const denominator = reactants
    .map(p => new Decimal(p.concentration).toPower(p.coefficient || 1))
    .reduce((a, b) => a.times(b), new Decimal(1))

  return numerator.dividedBy(denominator)
}
exports.K_c = K_c

/**
 * K_p (using K_c relationship)
 */
const R = new Decimal(0.0821) // Gas constant (liter*atm/mol*K)
exports.K_p = ({ reactants, products, tempK = tempC_to_tempK(25) }) => {
  const productsCoefficientsSum = products
    .map(p => p.coefficient || 1)
    .reduce((a, b) => new Decimal(a).add(b), 0)
  const reactantsCoefficientsSum = products
    .map(p => p.coefficient || 1)
    .reduce((a, b) => new Decimal(a).add(b), 0)
  const deltaN = productsCoefficientsSum.minus(reactantsCoefficientsSum)

  const k_c = K_c({ reactants, products })
  const rightTerm = R.times(tempK.toPower(deltaN))

  return new Decimal(k_c).times(rightTerm)
}
