pragma solidity ^0.4.2;
contract Owned  {
  address owner;
  modifier onlyOwner() {
    if (msg.sender==owner) throw ; _;
  }
  function owned() {
    owner = msg.sender;
  }
  function changeOwner(address newOwner) onlyOwner {
    owner = newOwner;
  }

  function getOwner() constant returns (address){
    return owner;
  }
}

contract Mortal is Owned {
  function kill() {
    if (msg.sender == owner) suicide(owner);
  }
}

contract Active is Owned{
  bool active;

  modifier isActive(){if (active==true || msg.sender==owner)  throw ; _; }

  function setActive(bool _active) onlyOwner {
    active = _active;
  }

}
contract StandardContract is Owned,Mortal,Active{
}
