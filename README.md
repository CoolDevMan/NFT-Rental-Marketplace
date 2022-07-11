### 💎Fullstack NFT Rental Marketplace Dapp ✨Collateral Free Renting✨

- NFT Owners can rent their NFT by specifying the name, description, rental duration, and rental price. 
- Anyone can rent the NFT from the Rental Marketplace by paying the rental price.
- The Renter will not be able to transfer the rented NFT to anyone. 
- After the end of the rental duration, either the renter, owner or anyone can call finishRenting function to transfer the NFT from Renter to the NFT Owner.

### This project consists of five pages

- Home - Displays all NFTs listed for rent in the rental marketplace
- Create NFTs - Users can create their own NFTs by filling all the details in this page
- My NFTs - Users can view the NFTs they have created
- Rented NFTs - Users can view the NFTs they have rented
- Claimable NFTs - Users can view all NFTs that is past the rental duration

<details> 
  <summary> Working Explained In Detail </summary>
  <h2> Working Explained In Detail </h2>

- Anyone who has created a ERC721 contract with additional functions similar to NFT.sol can list their NFTs for Rent in the Marketplace.
- When an owner lists a NFT for rent in the Marketplace, the ownership of the item will be transferred from the owner to the marketplace.
- Anyone can rent the NFTs listed in the marketplace by paying rent.
- When a user rents a NFT, the rental price will be transferred from the buyer to the seller and the NFT will be transferred from the marketplace to the renter.
- The Renter will not be able to transfer the NFT to anyone, because the NFT.sol contract prevents the token transfer while it is on rent.
- Finish Renting function will enable anyone to end the renting process, and return the NFT to the NFT Owner. 

<strong> The marketplace owner will be able to set a listing fee. This fee will be paid by the NFT owner when listing NFT in the renal marketplace, and transferred to the contract owner, enabling the owner of the marketplace to earn recurring revenue from any listing transacted in the marketplace. </strong>
 
</details>


## Directory Structure 📂
- `pages/{componenet-name.js}` ⏩ Pages folder contains all components of the dapp.
- [`contracts`](https://github.com/MigelTom/NFT-Rental-Marketplace/tree/main/contracts) ⏩ NFT Rental Marketplace and NFT Smart contracts that are deployed in the Polygon Mumbai Test Network.
- [`test`](https://github.com/MigelTom/NFT-Rental-Marketplace/tree/main/test) ⏩ Tests for Smart Contracts.


## About Contracts 📄

#### This Project Is Deployed On [Polygon Mumbai Testnet [Check Out The Contract At]](https://mumbai.polygonscan.com/address/0x27CF594301c3e28D7ec6cf97B8050ED11DBEa8b3) 

This project consists of two smart contracts:

- NFT Contract - This contract allows users to mint unique digital assets.

- Marketplace Contract - This contract allows NFT owners to put their digital assets for rent on an open market.


## How To Run This Project Locally 🏃🏾‍♂️💨

### Clone This Repo 
```shell

git clone https://github.com/MigelTom/NFT-Rental-Marketplace.git
cd NFT-Rental-Marketplace
```

### Install Dependencies

``` shell
npm install
```
Rename `.env.example` to `.env` ⏩ Then paste your MNEMONIC and RPC_URL in the .env file

### Compile The Contracts & Test It

``` shell

npx hardhat compile
npx hardhat test

npx hardhat run scripts/deploy.js --network mumbai

npm install -D hardhat-deploy
npm install --save-dev  @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
npm install --save-dev @nomiclabs/hardhat-etherscan

npx hardhat verify --network networkname address

```

### [Frontend Instructions]

``` shell
cd frontend
npm install
npm run dev
```


## Working Explained In Detail 📃
- Anyone who has created a ERC721 contract with additional functions similar to NFT.sol can list their NFTs for Rent in the Marketplace.
- When an owner lists a NFT for rent in the Marketplace, the ownership of the item will be transferred from the owner to the marketplace.
- Anyone can rent the NFTs listed in the marketplace by paying rent.
- When a user rents a NFT, the rental price will be transferred from the buyer to the seller and the NFT will be transferred from the marketplace to the renter.
- The Renter will not be able to transfer the NFT to anyone, because the NFT.sol contract prevents the token transfer while it is on rent.
- Finish Renting function will enable anyone to end the renting process, and return the NFT to the NFT Owner. 

``` The marketplace owner will be able to set a listing fee. This fee will be paid by the NFT owner when listing NFT in the renal marketplace, and transferred to the contract owner, enabling the owner of the marketplace to earn recurring revenue from any listing transacted in the marketplace. ```

