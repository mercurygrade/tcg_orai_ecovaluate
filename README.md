# Ecovaluate - Blockchain Carbon Footprint Analysis

## Introduction

Ecovaluate is an innovative project designed to assess and minimize the carbon footprint associated with blockchain investments. Utilizing a combination of blockchain technology and artificial intelligence, this project aims to provide investors and stakeholders with a clear understanding of the environmental impact of their blockchain-related activities and offers viable solutions for a more sustainable approach.

## Project Structure

The Ecovaluate project comprises three main components:

1. **Python Script:** A backend service which interacts with OpenAI's GPT model to analyze and evaluate the carbon footprint of blockchain investments.
2. **Smart Contract:** An Ethereum-based smart contract for recording and retrieving analyzed data regarding carbon footprints.
3. **API and Frontend:** A user-friendly interface that allows users to interact with the system, submit data for analysis, and view results.

## Getting Started with the Python Script

### Prerequisites

- Python 3.x
- pip (Python package installer)

### Setting Up the Environment

1. **Clone the Repository:**
   ```bash
   git clone [repository-url]
   ```

2. **Navigate to the Python Script Directory:**
   ```bash
   cd ecovaluate/python_script
   ```

3. **Create a Virtual Environment:**
   ```bash
   python -m venv eco-env
   ```

4. **Activate the Virtual Environment:**
   - Windows: `eco-env\Scripts\activate`
   - Unix or MacOS: `source eco-env/bin/activate`

5. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

6. **Set Up Environment Variables:**
   Create a `.env` file in the `python_script` directory and add your OpenAI API key:
   ```
   api_key=YOUR_OPENAI_API_KEY
   ```

7. **Run the Script:**
   ```bash
   python app.py
   ```

## Smart Contract Setup

### Requirements

- Node.js
- npm (Node Package Manager)
- Hardhat

### Configuration and Deployment

1. **Compile the Smart Contract:**
   ```bash
   npx hardhat compile
   ```

2. **Deploy on Sepolia Network:**
   Update `hardhat.config.js` with Sepolia network configurations and deploy using:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

## API and Frontend Setup

1. **Clone the Project:**
   ```bash
   git clone [repository-url]
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd ecovaluate/api_and_frontend
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Start the Application:**
   ```bash
   npm start
   ```

---

With Ecovaluate, we take a step towards a greener future, making blockchain investments more environmentally conscious and sustainable.
