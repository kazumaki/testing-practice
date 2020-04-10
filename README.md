# Testing Practice

Project for trying the out the Jest test runner.

## Getting Started

Clone the repository into your local computer.

### Installing

First you'll have to install the newest version of [Node](https://nodejs.org/en/download/). Install all packages:

```
$ npm install
```

Then from the console in the project repository install Jest using Yarn:

```
yarn add --dev jest
```

or npm:

```
npm install --save-dev jest
```

Note: Jest documentation uses yarn commands, but npm will also work. You can compare yarn and npm commands in the [yarn docs, here](https://classic.yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison).

To install Babel required dependencies via yarn:

```
yarn add --dev babel-jest @babel/core @babel/preset-env
```

Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:

```
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### Run the tests

From the console in project repository:

```
yarn test
```

or npm:

```
npm run test
```

## Built With

* [JavaScript](https://www.javascript.com/) - Programming language used
* [VS Code](https://code.visualstudio.com/) - The code editor used 

## Authors

👤 **Vinicius Campos Carvalho**

<a href="https://github.com/kazumaki" rel="noopener noreferrer" target="_blank">

  ![Screenshot Image](src/images/vinicius-profile.png) 

</a>

- Github: [@kazumaki](https://github.com/kazumaki)
- Twitter: [@iKazumaki](https://twitter.com/iKazumaki)
- Linkedin: [Vinicius Campos Carvalho](https://www.linkedin.com/in/vcamposcarvalho/)
- Email: [vcampos.pitangui@gmail.com](vcampos.pitangui@gmail.com)

👤 **Jaak Kivinukk**

<a href="https://github.com/Jaakal" rel="noopener noreferrer" target="_blank">

  ![Screenshot Image](src/images/jaak-profile.png) 

</a>

- Github: [@Jaakal](https://github.com/Jaakal)
- Twitter: [@JKivinukk](https://twitter.com/JKivinukk)
- Linkedin: [Jaak Kivinukk](https://www.linkedin.com/in/jaak-kivinukk)
- Email: [jaak.kivinukk@gmail.com](jaak.kivinukk@gmail.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

