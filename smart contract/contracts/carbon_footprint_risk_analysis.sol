// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Carbon_Foot_Print {
    struct Data {
        string analysisRequest;
        string analysisResult;
        uint256 storedTimestamp;
    }

    event DataAdded(
        address indexed user,
        string analysisRequest,
        string analysisResult
    );

    mapping(address => Data[]) public analyzedData;

    function addAnalyzedData(string memory analysisRequest, string memory analysisResult) public {
        Data memory newData = Data(analysisRequest, analysisResult, block.timestamp);
        analyzedData[msg.sender].push(newData);
        emit DataAdded(msg.sender, analysisRequest, analysisResult);
    }

    function getOneAnalyzedData(uint256 _id) public view returns (Data memory) {
        return analyzedData[msg.sender][_id];
    }

    function getAllAnalyzedData() public view returns (Data[] memory) {
        return analyzedData[msg.sender];
    }
}
