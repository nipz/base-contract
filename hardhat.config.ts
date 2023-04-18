import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";

require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
  },
  networks: {
    // for testnet
    "base-goerli": {
      url: "https://goerli.base.org",
      accounts: [process.env.WALLET_KEY as string],
    },
    // for local dev environment
    "base-local": {
      url: "http://localhost:8545",
      accounts: [process.env.WALLET_KEY as string],
    },
  },
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: {
      // Basescan doesn't require an API key, however
      // Hardhat still expects an arbitrary string to be provided.
      "base-goerli": "PLACEHOLDER_STRING",
    },
    customChains: [
      {
        network: "base-goerli",
        chainId: 84531,
        urls: {
          apiURL: "https://api-goerli.basescan.org/api",
          browserURL: "https://goerli.basescan.org",
        },
      },
    ],
  },
};

export default config;
