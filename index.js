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

  // Función para calcular la probabilidad acumulada para la distribución normal
  static normalCumulative(z) {
    return 0.5 * (1 + ProbabilityDistribution.erf(z / Math.sqrt(2)));
  }
}
