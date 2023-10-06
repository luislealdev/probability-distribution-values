class ProbabilityDistribution {
  // Función de error (erf)
  static erf(x) {
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;

    const t = 1.0 / (1.0 + p * x);
    const y = ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t;

    return sign * (1 - y * Math.exp(-x * x));
  }

  // Función inversa de error (erfInv)
  // static erfInv(x) {
  //   const a1 = 0.254829592;
  //   const a2 = -0.284496736;
  //   const a3 = 1.421413741;
  //   const a4 = -1.453152027;
  //   const a5 = 1.061405429;
  //   const p = 0.3275911;

  //   const t = Math.sqrt(-2 * Math.log(1 - x));

  //   return ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) / (1 + p * t);
  // }

  // Función para calcular la probabilidad acumulada para la distribución normal
  static normalCumulative(z) {
    return 0.5 * (1 + ProbabilityDistribution.erf(z / Math.sqrt(2)));
  }

  // Función para calcular la probabilidad acumulada para la distribución chi-cuadrado
  // static chiSquaredCumulative(x, degreesOfFreedom) {
  //   if (x < 0 || degreesOfFreedom <= 0) {
  //     throw new Error(
  //       "Los valores deben ser no negativos y los grados de libertad deben ser mayores que cero."
  //     );
  //   }

  //   const gamma = (z) => {
  //     if (z === 1) return 1;
  //     if (z === 0.5) return Math.sqrt(Math.PI);
  //     return (z - 1) * gamma(z - 1);
  //   };

  //   return (
  //     1 -
  //     (gamma(degreesOfFreedom / 2) /
  //       (Math.pow(2, degreesOfFreedom / 2) * gamma(degreesOfFreedom / 2))) *
  //       Math.exp(-x / 2)
  //   );
  // }
}

// Ejemplo de uso
const zValue = 3.03; // Valor de Z para el percentil 0.975 (95% de confianza)
// const chiSquaredValue = .05; // Valor de X^2
// const degreesOfFreedom = 15; // Grados de libertad para X^2

const normalProbability = ProbabilityDistribution.normalCumulative(zValue);
// const chiSquaredProbability = ProbabilityDistribution.chiSquaredCumulative(
//   chiSquaredValue,
//   degreesOfFreedom
// );

console.log(
  `Probabilidad acumulada para Z=${zValue} (Distribución Normal): ${normalProbability.toFixed(
    4
  )}`
);
// console.log(
//   `Probabilidad acumulada para X^2=${chiSquaredValue} (Grados de libertad=${degreesOfFreedom}): ${chiSquaredProbability.toFixed(
//     4
//   )}`
// );
