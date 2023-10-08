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

  //Función de error inversa (invErf)
  static invErf(x) {
    if (x < -1 || x > 1) {
      throw new Error("El argumento de invErf debe estar en el rango [-1, 1].");
    }

    if (x === -1) {
      return -Infinity;
    }

    if (x === 1) {
      return Infinity;
    }

    const tolerance = 1e-12; // Tolerancia para la convergencia
    const maxIterations = 100; // Número máximo de iteraciones

    // Función que calcula erf(x) - y
    const f = (t) => ProbabilityDistribution.erf(t) - x;

    // Derivada de la función f
    const df = (t) => (2 / Math.sqrt(Math.PI)) * Math.exp(-t * t);

    let t0 = 0; // Valor inicial
    let t1 = 0;

    for (let i = 0; i < maxIterations; i++) {
      const ft0 = f(t0);
      const dft0 = df(t0);

      if (Math.abs(ft0) < tolerance) {
        return t0;
      }

      t1 = t0 - ft0 / dft0;
      if (Math.abs(t1 - t0) < tolerance) {
        return t1;
      }

      t0 = t1;
    }

    throw new Error("La función invErf no converge para el valor dado.");
  }

  // Función para calcular la probabilidad acumulada para la distribución normal
  static normalCumulative(z) {
    return 0.5 * (1 + ProbabilityDistribution.erf(z / Math.sqrt(2)));
  }

  // Función inversa de la probabilidad acumulada para la distribución normal (invNormalCumulative)
  static invNormalCumulative(p) {
    if (p < 0 || p > 1) {
      throw new Error(
        "El argumento de invNormalCumulative debe estar en el rango [0, 1]."
      );
    }

    // Utiliza invErf para calcular la inversa de la probabilidad acumulada
    return Math.sqrt(2) * ProbabilityDistribution.invErf(2 * p - 1);
  }
}

