const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/LineArt.sol/LineArt.json");

const tokenAddress = "0x0dDB021C7378A7E4fADe9ca4bF4473B61211b2f1";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x743D1B146F23Aba5dF09972F65c342FA306b9E23"; 

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("LineArt Token Balance: " + await token.balanceOf(walletAddress) + "fxLA tokens");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
