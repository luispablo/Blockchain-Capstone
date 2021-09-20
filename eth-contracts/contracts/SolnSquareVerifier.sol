pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

import './SquareVerifier.sol';
import './ERC721Mintable.sol';

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is LuispaERC721Token {

  // TODO define a solutions struct that can hold an index & an address
  struct Solution {
    uint256 tokenId;
    address addr;
  }

  // TODO define an array of the above struct
  Solution[] solutions;

  // TODO define a mapping to store unique solutions submitted
  mapping(bytes32 => bool) submittedSolutions;

  Verifier verifier;

  // TODO Create an event to emit when a solution is added
  event SolutionAdded (Solution sol);

  constructor(address verifierContractAddr) public {
    verifier = Verifier(verifierContractAddr);
  }

  modifier newSolution (SquareVerifier.Proof memory proof, uint[2] memory input) {
    require(!submittedSolutions[keccak256(abi.encodePacked(input))], "Solution already submitted");
    _;
  }

  // TODO Create a function to add the solutions to the array and emit the event
  function addSolution (address addr, uint256 tokenId, SquareVerifier.Proof memory proof, uint[2] memory input) newSolution(proof, input) public returns (bool) {
    bytes32 key = keccak256(abi.encodePacked(input));
    bool verified = verifier.verifyTx(proof, input);

    if (verified) {
      submittedSolutions[key] = true;
      Solution memory solution = Solution(tokenId, addr);
      solutions.push(solution);
      emit SolutionAdded(solution);
    }

    return verified;
  }

  // TODO Create a function to mint new NFT only after the solution has been verified
  //  - make sure the solution is unique (has not been used before)
  //  - make sure you handle metadata as well as tokenSuplly
  function mintNewNFT (address addr, uint256 tokenId, SquareVerifier.Proof memory proof, uint[2] memory input) public {
      bool verified = addSolution(addr, tokenId, proof, input);

      if (verified) {
        super.mint(addr, tokenId);
      }
    }
}

contract Verifier {
  function verifyTx(SquareVerifier.Proof memory proof, uint[2] memory input) public returns (bool r);
}
