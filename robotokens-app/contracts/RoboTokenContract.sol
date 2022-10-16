// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "../@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../@openzeppelin/contracts/access/Ownable.sol";

contract RoboTokenContract is ERC721, Ownable {
        uint256 COUNTER = 1;
        
        uint256 fee = 0.02 ether;

        struct RoboToken {
            string name;
            string description;
            string creator;
            uint256 dna;
            string[] script;       
        }
        RoboToken[] public RoboTokens;

    event NewRoboToken(address indexed owner, string name, string description, string creator, uint256 dna);

      constructor()
    ERC721("RoboTokens", "RBTS")
    {}

    // INTERN CREATE A ROBO TOKEN
    function _createRoboToken(string memory _name, string memory _description, string memory _creator, uint256 _dna,string[] memory _script) internal{
        RoboToken memory newRoboToken = RoboToken(_name, _description, _creator, _dna, _script);
        RoboTokens.push(newRoboToken);
        _safeMint(msg.sender,COUNTER); 
        emit NewRoboToken(msg.sender, _name,_description,_creator,_dna);
        COUNTER ++;
    }

    // HELPER
    function _createRandomNum(string[] memory _script) internal view returns (uint256) {
        uint i = 0;
        string memory Stringfier = "";
        for(i = 0;i < _script.length;i++){
            Stringfier = string(bytes.concat(bytes(Stringfier), bytes(_script[i])));
        }
        uint256 randomNum = uint256(
        keccak256(abi.encodePacked(Stringfier))
        );
        return randomNum % 10**16;
    }

    // MAIN CREATE
    function createMyRoboToken(string memory _name, string memory _description, string memory _creator, string[] memory _script) public payable{
        require(msg.value == fee, "The fee is not enough");
        uint256 randDNA = _createRandomNum(_script);
        _createRoboToken( _name,_description,_creator,randDNA, _script);
    }

    // GET FUNCTION
    function getRoboTokens() public view returns(RoboToken[] memory){
        return RoboTokens;
    }

    function updateFee(uint256 _fee) external onlyOwner(){
        fee = _fee;
    }

    function withdraw() external payable onlyOwner {
        address payable _owner = payable(owner());
        _owner.transfer(address(this).balance);
    }

}
