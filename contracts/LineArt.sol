// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract LineArt is ERC721A{

    address public owner;

    uint256 public max = 5;

    string baseUrl;

    
    string public prompt =
        "ink illustration- line art portraying life";

    constructor() ERC721A("LineArt", "LA") {
        baseUrl = "https://gateway.pinata.cloud/ipfs/QmTJHwjQMDTWifQJkFPEZdUCvHC4ekyc4tDfbgg8HjYX14";
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function mint(uint256 quantity) external payable onlyOwner{
        require(totalSupply() + quantity <= max ,"Maximum NFTS you have to mint is 5.");
        _mint(msg.sender, quantity);
    }


    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
