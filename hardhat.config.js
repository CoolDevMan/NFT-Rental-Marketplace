/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
// require('solidity-coverage')
// require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const MNEMONIC = process.env.MNEMONIC || "";
const POLYGON_MUMBAI_RPC_URL = process.env.ALCHEMY_POLYGON_MUMBAI_RPC_URL || "";
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "";
// optional
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";


 /**
  * @type import('hardhat/config').HardhatUserConfig
  */
module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url:POLYGON_MUMBAI_RPC_URL, 
      accounts: {mnemonic: MNEMONIC}
      // accounts: [`0x${PRIVATE_KEY}`],
    }
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  namedAccounts: {
    deployer: {
      default: 0,
    }
  }
}