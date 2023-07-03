
# ManuNFT Decentralized Marketplace
With this marketplace, anyone can create the NFTs.  To create the NFTs you must have to connect with the Metamask wallet.  Anyone can also sell and buy NFTs on this ManuNFT Marketplace plateform.  We have deployed on Sepolia Testnetwork and also tested on Local Network with Truffle.

Live Demo : https://anaxindialtd.com/manunft/

Follow the steps below to download, install, and run this project.

## Dependencies
Install these prerequisites to follow along with the tutorial. See free video tutorial or a full explanation of each prerequisite.
- NPM: https://nodejs.org
- Truffle: https://github.com/trufflesuite/truffle
- Ganache-CLI: https://docs.nethereum.com/en/latest/ethereum-and-clients/ganache-cli/
- Tailwind CSS: https://tailwindcss.com/
- ReactJs : https://react.dev/
- Infura : https://www.infura.io/
- Alchemy : https://www.alchemy.com/


## Step 1. Clone the project
`git clone https://github.com/mkbhiva/ManuNFT-Marketplace <PROJECT NAME>`

## Step 2. Install dependencies
```sh
$ cd <PROJECT NAME>
$ yarn install # or npm install
```
## Step 3. Change Infura Credentials
Open the .env file and update your own Infura details below.
```sh
INFURA_API_KEY = 2S0MHwTSdfdkZqbN034d0fLR8G2wX2p8N
INFURA_SECRET_KEY = 75173210ca85a0ae343042dfbfbf56e0c62a60b

```

## Step 4. Change Sepolia Testnetwork Credentials
Open the truffle-config.js file and update your own details below.
```sh
provider: () => new HDWalletProvider(mnemonic, 'https://eth-sepolia.g.alchemy.com/v2/YourDetails'),

```

## Step 5. Compile & Deploy Smart Contract
`$ truffle migrate --reset`
Migrate your smart contract each time your restart ganache.

## Step 6. Run the Front End Application
`$ yarn start`
Visit this URL in your browser: http://localhost:3000

