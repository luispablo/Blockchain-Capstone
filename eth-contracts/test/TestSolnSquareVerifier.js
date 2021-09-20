
const fs = require("fs");
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const SquareVerifier = artifacts.require('SquareVerifier');

contract('SolnSquareVerifier', accounts => {

  const account_one = accounts[0];
  const account1 = accounts[1];
  const account2 = accounts[2];
  const account3 = accounts[3];
  const account4 = accounts[4];

  const { proof, inputs } = JSON.parse(fs.readFileSync("../zokrates/code/square/proof.json"));

  describe('SolnSquareVerifier contract tests', function () {

    beforeEach(async function () { 
        this.verifierContract = await SquareVerifier.new({ from: account_one });
        this.contract = await SolnSquareVerifier.new(this.verifierContract.address, { from: account_one });
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it("New solution added for contract", async function () {
      let result = await this.contract.addSolution(account2, 999, proof, inputs);
      assert(result, true, "the solution was not added")
    });

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it("ERC721 token minted for contract", async function () {
      let result = await this.contract.mintNewNFT.call(account2, 999, proof, inputs);
      assert(result, true, "the solution was not added")
    });
    
  });

});
