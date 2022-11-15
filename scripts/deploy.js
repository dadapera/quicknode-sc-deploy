// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_DAY_IN_SECS = 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_DAY_IN_SECS;
  const lockedAmount = hre.ethers.utils.parseEther("0.00001");

  const Contract = await hre.ethers.getContractFactory("DepositAccount");
  const contract = await Contract.deploy(unlockTime, { value: lockedAmount });;

  await contract.deployed();

  console.log(
    `Contract deployed to ${contract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
