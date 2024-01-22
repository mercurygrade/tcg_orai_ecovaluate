import os
from flask import Flask, request, jsonify
from openai import OpenAI
from dotenv import load_dotenv
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

load_dotenv()

openai_key = os.getenv('api_key')

def request_template(
    coinType,
    coinTypeinvestmentSize,
    investmentDuration,
    riskTolerance,
    preferredBlockchainTechnologies,
    carbonFootprintConcerns):
    
    return (f"I want you to calculate the carbon footprint of a given cryptocurrency considering the following factors and provide suggestions as well:"
            f"- Energy Consumption: Assess the energy usage of the blockchain's consensus mechanism (e.g., Proof of Work vs. Proof of Stake). Higher energy consumption negatively impacts the carbon footprint score."
            f"- Renewable Energy Usage: Determine the proportion of renewable energy sources used in the blockchain's operations. Higher renewable energy usage positively influences the score."
            f"- Transaction Efficiency: Evaluate the energy cost per transaction. Blockchains with lower energy consumption per transaction are rated higher."
            f"- Node Distribution: Assess the geographical distribution of nodes. Diverse global distribution may indicate a reliance on a variety of energy sources, impacting the carbon footprint."
            f"- Blockchain Scaling Solutions: Consider the implementation of scaling solutions (like Layer 2 protocols) that reduce overall energy consumption."
            f"- Carbon Offset Initiatives: Investigate any carbon offsetting measures or environmental initiatives undertaken by the blockchain organization."
            f"- Decentralization Level: Examine the level of decentralization. A highly centralized network might have different energy implications compared to a decentralized one."
            f"- Network Size and Activity: Larger networks with more nodes and transactions can have a larger carbon footprint. Evaluate the size and activity level of the blockchain."
            f"- Mining Hardware Efficiency: For Proof of Work blockchains, consider the efficiency of mining hardware. More efficient hardware can lower the environmental impact."
            f"- Public Transparency: Rate higher those blockchains that provide transparent and regular reports on their energy consumption and carbon footprint."
            f"Here are the investor's preferences regarding their investment:"
            f"- Asset Selection: {coinType} "
            f"- Investment Parameters: Size:{coinTypeinvestmentSize}, Duration: {investmentDuration}, Risk Tolerance: {riskTolerance}, Preferred Blockchain Technology: {preferredBlockchainTechnologies}"
            f"- Sustainability Concerns: Level of concern regarding carbon footprint: {carbonFootprintConcerns}."
            f"You should return a string like this and make it short:"
            f"carbon_footprint: A number or percentage ranging from 0 to 100, representing the grade of contribution to carbon footprint. Higher numbers indicate higher contribution considering the above cases."
            f"suggestions: If the carbon footprint is higher, suggest 3 alternatives with a short description for each."
            f"Suggestions should be labeled as option-1, option-2, option-3.")

client = OpenAI(api_key=openai_key)

def interactive_chat(
    question,    
    temperature=0.7,
    max_tokens=200,
    model="gpt-3.5-turbo" 
):
    """Interactive tool to chat with ChatGPT."""
    

    messages = []
    messages.append({"role": "user", "content": question})
    response = client.chat.completions.create(
        model=model,
        messages=messages,
        max_tokens=max_tokens,
        temperature=temperature,
    )
    
    return response.choices[0].message.content



@app.route('/endpoint', methods=['POST'])
def endpoint():
    
    
    # Access query sent from the user
    data = request.get_json()
     
    # Extract user pererence
    coinType = data['coinType']
    coinTypeinvestmentSize = data['coinTypeinvestmentSize']
    investmentDuration = data['investmentDuration']
    riskTolerance = data['riskTolerance']
    preferredBlockchainTechnologies = data['preferredBlockchainTechnologies']
    carbonFootprintConcerns = data['carbonFootprintConcerns']
    
    
    question = request_template(
        coinType,
        coinTypeinvestmentSize,
        investmentDuration,
        riskTolerance,
        preferredBlockchainTechnologies,
        carbonFootprintConcerns)
      
    # Process the message or perform any necessary operations
    gpt_answer = interactive_chat(question)
    # print(gpt_answer)
    
    # Create a response object with the processed message
    response = {'processed_message': gpt_answer}
    
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')