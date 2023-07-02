const ManuNFT = artifacts.require("ManuNFT");

module.exports = async (deployer) => {

  const accounts = await web3.eth.getAccounts()
  
  await deployer.deploy(ManuNFT, 'Manu NFT', 'MNT', 10, accounts[1]);
};
