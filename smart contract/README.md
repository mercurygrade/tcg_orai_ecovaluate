# Carbon Footprint Analysis Smart Contract

This repository contains a smart contract and its deployment scripts for a blockchain-based Carbon Footprint Analysis platform. The contract utilizes Ethereum's ERC20 token standard and OpenZeppelin's security standards to create a token system named "Carbon emission" (CO2). This project is designed to incentivize users to analyze and submit data related to carbon emissions, contributing to a more sustainable and environmentally conscious blockchain ecosystem.

## Features

- **ERC20 Token Creation**: Implements an ERC20 token named "Carbon emission" with ticker "CO2", with an initial supply of 70 million tokens (adjustable for decimals).
- **Data Structuring**: Uses a `Data` struct to manage carbon analysis data, including the request, result, and timestamp.
- **Token Issuance and Reward System**: Allows the contract owner to mint additional tokens and rewards users for submitting carbon footprint analysis data.
- **Data Management**: Functions to add, retrieve, and manage user-submitted data.
- **Event Logging**: Implementation of an event logging system for tracking data submissions on the blockchain.

## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have Node.js and npm installed. You will also need to set up an Ethereum development environment. We recommend using Hardhat, a development framework for Ethereum.

### Installation

1. Clone the repository:
   ```shell
   git clone [repository-url]
   ```

2. Install the necessary node modules:
   ```shell
   npm install
   ```

3. Create a `.env` file at the root of your project and add the following:
   ```
   API_KEY=[Your Ethereum node API key]
   WALLET_PRIVATE_KEY=[Your Ethereum wallet private key]
   ```

### Running Tests

To run tests, execute the following command:

```shell
npx hardhat test
```

### Deployment

To deploy the smart contract to a testnet or mainnet, modify the `scripts/deploy.js` file with the desired network configurations and run:

```shell
npx hardhat run scripts/deploy.js --network [network-name]
```

## Usage

The smart contract is designed to interact with a user interface for submitting and retrieving carbon footprint analysis data. Users can earn CO2 tokens as rewards for their contributions.

### Adding Analyzed Data

Users can submit their analyzed data related to carbon emissions through the `addAnalyzedData` function, which will reward them with CO2 tokens.

### Retrieving Data

Users can retrieve their data using `getOneAnalyzedData` or `getAllAnalyzedData` functions to view individual or all data submissions.
