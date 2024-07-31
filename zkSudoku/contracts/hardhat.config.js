require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
const { vars, task } = require("hardhat/config");

const PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    sepolia: {
      url: "https://rpc.sepolia.org/",
      accounts: [PRIVATE_KEY],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY],
    },
  },


};
