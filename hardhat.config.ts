import * as dotenv from "dotenv";
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomicfoundation/hardhat-network-helpers";

const { MUMBAI_RPC_URL, PRIVATE_KEY, POLYGONSCAN_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.10",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  networks: {
    mumbai: {
      url: MUMBAI_RPC_URL as string,
      accounts: [PRIVATE_KEY as string],
    },
    frame: {
      httpHeaders: { origin: "hardhat" },
      url: "http://localhost:1248",
    },
  },
  etherscan: {
    apiKey: {
      polygon: POLYGONSCAN_KEY as string,
      polygonMumbai: POLYGONSCAN_KEY as string,
    },
  },
};

export default config;
