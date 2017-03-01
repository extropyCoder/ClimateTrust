var BaseContract = artifacts.require("./BaseContract.sol");
var NameRegistry = artifacts.require("./NameRegistry.sol");
var Certificate = artifacts.require("./Certificate.sol");
var User = artifacts.require("./User.sol");
var TokenData = artifacts.require("./TokenData.sol");
var StandardToken = artifacts.require("./StandardToken.sol");
var ExchangeToken = artifacts.require("./ExchangeToken.sol");

module.exports = function(deployer) {
  deployer.deploy(BaseContract);
  deployer.deploy(NameRegistry);
  deployer.deploy(Certificate);
  deployer.deploy(User);
  deployer.deploy(TokenData);
  deployer.deploy(StandardToken);
  deployer.deploy(ExchangeToken);

};
