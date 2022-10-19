# Welcome to Jest Testing Repository

[![Node.js CI](https://github.com/tmquan202/jest-unit-test/actions/workflows/node.js.yml/badge.svg)](https://github.com/tmquan202/jest-unit-test/actions/workflows/node.js.yml)

### You will find this repo the following stuff: 

* The solution.js - an infamous math problem from R.ODE BATTLE 2022
* The solution.test.js - this is where the testing begin
* Unit Test script using Jest framework

### Screenshots

![Build process](https://github.com/tmquan202/jest-unit-test/blob/a29fdf3d6906e1a4467817d2a4d33825500b56eb/screenshots/build-process.png)
 
![DDT Source Code](https://github.com/tmquan202/jest-unit-test/blob/a29fdf3d6906e1a4467817d2a4d33825500b56eb/screenshots/source-code.png)

### Setup

#### Here's how you can setup your own project

* Create a folder, this will be your project container

We will use npm to install Jest

* Install [Node.js](https://nodejs.org/en/), this will also install npm
* Go into your folder your have created, open terminal (cmd) and install Jest
```
npm install --save-dev jest
```
Your folder shuould have 2 JSON files and node_modules folder

* Open package.json, add scripts for testing under devDependencies
```
"type": "module",
"scripts": {
   "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage"
}
```
Your package.json file should look like this
```
{
  "devDependencies": {
    "jest": "^29.2.0"
  },
  "type": "module",
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js --coverage"
  }
}
```

* Create a js file as the main app and a test.js file as the test file 

Well done, you have finally setup your project

#### Connect me via quantm.lqd@gmail.com
#### Copyright &#169; 2022 TMQuan
