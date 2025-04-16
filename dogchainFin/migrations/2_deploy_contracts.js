const Marketplace = artifacts.require("Marketplace");

module.exports = async function (deployer, network, accounts) {
  console.log('printing accounts')
  console.log(accounts)
  const arbiter = accounts[accounts.length-1]; // Use a known good local address
  console.log('printing accounts[-1]')
  console.log('printing accounts[accounts.length-1]')
  console.log(accounts[accounts.length-1])
  await deployer.deploy(Marketplace, arbiter);
};
