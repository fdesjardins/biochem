/**
 * Examples
 */
const ex1 = () => {
  console.log(K_w({}).toExponential(1))
}
const ex2 = () => {
  // N2O4 ⇌ 2(NO2)
  const volumeL = 3
  const reactants = [
    {
      concentration: mol_to_M({ moles: 8.303e-2, volumeL: 3 })
    }
  ]
  const products = [
    {
      concentration: mol_to_M({ moles: 3.391e-2, volumeL: 3 }),
      coefficient: 2
    }
  ]
  console.log('ex2', K_c({ reactants, products }).toExponential(3))
}
const ex3 = () => {
  const protonConcentrationM = 5e-6
  console.log(pH({ protonConcentrationM }).toExponential(3))
}
const ex4 = () => {
  // const conjugateAcidConcentrationM
}
const ex5 = () => {
  // N2O4 ⇌ 2(NO2)
  const volumeL = 3
  const reactants = [
    {
      concentration: mol_to_M({ moles: 8.303e-2, volumeL: 3 })
    }
  ]
  const products = [
    {
      concentration: mol_to_M({ moles: 3.391e-2, volumeL: 3 }),
      coefficient: 2
    }
  ]
  console.log(K_p({ reactants, products }).toExponential(3))
}
const ex6 = () => {
  const pK_a = 4.76
  const conjugateBaseConcentrationM = 0.05
  const acidConcentrationM = 0.1
  console.log(
    pH_buff({
      pK_a,
      conjugateBaseConcentrationM,
      acidConcentrationM
    }).toExponential(1)
  )
}

if (!module.parent) {
  ex1()
  ex2()
  ex3()
  ex4()
  ex5()
  ex6()
}
