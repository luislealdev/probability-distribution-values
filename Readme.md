# Probability Distributions

A JavaScript/TypeScript library for calculating cumulative probabilities of statistical distributions, including the normal distribution and chi-squared distribution.

## Installation

You can install this library via npm:

```bash
npm install probability-distributions
```

## Usage
### Normal Distribution
The library provides a normalCumulative function to calculate the cumulative probability for the standard normal distribution. You can use it as follows:

~~~
const ProbabilityDistribution = require('probability-distributions');

const zValue = 1.96; // Z-score for the 0.975 percentile (95% confidence interval)
const normalProbability = ProbabilityDistribution.normalCumulative(zValue);

console.log(`Cumulative probability for Z=${zValue} is ${normalProbability.toFixed(4)}`);
~~~

## License
This library is licensed under the MIT License.

### Contributions
Contributions are welcome! If you'd like to add new features or improve existing ones, feel free to open a pull request.

### Issues
If you encounter any issues or have questions about this library, please open an issue on the GitHub repository.