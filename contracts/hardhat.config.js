require("@nomicfoundation/hardhat-toolbox");
var secret = require("./secret.json");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.6",

  defaultNetwork: "testnet",
  networks: {
    hardhat: {
    },
    testnet: {
      url: "https://goerli.infura.io/v3/" + secret.APP_ID,
      accounts: [`0x` + secret.PRIVATE_KEY],
      chainId: 5,
    },
  }
}
