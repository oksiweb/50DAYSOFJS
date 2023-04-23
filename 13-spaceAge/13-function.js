const spaceAge = seconds => {
  const earthYearInSeconds = 31557600
  const yearsInAllPlanets = {
    Mercury: 0,
    Venus: 0,
    Earth: 0,
    Mars: 0,
    Jupiter: 0,
    Saturn: 0,
    Uranus: 0,
    Neptune: 0
  }

  yearsInAllPlanets.Mercury = parseFloat((seconds / (0.2408467 * earthYearInSeconds)).toFixed(2))
  yearsInAllPlanets.Venus = parseFloat((seconds / (0.61519726 * earthYearInSeconds)).toFixed(2))
  yearsInAllPlanets.Earth = parseFloat((seconds / earthYearInSeconds).toFixed(2))
  yearsInAllPlanets.Mars = parseFloat((seconds / (1.8808158 * earthYearInSeconds)).toFixed(2))
  yearsInAllPlanets.Jupiter = parseFloat((seconds / (11.862615 * earthYearInSeconds)).toFixed(2))
  yearsInAllPlanets.Saturn = parseFloat((seconds / (29.447498 * earthYearInSeconds)).toFixed(2))
  yearsInAllPlanets.Uranus = parseFloat((seconds / (84.016846 * earthYearInSeconds)).toFixed(2))
  yearsInAllPlanets.Neptune = parseFloat((seconds / (164.79132 * earthYearInSeconds)).toFixed(2))

  return yearsInAllPlanets
}

module.exports = spaceAge
