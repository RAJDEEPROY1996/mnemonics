const CocoCoin = artifacts.require("cocoCoin");

module.exports = function (deployer) {
  deployer.deploy(CocoCoin);
};
