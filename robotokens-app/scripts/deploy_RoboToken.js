const hre = require("hardhat");

async function main() {

  const RoboTokenNFT = await hre.ethers.getContractFactory("RoboTokenContract");
  const roboTokenNFT = await RoboTokenNFT.deploy();

  await roboTokenNFT.deployed();

  console.log("RoboToken deployed to:", roboTokenNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => { 
    console.error(error);
    process.exit(1);
  });