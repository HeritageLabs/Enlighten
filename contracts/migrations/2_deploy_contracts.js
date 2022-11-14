const Books = artifacts.require("./Legacies.sol");

module.exports = async function(deployer) {
  await deployer.deploy(Books);
};
