// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../@openzeppelin/contracts/access/Ownable.sol";

contract RoboTokenBetPools is Ownable{

    mapping(address => uint256) public Robot1pool;
    address[] public Robot1poolAddresses;
    mapping(address => uint256) public Robot2pool;
    address[] public Robot2poolAddresses;
    uint256 Robot1poolTotal = 0;
    uint256 Robot2poolTotal = 0;
    uint addressRegistryCount;

    function placeBetOnRobot1(uint256 _betAmount) public payable{
        require(msg.value >= _betAmount);
        address Owner = msg.sender;
        Robot1poolAddresses.push(Owner);
        Robot1pool[Owner] = _betAmount;
        Robot1poolTotal += _betAmount;
        addressRegistryCount++;
    }

    function placeBetOnRobot2(uint256 _betAmount) public payable{
        require(msg.value >= _betAmount);
        address Owner = msg.sender;
        Robot2poolAddresses.push(Owner);
        Robot2pool[Owner] = _betAmount;
        Robot2poolTotal += _betAmount;
        addressRegistryCount++;
    }

    function getRobot1poolTotal() public view returns(uint256) {
        return Robot1poolTotal;
    }

    function getRobot2poolTotal() public view returns(uint256) {
        return Robot2poolTotal;
    }

    // function distributeToWinners(uint256 winner) public {
    //     uint256 totalPrizePool = Robot1poolTotal + Robot2poolTotal;
    //     if(winner == 0){
    //         totalPrizePool = 1;
    //         // Distribute Proportionally to winning team,
    //     }
    //     if(winner == 1){
    //         // Distribute Proportionally to winning team,
    //     }
    // }

    function End(address RoboCreator) public payable onlyOwner {
    uint256 fivePercent =  address(this).balance * 5 / 100;
    (bool hs, ) = payable(RoboCreator).call{value: fivePercent}("");
    require(hs);
    (bool os, ) = payable(owner()).call{value: fivePercent}("");
    require(os);
    }
}