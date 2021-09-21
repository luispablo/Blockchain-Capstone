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

## Minted tokens

Minting token 11
Minted Token. Transaction: 0xe2fc92b673c6e0b23e4466eb3c3f9a843d7576f53aa194f63abc6271085083ce
Minting token 12
Minted Token. Transaction: 0x02d2be8dcae2069c05441d922838db910c35b6dde6fd3a653a5b122c1f80ea79
Minting token 13
Minted Token. Transaction: 0xbe3fd438012f8c057f9fe2f3b6a1a723149af8e33a0ea6895b6aa26969d43cd7
Minting token 14
Minted Token. Transaction: 0x5cbd30c44d7fec28aceb49db5752ee27f46682929db712d021a57bb1a9f2443d
Minting token 15
Minted Token. Transaction: 0x5467d732c9496101a184ddbea803cd912668035677401e6803fb134384ea2d2c
Minting token 16
Minted Token. Transaction: 0x66c68b85ed9da7639cc4d04164dcfc428b1ec3f244e5b2bd94efb54323fd5feb
Minting token 17
Minted Token. Transaction: 0xa5629e8b1eaca0550d34fe1991c162ad6f5aee0f783e08b6b7cf572e83fa733f
Minting token 18
Minted Token. Transaction: 0x14a1e52da892d6ac588378608acbcd189400e3daa38f017f0575bd00783b58cc
Minting token 19
Minted Token. Transaction: 0xfc81ff1ed8985ff7148d8bb854878bf079206ddfea79d62fd57715b9bf8dd29f
Minting token 20
Minted Token. Transaction: 0x3708743902f73620379952cec689a4f0bf30462ec2e6ca18b58ed55e0bd09852
Minting token 21
Minted Token. Transaction: 0x5c2db3a3a7c529248cc056fa7f1ea120d3c2c758ee04a43ac123f0a175784e9c

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
