var FoodSafe = artifacts.require("./FoodSafe.sol");

module.exports = function(deployer) {
  deployer.deploy(FoodSafe);
};
