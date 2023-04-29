const fs = require("fs")
const path = require("path")

// Get a list of subdirectories under the root directory
const subdirectories = fs.readdirSync(__dirname).filter(file => fs.statSync(path.join(__dirname, file)).isDirectory())

// Generate a list of Jest projects based on the subdirectory paths
const projects = subdirectories.map(subdirectory => ({
  displayName: subdirectory,
  testMatch: [`<rootDir>/${subdirectory}/**/*.test.js`]
}))

// Export the Jest configuration
module.exports = {
  projects,
  setupFilesAfterEnv: ["@jest/globals"]
}
