//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Carbon_Foot_print is ERC20, Ownable {
    address payable public own;
    uint256 internal constant TOKEN_SUPPLY = 70_000_000;
    uint256 internal constant TOKEN_SIZE = 10**18;
    string internal constant TOKEN_NAME = "Carbon emission";
    string internal constant TOKEN_TICKER = "CO2";

    constructor(address initialOwner)
        Ownable(initialOwner)
        ERC20(TOKEN_NAME, TOKEN_TICKER)
    {
        own = payable(msg.sender);
        _mint(own, TOKEN_SUPPLY * TOKEN_SIZE);
    }

    struct Data {
        string analysisRequest;
        string analysisResult;
        uint256 storedTimestamp;
    }

    function issueToken(uint256 amount, uint256 decimal) public onlyOwner {
        _mint(msg.sender, amount * 10**decimal);
    }

    event DataAdded(
        address indexed user,
        string analysisRequest,
        string analysisResult,
        uint256 rewardToken
    );

    mapping(address => Data[]) public analyzedData;

    function addAnalyzedData(
        string memory analysisRequest,
        string memory analysisResult
    ) public {
        Data memory newData = Data(
            analysisRequest,
            analysisResult,
            block.timestamp
        );
        analyzedData[msg.sender].push(newData);
        uint256 rewardToken = 1 * 10**3;
        
        require(
            balanceOf(owner()) >= rewardToken,
            "Insufficient balance for reward"
        );
        
        _burn(owner(), rewardToken);
        transfer(msg.sender, rewardToken);
        emit DataAdded(
            msg.sender,
            analysisRequest,
            analysisResult,
            rewardToken
        );
    }

    function getOneAnalyzedData(uint256 _id) public view returns (Data memory) {
        return analyzedData[msg.sender][_id];
    }

    function getAllAnalyzedData() public view returns (Data[] memory) {
        return analyzedData[msg.sender];
    }
}