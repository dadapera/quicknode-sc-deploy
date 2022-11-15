require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://twilight-burned-meme.ethereum-goerli.discover.quiknode.pro/4b756b9f5ae24fe1bf70d0ae29c023de4e607762/",
      accounts: ["a49d6d007b47783b7a23f88905d59cfaa5e4fcdbd886bdff51854312710d7dd1"]
    }
  },
  solidity: "0.8.17",
};
