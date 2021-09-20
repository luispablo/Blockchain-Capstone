# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)

# Testing the code

1. Clone the repo ```git clone https://github.com/luispablo/Blockchain-Capstone.git```
2. Go to the repo directory and install dependencies ```npm install```
3. Start Ganache local development network ```npm run ganache```
4. Run the unit tests with truffle ```truffle test```

# Generating contracts Abi's

After the project is cloned and dependencies installed, running ```truffle compile``` will leave the contract abi's in the directory ```build/contracts```.

# Rinkeby deployment information

## SquareVerifier

- transaction hash:    0x8306a7988873981b19e01b271e6eecd877742cb48b45cc2f34219dc4b0a2d5c6
- contract address:    0xF1dD9199f2dE8251371c6Eb8383639e620A797D7
- block timestamp:     1632180555
- account:             0xdeB11741FA7b8b62905d191deCf3f76b17993F9F

## SolnSquareVerifier

- transaction hash:    0x3fbab024ab0bd9d256702cc992555d7f93cd0be4db45ec9cb068bc6c4fedb90c
- contract address:    0xD5b73b1048a47eF9FFFC3Ee618147bE745dA9fa5
- block timestamp:     1632180570
- account:             0xdeB11741FA7b8b62905d191deCf3f76b17993F9F

# Project Specification (rubric)

## Project Deliverables

- [x] Student includes a README to explain how to test their code
- [ ] Student provides Contract Addresses, Contract Abi's, OpenSea MarketPlace Storefront link's.

## ERC721

- [x] Student completes the boilerplate ERC721 Mintable Contract in ERC721Mintable.sol
- [x] Student writes and passes the test cases in TestERC721Mintable.js
- [x] Student writes and passes the test cases in 'TestSquareVerifier.js'
- [x] Student writes and passes the test cases in TestSolnSquareVerifier.js

## Zokrates

- [x] Student completes the Zokrates proof in square.code by adding the variable names in square.code
- [x] Student completes test contract in SolnSquareVerifier.sol
- [x] Student writes and passes the test cases in 'TestSolnSquareVerifier.js'

## OpenSea Marketplace

- [ ] Student list ERC721/ ZoKrates tokens & complete transactions on market place

## Deployment

- [x] Student deploys ERC721 contracts with Zokrates integration
