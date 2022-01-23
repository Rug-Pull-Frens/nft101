import { ethers } from "hardhat";

async function main() {
  // We get the contract to deploy
  const RPFContractFactory = await ethers.getContractFactory("RugPullFrens");
  const RPFContract = await RPFContractFactory.deploy();

  await RPFContract.deployed();

  console.log("RugPullFrens Contract deployed at address:", RPFContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


