# Ecovaluate - Carbon Footprint Evaluator for Cryptocurrencies

## Overview
Ecovaluate is a Python-based application designed to evaluate the carbon footprint of cryptocurrencies using AI-driven analysis. It leverages OpenAI's GPT model to generate insights on various cryptocurrencies' environmental impact, aligning with The Carbon Games' commitment to sustainability in blockchain technology.

## Features
- **Environmental Impact Analysis**: Assessing cryptocurrencies based on factors like energy consumption, renewable energy usage, transaction efficiency, and more.
- **Custom User Preferences**: Taking into account user preferences such as investment size, risk tolerance, and specific blockchain technologies.
- **Interactive AI Responses**: Utilizing OpenAI's GPT model to provide comprehensive and understandable evaluations.

## Technical Components
- **Flask Web Server**: For handling HTTP requests and responses.
- **OpenAI Integration**: Connecting with the OpenAI API to leverage the GPT model.
- **Environment Variable Management**: Using `dotenv` for secure API key storage.
- **CORS Handling**: Ensuring cross-origin requests are managed securely.

## Installation

Before installation, ensure you have Python and pip installed on your system.

1. **Clone the Repository**:
   ```
   git clone [repository-url]
   cd [repository-directory]/python
   ```

2. **Install Dependencies**:
   ```
   pip install -r requirements.txt
   ```

3. **Environment Variables**:
   - Create a `.env` file in the python folder.
   - Add the following line:
     ```
     API_KEY='your_openai_api_key'
     ```

## Running the Application

To run the application:

```
python app.py
```

This will start the Flask server, and the application will be listening for requests.

## Usage

The application exposes an endpoint `/endpoint` which accepts POST requests with the following JSON structure:

```json
{
  "coinType": "Bitcoin",
  "coinTypeinvestmentSize": "Large",
  "investmentDuration": "Long-term",
  "riskTolerance": "Moderate",
  "preferredBlockchainTechnologies": "Proof of Stake",
  "carbonFootprintConcerns": "High"
}
```

You can test the application using tools like Postman or through a frontend interface that makes requests to this endpoint.

## Contributions

Contributions are welcome. Please open an issue first to discuss what you would like to change or add.

---

Remember to replace `[repository-url]` and `[repository-directory]` with the actual URL and directory name of your repository. This README provides a clear and concise overview, setup instructions, and usage guidance for anyone looking to understand or contribute to the project.
