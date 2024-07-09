const { ethers } = require("hardhat");
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");
const ABI = require("../artifacts/contracts/LineArt.sol/LineArt.json");
require("dotenv").config();


async function main() {
  const networkAddress = "https://ethereum-sepolia-rpc.publicnode.com";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);
  const signer = wallet.connect(provider);

  const ArtNFT = await ethers.getContractFactory("LineArt", signer);
  const LAnft = ArtNFT.attach("0x2A601ff6CcB9AB8416D09DAd012192286A0EF69D");
  const fxRootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
  const fxRoot = new ethers.Contract(fxRootAddress, FXRootContractAbi, signer);

  const token= [0, 1, 2, 3, 4];
  const approveTx = await LAnft.setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Set Approval successfully called!");

  for (const tokenID of token) {
    const depositTx = await fxRoot.deposit(LAnft.address, wallet.address, tokenID, "0x6566");
    await depositTx.wait();
  }

  console.log("LineArt NFTs have been transferred.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
