# LineArt Solidity Smart Contract
This project provides an overview and detailed instructions for the LineArt.sol smart contract. The contract allows the owner to mint a limited number of Line Art NFTs, extending the ERC721A standard with additional functionalities.

## Overview
The LineArt contract enables the creation and management of Line Art NFTs on the Ethereum blockchain. Each NFT represents a unique piece of line art and is associated with a prompt description.

## Features
- **Minting**: The contract owner can mint Line Art NFTs, with a limit of 5 tokens in total.
- **Base URL**: The contract has a base web address for the NFT metadata. The full metadata URL is created by adding the token ID to this base address.
- **Prompt Description**: The contract has a function to get the description of the artwork, which is "ink illustration- line art portraying life."

## Contract Deployment

### Deployment Steps

1. **Install Hardhat**: If you haven't installed Hardhat, run:
    ```sh
    npm install --save-dev hardhat
    ```

2. **Create a Hardhat Project**: If you don't have a Hardhat project, initialize one:
    ```sh
    npx hardhat
    ```

3. **Write Deployment Script**: Create a deployment script `deploy.js` in the `scripts` folder:
    
4. **Deploy to Amoy Testnet**:
    ```sh
    npx hardhat run scripts/deploy.js --network amoy
    ```

## Contract Functions

### `mint(uint256 quantity)`

Allows the owner to mint a specified quantity of Line Art NFTs.

- **Modifier**: `onlyOwner` (The function can only be executed by the contract owner.)
- **Parameters**:
  - `quantity`: The number of NFTs to be minted.
- **Requirements**:
  - The total supply of NFTs after minting must not exceed the maximum quantity (5).

### `_baseURI() internal view override returns (string memory)`

Overrides the baseURI function from ERC721A to return the base URL for the NFTs.

- **Returns**: The base URL for the NFTs.

### `promptDescription() external view returns (string memory)`

Returns the prompt description associated with the Line Art NFTs.

- **Returns**: The prompt description string.
