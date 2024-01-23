
const hre = require("hardhat");

async function main() {

  const CarbonFootPrint = await hre.ethers.getContractFactory("Carbon_Foot_print"); //fetching bytecode and ABI
  const carbonFootPrint = await CarbonFootPrint.deploy("DAPP owner wallet address"); //creating an instance of our smart contract

  await carbonFootPrint.deployed();//deploying your smart contract

  console.log("Deployed contract address:", `${carbonFootPrint.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0xbDDa28a532e7665339fc7614575707B3f4985B57