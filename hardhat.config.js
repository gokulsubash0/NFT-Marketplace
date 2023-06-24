require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/ffVDFrQ9XVewynF90MOqZn0z1wAzMvYx",
      accounts: [`0x${"a5ae1c8bfdaaea1dbdf2f71db096d87654abc2e400cb11f085379405fe776907"}`],
    },
  },
};
