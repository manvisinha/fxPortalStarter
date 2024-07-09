const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {

  const privateKey = process.env.PRIVATE_KEY;

  const networkAddress = "https://ethereum-sepolia-rpc.publicnode.com";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x2A601ff6CcB9AB8416D09DAd012192286A0EF69D";

  const LArt = await ethers.getContractFactory("LineArt", signer);
  const contract = await LArt.attach(contractAddress);

  await contract.mint(5);

  console.log("Minted 5 LineArt NFTs");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
