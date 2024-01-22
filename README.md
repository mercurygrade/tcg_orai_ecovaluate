# tcg_orai_ecovaluate
## Getting Started Python Script

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Python 3.x
- pip (Python package installer)

### Setting up the Python Environment

Create a virtual environment to isolate the project dependencies:

# Smart Contract

## Overview

    This Ethereum smart contract allows users to add and retrieve analyzed data related to carbon footprints.

## Requirements

    - Node.js
    - npm (Node Package Manager)
    - Hardhat

## Configuration

    Update hardhat.config.js with the necessary configuration for the Sepolia network.

## Deployment

    Deploy the smart contract on the Sepolia network using Hardhat:

    1.Compile the smart contract:
    -npx hardhat compile

    2.Deploy the smart contract:
    -npx hardhat run scripts/deploy.js --network sepolia


```bash
# Navigate to your project folder
cd your_project_folder

# Create a virtual environment
python -m venv chat-gpt

# move to the newly created python environment
cd chat-gpt

# Activate the virtual environment
# On Windows
venv\Scripts\activate
# On Unix or MacOS
source venv/bin/activate

# Make sure your virtual environment is activated
# Install dependencies
pip install -r requirements.txt

# add chatgpt api key on the .env file
api_key=gpt_api_key_here

# Make sure your virtual environment is activated
python app.py

## Getting Started api and frontend

```bash
clone the project 
cd project
npm install
npm start
