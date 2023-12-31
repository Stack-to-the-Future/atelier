<a id='readme-top'> </a>

<br />
<div align="center">
  <a href="https://github.com/Stack-to-the-Future/atelier">
    <!-- <img src="" alt="finance tracker logo" width="50" height="50" /> -->
  </a>
  <h3 align="center">
    Atelier
  </h3>
  <p align="center">
    <br />
    <a href="https://github.com/Stack-to-the-Future/atelier"><strong>Explore the docs »</strong></a>
    <br />
    <!-- <a href="">View Live</a> -->
    <a href="https://github.com/Stack-to-the-Future/atelier/issues">Report Bug</a>
    |
    <a href="https://github.com/Stack-to-the-Future/atelier/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li>
          <a href="#built-with">Built With</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li>
          <a href="#prerequisites">Prerequisites</a>
        </li>
        <li>
          <a href="#installation">Installation</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
    </li>
    <li>
      <a href="#roadmap">Roadmap</a>
    </li>
    <li>
      <a href="#optimizations">Optimizations</a>
    </li>
    <li>
      <a href="#lessons-learned">Lessons Learned</a>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
    </li>
    <li>
      <a href="#license">License</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>
</details>

## About

<div align="center">
  <img src="./assets/atelier.gif" alt="project landing page image" width="700px" />
</div>

<br />
<p>
  Atelier is a retail application that enables customers to search, browse, add to cart, and checkout.
</p>

### Built With
![Lint](https://github.com/Stack-to-the-Future/atelier/actions/workflows/run-linter.yml/badge.svg)
![Test](https://github.com/Stack-to-the-Future/atelier/actions/workflows/run-tests.yml/badge.svg?branch=redconOne-patch-1)
<br />
![node.js](https://img.shields.io/badge/node-%23000000.svg?style=for-the-badge&logo=node.js)
![React](https://img.shields.io/badge/React-%23000000.svg?style=for-the-badge&logo=react&logoColor)
![Webpack](https://img.shields.io/badge/webpack-%23000000.svg?style=for-the-badge&logo=webpack)
![Babel](https://img.shields.io/badge/babel-%23000000.svg?style=for-the-badge&logo=babel)
![axios](https://img.shields.io/badge/axios-%23000000.svg?style=for-the-badge&logo=axios)
![jest](https://img.shields.io/badge/jest-%23000000.svg?style=for-the-badge&logo=jest)

<p align="right">
  (<a href="#readme-top">back to top</a>)
</p>

## Getting Started

<p>
    Instructions to setup Atelier on your local machine below.
</p>

### Prerequisites

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Stack-to-the-Future/atelier.git
   ```
1. Install NPM packages
   ```sh
   npm install
   ```
1. Enter your port, API URL, and Github Token in `.env` file
   ```sh
    PORT = 8080 (or port of your choosing)
    URL = (your database URI)
    TOKEN = (your github token)
   ```
1. Run build command.
   ```sh
   npm run build
   ```
1. Run in production environment
   ```sh
   npm run start
   ```

## Usage

Atelier is run on the designated port and opens a webpage as soon as the npm run start command is utilized. It can also be accessed utilizing localhost:PORT directly in the browser.

Run linter: ``` npm run lint ```

Run tests: ```npm run test ```

Run tests with coverage: ```npm run coverage```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Include displaying of products
- [x] Implementing sorting functions
- [x] Implement modals
- [ ] Continue styling with additonal css 


See the [open issues](https://github.com/Stack-to-the-Future/atelier/issues) for a
full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Optimizations

 1. Reduction in Questions and Answers API calls to 1 initial call by presortings answers from API
 1. Reduced number of API calls made by Related Products by 50% by optimizing state 
 1. Added compression from client server to reduce webpack size

<!-- CONTRIBUTING -->
## Contributing

Feel free to join in! Whether its fixing bugs, improving documentation, or
simply spreading the word! Please see
[Contributing Guidelines](/CONTRIBUTING.md) for further guidance. If you require
assistance please don't hesitate to reach out!

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more
information.

<!-- CONTACT -->

## Contact

<h3 align='center'> Thomas</h3>
<h4 align='center'>
  <a href="https://www.linkedin.com/in/rett-harbert">Linkedin</a> |
  <a href="https://www.thomasharbert.com/">Portoflio</a>
</h4>

<h3 align='center'> Fayçal K. Rwigema</h3>
<h4 align='center'>
  <!-- <a href="https://twitter.com/">Twitter</a> | -->
  <a href="https://www.linkedin.com/in/FaycalKarasiRwigema">Linkedin</a> |
  <a href="https://github.com/1Oulala">GitHub</a>
</h4>

<h3 align='center'> Ming Lee Ng</h3>
<h4 align='center'>
  <a href="https://github.com/RedconOne">GitHub</a> |
  <a href="https://linkedin.com/in/MingLeeNg">Linkedin</a> |
  <a href="https://minglee.me">Portoflio</a>
</h4>

<p align="right">(<a href="#readme-top">back to top</a>)</p>
