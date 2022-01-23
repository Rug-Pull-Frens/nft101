import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

// declare credentials and API Key in process.env
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      INFURA_ENDPOINT: string;
      WALLET_PRIVATE_KEY: string;
      ETHERSCAN_API_KEY: string;
    }
  }
}


// This is a sample Hardhat task. To learn how to create your own go to
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// Settings
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },  
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: process.env.INFURA_ENDPOINT,
      accounts: [process.env.WALLET_PRIVATE_KEY],
      gas: "auto",
      gasPrice: "auto"
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  mocha: {
    timeout: 300000 // set longer for testing in rinkeby network
  },
};

export default config;
