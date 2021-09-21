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

- transaction hash:    0xaefcdf92d8d755d66bf2ebcf01a320fd20779db3f9fb206cc6ad44e231827784
- contract address:    0x148F083Eb4BFD15e9A487e2FAdb3d248C5eee17c
- block timestamp:     1632265736
- account:             0xdeB11741FA7b8b62905d191deCf3f76b17993F9F

## SolnSquareVerifier

- transaction hash:    0x0bb9410f46fcdfdd8743072c13482fad153dfa21db004acd5041a1ec9590e2dc
- contract address:    0x4696aADc83Aa82eB64f34E345A211aE802e5bB55
- block timestamp:     1632265751
- account:             0xdeB11741FA7b8b62905d191deCf3f76b17993F9F

## Minted tokens

Minting token 1
Minted Token. Transaction: 0xa72a9e2ad62f11dd0b6d3e7f790b1aaf2b20e8f454aee78c3a19c99c42808573
Minting token 2
Minted Token. Transaction: 0xca35e3156b4253566b5236e7b6f631ba7f60c6b90769f64405a97c050592f4cd
Minting token 3
Minted Token. Transaction: 0x03d1028c2b5e4b70d7fc30e7af02c5221e00712e4385249840d7e3c57b8d94f7
Minting token 4
Minted Token. Transaction: 0xa69a542d6a55386af40731d57d16470f51148266abd701c4fc4199de0b0b1f2d
Minting token 5
Minted Token. Transaction: 0x4784309cef83a142f3a5a542c0e7d8efce870eccada72f6a80beae6e0d5d2f1d
Minting token 6
Minted Token. Transaction: 0xb807d31fd15f0aa0a8d3e39c9463a00ea8e9d1cde404e0ec4b47333e155b2a4b
Minting token 7
Minted Token. Transaction: 0x76c066e5d6057ec099e8e7b4adaeb02d12bad584073175233691dc5485732e71
Minting token 8
Minted Token. Transaction: 0xe7683cf3fbc7405146cd9e2369f5440abbf93e93f8faf5ee13a38f6707234208
Minting token 9
Minted Token. Transaction: 0xeec5dae1df10db6c15eeb75058317ee20471e051855f2b6011a9242a7dbb97f8
Minting token 10
Minted Token. Transaction: 0x92456f77f1b77b109efab6137e6492f617f0c4e46958a14439dbe8204d6e77d3

## OpenSea

### Items for sale

- https://testnets.opensea.io/assets/0x4696aadc83aa82eb64f34e345a211ae802e5bb55/1
- https://testnets.opensea.io/assets/0x4696aadc83aa82eb64f34e345a211ae802e5bb55/2
- https://testnets.opensea.io/assets/0x4696aadc83aa82eb64f34e345a211ae802e5bb55/3
- https://testnets.opensea.io/assets/0x4696aadc83aa82eb64f34e345a211ae802e5bb55/4
- https://testnets.opensea.io/assets/0x4696aadc83aa82eb64f34e345a211ae802e5bb55/5

### Purchasing transactions

All my tokens where purchased from my other address: 0xdeB11741FA7b8b62905d191deCf3f76b17993F9F (https://testnets.opensea.io/0x896439f1b792e4c4443df04bbaec2dc1612349d3)

- Token 1: https://rinkeby.etherscan.io/tx/0x56f9ee9f7491bc3593dc959635100c463c76b17decb4119e0dd1be00d783e9af
- Token 2: https://rinkeby.etherscan.io/tx/0x7be204f6d442f5a17cf4d98791fefc28f38b9e865d993362d2ed8038e8c711b4
- Token 3: https://rinkeby.etherscan.io/tx/0x9cfe7b8934420a6bf87a6c87947335bbbfd292ec0d50d91cb2654032333dc610
- Token 4: https://rinkeby.etherscan.io/tx/0x63babefc5f803028cd2004dae47aed3561801380bc92ec67f39b2400a25557c3
- Token 5: https://rinkeby.etherscan.io/tx/0x947b887205e11e3c8fcba1663dbcbd32b4091ace62c05cd8fbb39849f5964d8d

# Project Specification (rubric)

## Project Deliverables

- [x] Student includes a README to explain how to test their code
- [x] Student provides Contract Addresses, Contract Abi's, OpenSea MarketPlace Storefront link's.

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

- [x] Student list ERC721/ ZoKrates tokens & complete transactions on market place

## Deployment

- [x] Student deploys ERC721 contracts with Zokrates integration
