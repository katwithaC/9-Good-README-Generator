// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  ## Table of Contents

  * [Description](#description)
  * [Installaton](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

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
  ${data.tests}

  ## Questions
 Github: (https://github.com/${data.username})
 Email: ${data.email}

`;
}

module.exports = generateMarkdown;
