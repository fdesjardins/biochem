const Decimal = require('decimal.js')

/**
 * Calculate pH from H+ concentration
 */
exports.pH = ({ protonConcentrationM }) =>
  -1 * Decimal.log10(protonConcentrationM)

/**
 * Calculate pH for a buffer solution
 */
exports.pH_buff = ({ pK_a, conjugateBaseConcentrationM, acidConcentrationM }) =>
  new Decimal(pK_a).plus(
    Decimal.log10(
      new Decimal(conjugateBaseConcentrationM).dividedBy(acidConcentrationM)
    )
  )

/**
 * K_a (acid dissociation constant)
 * High K_a means the acid dissociates well
 */
exports.K_a = ({
  conjugateAcidConcentrationM,
  conjugateBaseConcentrationM,
  parentAcidConcentrationM
}) => {
  const numerator = new Decimal(conjugateAcidConcentrationM).times(
    conjugateBaseConcentrationM
  )
  const denominator = new Decimal(parentAcidConcentrationM)
  return numerator.dividedBy(denominator)
}
