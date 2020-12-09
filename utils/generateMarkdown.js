// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  https://img.shields.io/npm/l/inquirer?style=flat-square

  ## Table of Contents

  * [Description] (#description)
  * [Installaton] (#installation)
  * [Usage] (#usage)
  * [License] (#license)
  * [Contributing] (#contributing)
  * [Tests] (#tests)
  * [Questions] (#questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.description}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  ${data.questions}

`;
}

module.exports = generateMarkdown;
