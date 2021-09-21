
const HDWalletProvider = require('@truffle/hdwallet-provider');
const web3 = require('web3');
const fs = require("fs");
const config = JSON.parse(fs.readFileSync("./.mintConfig"));

const MNEMONIC = config.MNEMONIC
const INFURA_KEY = config.INFURA_KEY
let NFT_CONTRACT_ADDRESS = config.CONTRACT_ADDRESS
let OWNER_ADDRESS = config.OWNER_ADDRESS
const NETWORK = config.NETWORK
const NUM_TOKENS = 10

const proofs =  [];
for (let i = 6; i < 10; i++) proofs.push(JSON.parse(fs.readFileSync(`../zokrates/code/square/proof_0${i}.json`)));

const CONTRACT_FILE = require('./build/contracts/SolnSquareVerifier');
const NFT_ABI = CONTRACT_FILE.abi;

if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
  console.error("Please set a mnemonic, infura key, owner, network, and contract address.")
  return
}

(async function main() {
  try {
    const provider = new HDWalletProvider(MNEMONIC, `https://rinkeby.infura.io/v3/${INFURA_KEY}`);
    const web3Instance = new web3(provider);
        
    const nftContract = new web3Instance.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS, { gasLimit: "1000000" });

    // Tokens minted directly to the owner.
    let tokenId = 17;

    for (const proof of proofs) {
      tokenId++;
      console.log(`Minting token ${tokenId}`);
      await nftContract.methods.mintNewNFT(OWNER_ADDRESS, tokenId, proof.proof, proof.inputs).send({ from: OWNER_ADDRESS, gas: 3000000 }, (error, result) => {
        if (error) console.log(error);
        else console.log("Minted Token. Transaction: " + result); 
      });
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
